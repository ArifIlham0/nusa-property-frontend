"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchFeaturedProperty, PropertyItem } from "@/lib/api";

export default function HeroSection() {
    const [featured, setFeatured] = useState<PropertyItem | null>(null);

    useEffect(() => {
        const loadFeatured = async () => {
            const featData = await fetchFeaturedProperty();
            if (featData) setFeatured(featData);
        };

        loadFeatured();
    }, []);

    const recommendationTitle =
        featured?.title || "Cluster Botanical Hills A-12";
    const recommendationInstallment =
        featured?.installmentEstimate || "Cicilan 2.3 Jt/bln";
    const recommendationImage =
        featured?.imageUrl || "/images/cluster-tropical.png";

    return (
        <section
            id="beranda"
            className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-lowest via-surface-container-low/40 to-surface pb-16 pt-6 lg:pt-10"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-6 flex flex-col gap-5 z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant self-start shadow-sm">
                            <span className="material-symbols-outlined text-[16px] text-primary">
                                verified
                            </span>
                            <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">
                                Platform Agregator KPR Digital Terpadu di Indonesia
                            </span>
                        </div>
                        <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-primary tracking-tight leading-tight">
                            Wujudkan Rumah Impian dengan{" "}
                            <span className="text-primary-container relative inline-block">
                                KPR Pasti
                                <span className="absolute bottom-1 left-0 w-full h-2.5 bg-secondary-container/40 -z-10 rounded"></span>
                            </span>{" "}
                            &amp; <span className="text-secondary">Transparan</span>
                        </h1>
                        <p className="font-body-lg text-body-md lg:text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                            Jelajahi cluster hunian subsidi &amp; komersial, simulasi cicilan instan, dan ajukan berkas multi-bank ke Bank Mandiri, BTN, BCA, &amp; BSI dalam satu platform terpercaya.
                        </p>
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <a
                                href="#kalkulator-kpr"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-secondary-container text-on-secondary-fixed font-label-lg text-label-lg font-bold shadow-md hover:brightness-105 transition-all cursor-pointer"
                            >
                                <span>Simulasi Angsuran</span>
                                <span className="material-symbols-outlined text-[18px]">
                                    arrow_forward
                                </span>
                            </a>
                            <a
                                href="#cari-hunian"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container-low text-primary font-label-lg text-label-lg font-bold shadow-sm hover:bg-surface-container border border-surface-container transition-all cursor-pointer"
                            >
                                <span>Cari Unit Hunian</span>
                            </a>
                        </div>
                        <div className="flex flex-wrap items-center gap-6 pt-4 text-outline">
                            <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                                <span className="material-symbols-outlined text-secondary text-[20px]">
                                    shield
                                </span>
                                <span>Enkripsi 256-bit SSL</span>
                            </div>
                            <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                                <span className="material-symbols-outlined text-secondary text-[20px]">
                                    check_circle
                                </span>
                                <span>94% Approval Ratio</span>
                            </div>
                            <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                                <span className="material-symbols-outlined text-secondary text-[20px]">
                                    bolt
                                </span>
                                <span>Proses Ekspres Multi-Bank</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-6 relative mt-6 lg:mt-0">
                        <div className="relative mx-auto max-w-lg lg:max-w-none">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-fixed-dim/30 to-secondary-container/20 rounded-3xl blur-2xl -z-10"></div>
                            <div className="relative overflow-hidden rounded-2xl shadow-xl bg-surface-container-lowest">
                                <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px]">
                                    <Image
                                        src={recommendationImage}
                                        alt={recommendationTitle}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                        priority
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent pointer-events-none"></div>
                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-on-primary">
                                    <div>
                                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed font-bold">
                                            Cluster Rekomendasi
                                        </span>
                                        <p className="font-headline-sm text-headline-sm font-semibold">
                                            {recommendationTitle}
                                        </p>
                                    </div>
                                    <div className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-label-sm font-bold shadow-sm">
                                        {recommendationInstallment}
                                    </div>
                                </div>
                            </div>

                            {/* Floating Feature Badges for Company Profile */}
                            <div className="absolute -top-4 -right-2 sm:-right-4 bg-surface-container-lowest/95 backdrop-blur-md rounded-xl p-3 shadow-xl flex items-center gap-3 border border-surface-container-high animate-bounce [animation-duration:5s]">
                                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-[22px]">
                                        percent
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                                        Suku Bunga Terbaik
                                    </span>
                                    <span className="font-body-sm text-body-sm text-secondary font-bold">
                                        Mulai 4.75% Fixed Promo
                                    </span>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -left-2 sm:-left-4 bg-surface-container-lowest/95 backdrop-blur-md shadow-xl rounded-xl p-3.5 flex items-center gap-3 border border-surface-container-high">
                                <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                                    <span className="material-symbols-outlined text-[22px]">
                                        account_balance
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                                        Kemitraan Multi-Bank Resmi
                                    </span>
                                    <span className="font-body-sm text-body-sm text-outline font-medium">
                                        Bank BTN, Mandiri, BCA &amp; BSI
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-14 relative z-20">
                    <div className="bg-surface-container-lowest rounded-2xl p-4 lg:p-6 shadow-xl border border-surface-container">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const el = document.getElementById("cari-hunian");
                                if (el) el.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end"
                        >
                            <div className="flex flex-col gap-1.5">
                                <label className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 font-semibold">
                                    <span className="material-symbols-outlined text-[16px] text-primary">
                                        location_on
                                    </span>
                                    Wilayah Pilihan
                                </label>
                                <select
                                    defaultValue="cikarang"
                                    className="w-full bg-surface-container-low rounded-lg px-3.5 py-2.5 font-body-sm text-body-sm text-on-surface border border-outline-variant/30 focus:outline-none focus:border-primary focus:bg-surface-container transition-all cursor-pointer"
                                >
                                    <option value="jabodetabek">Semua Jabodetabek</option>
                                    <option value="cikarang">Cikarang &amp; Bekasi</option>
                                    <option value="cibarusah">Cibarusah &amp; Bogor Timur</option>
                                    <option value="tangerang">Tangerang &amp; BSD</option>
                                    <option value="bandung">Bandung Raya</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 font-semibold">
                                    <span className="material-symbols-outlined text-[16px] text-primary">
                                        home
                                    </span>
                                    Tipe Program KPR
                                </label>
                                <select
                                    defaultValue="komersial"
                                    className="w-full bg-surface-container-low rounded-lg px-3.5 py-2.5 font-body-sm text-body-sm text-on-surface border border-outline-variant/30 focus:outline-none focus:border-primary focus:bg-surface-container transition-all cursor-pointer"
                                >
                                    <option value="all">Semua Tipe Hunian</option>
                                    <option value="subsidi">Rumah Subsidi Pemerintah (FLPP)</option>
                                    <option value="komersial">Komersial Cluster Premium</option>
                                    <option value="dp0">Promo Khusus DP 0%</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 font-semibold">
                                    <span className="material-symbols-outlined text-[16px] text-primary">
                                        payments
                                    </span>
                                    Kemampuan Cicilan
                                </label>
                                <select
                                    defaultValue="1-3"
                                    className="w-full bg-surface-container-low rounded-lg px-3.5 py-2.5 font-body-sm text-body-sm text-on-surface border border-outline-variant/30 focus:outline-none focus:border-primary focus:bg-surface-container transition-all cursor-pointer"
                                >
                                    <option value="all">Semua Kisaran Budget</option>
                                    <option value="1-3">Rp 1 - 3 Juta / bulan</option>
                                    <option value="3-6">Rp 3 - 6 Juta / bulan</option>
                                    <option value="6-plus">&gt; Rp 6 Juta / bulan</option>
                                </select>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-lg bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-bold hover:brightness-105 transition-all shadow-sm cursor-pointer"
                                >
                                    <span className="material-symbols-outlined text-[18px]">
                                        search
                                    </span>
                                    <span>Cari Unit Hunian</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
