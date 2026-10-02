"use client";

import Image from "next/image";

export default function AppDownloadSection() {
    return (
        <section id="unduh-aplikasi" className="w-full py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary-container to-tertiary text-on-primary p-8 lg:p-14 shadow-2xl">
                    <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 flex flex-col gap-5">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tertiary text-primary-fixed font-label-sm text-label-sm font-semibold self-start border border-outline/30">
                                <span className="material-symbols-outlined text-[16px]">
                                    schedule
                                </span>
                                <span>Segera Hadir di Google Play</span>
                            </div>
                            <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl font-bold leading-tight">
                                Pantau Status KPR Real-Time Langsung di Genggaman Anda
                            </h2>
                            <p className="font-body-lg text-body-md lg:text-body-lg text-surface-container-highest max-w-2xl leading-relaxed">
                                Dapatkan notifikasi langsung saat berkas diverifikasi analis bank rekanan, tracking penerbitan surat SP3K resmi, hingga kalkulator KPR offline tanpa kuota.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                                <div className="flex items-center gap-2.5 font-label-sm text-label-sm text-surface-variant">
                                    <span className="material-symbols-outlined text-secondary-container text-[20px]">
                                        notifications_active
                                    </span>
                                    <span>Push Notifikasi SP3K</span>
                                </div>
                                <div className="flex items-center gap-2.5 font-label-sm text-label-sm text-surface-variant">
                                    <span className="material-symbols-outlined text-secondary-container text-[20px]">
                                        lock
                                    </span>
                                    <span>Enkripsi Berkas 256-bit</span>
                                </div>
                                <div className="flex items-center gap-2.5 font-label-sm text-label-sm text-surface-variant">
                                    <span className="material-symbols-outlined text-secondary-container text-[20px]">
                                        update
                                    </span>
                                    <span>Katalog Unit Tiap Minggu</span>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                                <div className="relative inline-block">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            alert(
                                                "Aplikasi NusaProperty saat ini sedang dalam proses publikasi di Google Play Store dan akan segera tersedia!"
                                            )
                                        }
                                        className="relative inline-flex items-center transition-transform hover:scale-105 active:scale-95 focus:outline-none cursor-pointer"
                                        title="Segera hadir di Google Play"
                                    >
                                        <Image
                                            src="/images/get-it-on-google-play-badge.png"
                                            alt="Get it on Google Play"
                                            width={200}
                                            height={59}
                                            className="h-[52px] w-auto object-contain drop-shadow-md cursor-pointer"
                                        />
                                        <span className="absolute -top-2.5 -right-2 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-[11px] font-bold shadow-md tracking-wider border border-white/20 uppercase">
                                            Coming Soon
                                        </span>
                                    </button>
                                </div>
                                <div className="flex items-center gap-1.5 text-surface-variant font-body-sm text-body-sm">
                                    <span className="material-symbols-outlined text-[18px] text-secondary-container">
                                        info
                                    </span>
                                    <span>Segera hadir di Google Play Store untuk Android</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 flex flex-col items-center justify-center">
                            <div className="bg-surface-container-lowest p-6 sm:p-7 rounded-2xl shadow-xl flex flex-col gap-5 max-w-sm w-full text-on-surface border border-surface-container">
                                <div className="flex items-center justify-between pb-4 border-b border-surface-container">
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-11 h-11 rounded-xl bg-primary-fixed/20 p-1 flex-shrink-0">
                                            <Image
                                                src="/images/logo.png"
                                                alt="NusaProperty App Icon"
                                                fill
                                                sizes="44px"
                                                className="object-contain"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-headline-sm text-headline-sm font-bold text-primary leading-tight">
                                                NusaProperty
                                            </span>
                                            <span className="font-label-sm text-label-sm text-outline-variant">
                                                Digital KPR Agregator
                                            </span>
                                        </div>
                                    </div>
                                    <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-bold flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
                                        Segera Hadir
                                    </span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low border border-surface-container/60">
                                        <span className="material-symbols-outlined text-secondary text-[20px]">
                                            bolt
                                        </span>
                                        <div className="flex flex-col">
                                            <span className="font-label-md text-label-md font-semibold text-primary">
                                                Simulasi &amp; Pengajuan Kilat
                                            </span>
                                            <span className="font-body-sm text-[12px] text-outline">
                                                Kalkulator bunga multi-bank dalam satu sentuhan
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low border border-surface-container/60">
                                        <span className="material-symbols-outlined text-secondary text-[20px]">
                                            domain_verification
                                        </span>
                                        <div className="flex flex-col">
                                            <span className="font-label-md text-label-md font-semibold text-primary">
                                                Pantau SP3K Real-Time
                                            </span>
                                            <span className="font-body-sm text-[12px] text-outline">
                                                Notifikasi status persetujuan dari bank rekanan
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-2 text-center border-t border-surface-container/50">
                                    <p className="font-body-sm text-body-sm text-outline-variant text-[12px]">
                                        Nantikan peluncuran resmi kami di Google Play Store
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
