"use client";

import { useState, useMemo } from "react";

export default function KprCalculator() {
    const [mortgageType, setMortgageType] = useState<"konvensional" | "syariah">("konvensional");
    const [price, setPrice] = useState<number>(450000000);
    const [dpPercent, setDpPercent] = useState<number>(10);
    const [tenorYears, setTenorYears] = useState<number>(20);
    const [isSuccessNotification, setIsSuccessNotification] = useState(false);

    const rate = mortgageType === "konvensional" ? 0.0488 : 0.0515;
    const rateDisplay = mortgageType === "konvensional" ? "4.88% p.a" : "5.15% p.a";
    const rateTitle =
        mortgageType === "konvensional"
            ? "Suku Bunga Fixed Promo"
            : "Margin Flat Murabahah";

    const calculation = useMemo(() => {
        const dpAmount = price * (dpPercent / 100);
        const principal = price - dpAmount;
        const totalMonths = tenorYears * 12;

        let monthlyInstallment = 0;
        if (mortgageType === "konvensional") {
            const monthlyRate = rate / 12;
            monthlyInstallment =
                (principal *
                    (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
                (Math.pow(1 + monthlyRate, totalMonths) - 1);
        } else {
            const totalProfit = principal * rate * tenorYears;
            monthlyInstallment = (principal + totalProfit) / totalMonths;
        }

        const minSalary = monthlyInstallment / 0.4;
        const totalPayment = monthlyInstallment * totalMonths;
        const principalRatio = Math.min(
            95,
            Math.max(5, Math.round((principal / totalPayment) * 100))
        );
        const interestRatio = 100 - principalRatio;

        return {
            dpAmount,
            principal,
            totalMonths,
            monthlyInstallment: Math.round(monthlyInstallment),
            minSalary: Math.round(minSalary),
            principalRatio,
            interestRatio,
        };
    }, [price, dpPercent, tenorYears, mortgageType, rate]);

    const formatRupiah = (val: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
        })
            .format(val)
            .replace("IDR", "Rp");
    };

    const handleApply = () => {
        setIsSuccessNotification(true);
        setTimeout(() => setIsSuccessNotification(false), 5000);
        const el = document.getElementById("alur-pengajuan");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="kalkulator-kpr" className="w-full py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto mb-12">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                        Kalkulator Simulasi Finansial
                    </span>
                    <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-primary font-bold">
                        Simulasi KPR Instan &amp; Akurat
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                        Hitung estimasi cicilan per bulan dan uji rasio Debt Service Ratio
                        (DSR) keuangan Anda sebelum berkas diajukan ke perbankan.
                    </p>
                </div>
                <div className="bg-surface-container-lowest rounded-3xl p-6 lg:p-10 shadow-xl border border-surface-container">
                    <div className="flex items-center gap-2 p-1.5 bg-surface-container-low rounded-xl max-w-md mx-auto mb-8 border border-surface-container">
                        <button
                            type="button"
                            onClick={() => setMortgageType("konvensional")}
                            className={`flex-1 py-2.5 rounded-lg font-label-md text-label-md font-semibold text-center transition-all cursor-pointer ${
                                mortgageType === "konvensional"
                                    ? "bg-primary text-on-primary shadow-sm"
                                    : "text-on-surface-variant hover:text-on-surface"
                            }`}
                        >
                            KPR Konvensional (4.88%)
                        </button>
                        <button
                            type="button"
                            onClick={() => setMortgageType("syariah")}
                            className={`flex-1 py-2.5 rounded-lg font-label-md text-label-md font-semibold text-center transition-all cursor-pointer ${
                                mortgageType === "syariah"
                                    ? "bg-primary text-on-primary shadow-sm"
                                    : "text-on-surface-variant hover:text-on-surface"
                            }`}
                        >
                            KPR Syariah (Flat 5.15%)
                        </button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-7 flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <label className="font-label-md text-label-md text-on-surface font-semibold">
                                        Harga Properti
                                    </label>
                                    <span className="font-headline-sm text-headline-sm font-bold text-primary tabular-numbers">
                                        {formatRupiah(price)}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min={185000000}
                                    max={1500000000}
                                    step={5000000}
                                    value={price}
                                    onChange={(e) => setPrice(Number(e.target.value))}
                                    className="w-full cursor-pointer"
                                />
                                <div className="flex justify-between font-label-sm text-label-sm text-outline-variant">
                                    <span>Rp 185 Jt (Subsidi)</span>
                                    <span>Rp 1.5 Milyar</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <label className="font-label-md text-label-md text-on-surface font-semibold">
                                        Uang Muka (DP)
                                    </label>
                                    <div className="text-right">
                                        <span className="font-label-md text-label-md font-bold text-secondary">
                                            {dpPercent}%
                                        </span>
                                        <span className="text-on-surface-variant font-body-sm text-body-sm">
                                            {" "}
                                            /{" "}
                                        </span>
                                        <span className="font-label-md text-label-md font-bold text-primary tabular-numbers">
                                            {formatRupiah(calculation.dpAmount)}
                                        </span>
                                    </div>
                                </div>
                                <input
                                    type="range"
                                    min={5}
                                    max={30}
                                    step={1}
                                    value={dpPercent}
                                    onChange={(e) => setDpPercent(Number(e.target.value))}
                                    className="w-full cursor-pointer"
                                />
                                <div className="flex justify-between font-label-sm text-label-sm text-outline-variant">
                                    <span>Min 5%</span>
                                    <span>Maks 30%</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <label className="font-label-md text-label-md text-on-surface font-semibold">
                                        Jangka Waktu (Tenor)
                                    </label>
                                    <span className="font-headline-sm text-headline-sm font-bold text-primary">
                                        {tenorYears} Tahun ({calculation.totalMonths} Bulan)
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min={5}
                                    max={30}
                                    step={1}
                                    value={tenorYears}
                                    onChange={(e) => setTenorYears(Number(e.target.value))}
                                    className="w-full cursor-pointer"
                                />
                                <div className="flex justify-between font-label-sm text-label-sm text-outline-variant">
                                    <span>5 Tahun</span>
                                    <span>30 Tahun</span>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-[20px]">
                                            percent
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-label-md text-label-md text-on-surface font-semibold">
                                            {rateTitle}
                                        </p>
                                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                                            Mitra Terpilih: BTN, Mandiri, BCA &amp; BSI 2025
                                        </p>
                                    </div>
                                </div>
                                <span className="font-headline-md text-headline-md font-bold text-secondary">
                                    {rateDisplay}
                                </span>
                            </div>
                        </div>
                        <div className="lg:col-span-5 bg-primary text-on-primary rounded-2xl p-6 lg:p-8 shadow-xl flex flex-col gap-6">
                            <div>
                                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim font-bold">
                                    Hasil Estimasi Kredit
                                </span>
                                <p className="font-headline-sm text-headline-sm text-on-primary font-normal mt-1">
                                    Angsuran Bulanan
                                </p>
                                <h3 className="font-display-lg text-display-lg-mobile sm:text-display-lg text-secondary-container font-bold tracking-tight mt-1 tabular-numbers">
                                    {formatRupiah(calculation.monthlyInstallment)}
                                    <span className="text-xl sm:text-2xl font-normal text-surface-container-highest">
                                        {" "}
                                        / bln
                                    </span>
                                </h3>
                                <p className="font-body-sm text-body-sm text-surface-container-highest mt-1">
                                    Sudah termasuk margin suku bunga tetap promo
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-tertiary-container/80 flex flex-col gap-1 border border-outline/20">
                                <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase font-bold">
                                    Rekomendasi Gaji Minimum (Single/Joint)
                                </span>
                                <p className="font-headline-sm text-headline-sm font-bold text-on-primary tabular-numbers">
                                    {formatRupiah(calculation.minSalary)}
                                </p>
                                <span className="font-body-sm text-body-sm text-surface-variant text-[12px]">
                                    *DSR perbankan sehat maks. 40% dari total penghasilan bersih.
                                </span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between font-label-sm text-label-sm">
                                    <span className="text-surface-variant">
                                        Pokok Pinjaman:{" "}
                                        <strong className="text-on-primary tabular-numbers">
                                            {formatRupiah(calculation.principal)}
                                        </strong>
                                    </span>
                                    <span className="text-secondary-fixed">
                                        Porsi Bunga ({calculation.interestRatio}%)
                                    </span>
                                </div>
                                <div className="w-full h-3 bg-tertiary rounded-full overflow-hidden flex">
                                    <div
                                        className="bg-primary-fixed h-full transition-all duration-300"
                                        style={{ width: `${calculation.principalRatio}%` }}
                                        title={`Pokok: ${calculation.principalRatio}%`}
                                    />
                                    <div
                                        className="bg-secondary-container h-full transition-all duration-300"
                                        style={{ width: `${calculation.interestRatio}%` }}
                                        title={`Bunga: ${calculation.interestRatio}%`}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 font-body-sm text-body-sm text-surface-container-highest">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[18px] text-secondary-container">
                                        check_circle
                                    </span>
                                    <span>Bebas Biaya Administrasi Pengajuan via NusaProperty</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[18px] text-secondary-container">
                                        check_circle
                                    </span>
                                    <span>Termasuk simulasi Asuransi Jiwa &amp; Kebakaran</span>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={handleApply}
                                className="w-full py-4 rounded-xl bg-secondary-container text-on-secondary-fixed font-label-lg text-label-lg font-bold text-center hover:brightness-105 transition-all shadow-md active:scale-[0.99] cursor-pointer"
                            >
                                Ajukan KPR dengan Simulasi Ini →
                            </button>

                            {isSuccessNotification && (
                                <div className="p-3 rounded-lg bg-emerald-900/60 border border-emerald-400 text-emerald-200 text-sm text-center animate-fade-in">
                                    Simulasi berhasil dicatat! Mengarahkan ke alur pengajuan KPR...
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
