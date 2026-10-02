"use client";

import React, { useState } from 'react'
import Image from 'next/image';

const AdvisorSection = () => {
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [scheduledSuccess, setScheduledSuccess] = useState(false);

    const handleSchedule = (e: React.SubmitEvent) => {
        e.preventDefault();
        setScheduledSuccess(true);
        setTimeout(() => {
            setScheduledSuccess(false);
            setShowVideoModal(false);
        }, 2500);
    };

    return (
        <section id="hubungi-advisor" className="w-full py-16 bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-surface-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-5 relative flex justify-center">
                            <div className="relative w-full max-w-sm">
                                <div className="overflow-hidden rounded-2xl shadow-lg bg-surface-container relative h-80 sm:h-96">
                                    <Image
                                        src="/images/advisor.png"
                                        alt="Rian Anggara - Financial Advisor NusaProperty"
                                        fill
                                        sizes="(max-width: 640px) 100vw, 384px"
                                        className="object-cover object-top"
                                    />
                                </div>
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-surface-container-lowest shadow-md flex items-center gap-2 whitespace-nowrap border border-surface-container">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                                        Konsultan Aktif • Respons &lt; 10 Menit
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7 flex flex-col gap-4">
                            <div className="inline-flex items-center gap-1.5 text-secondary font-label-sm text-label-sm uppercase tracking-wider font-bold">
                                <span className="material-symbols-outlined text-[18px]">
                                    psychology
                                </span>
                                <span>Pendampingan KPR Eksklusif</span>
                            </div>
                            <div>
                                <h3 className="font-headline-lg text-headline-lg text-primary font-bold">
                                    Rian Anggara, S.E.
                                </h3>
                                <p className="font-label-md text-label-md text-on-surface-variant font-medium mt-1">
                                    Senior Mortgage Specialist &amp; Certified Financial Advisor (Sertifikasi BTN &amp; Mandiri)
                                </p>
                            </div>
                            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                “Bingung memilih bank dengan bunga terendah atau cemas skor SLIK OJK Anda terhambat riwayat lama? Konsultasikan berkas Anda secara gratis. Kami membantu menyusun profil keuangan yang rapi sehingga peluang persetujuan KPR mencapai 94%.”
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-2">
                                <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col border border-surface-container">
                                    <span className="font-headline-sm text-headline-sm font-bold text-primary">
                                        850+
                                    </span>
                                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                                        Nasabah Didampingi
                                    </span>
                                </div>
                                <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col border border-surface-container">
                                    <span className="font-headline-sm text-headline-sm font-bold text-primary">
                                        Rp 240 M+
                                    </span>
                                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                                        Total Plafon Cair
                                    </span>
                                </div>
                                <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col col-span-2 sm:col-span-1 border border-surface-container">
                                    <span className="font-headline-sm text-headline-sm font-bold text-secondary">
                                        94.2%
                                    </span>
                                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                                        Tingkat Approval
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 pt-2">
                                <a
                                    href="https://wa.me/6281234567890?text=Halo%20NusaProperty,%20saya%20ingin%20konsultasi%20KPR"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-bold hover:bg-primary-container transition-all shadow-md active:scale-95"
                                >
                                    <span className="material-symbols-outlined text-[18px]">
                                        chat
                                    </span>
                                    <span>Konsultasi WhatsApp Gratis (Direct)</span>
                                </a>
                                <button
                                    type="button"
                                    onClick={() => setShowVideoModal(true)}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container-low text-primary font-label-md text-label-md font-bold hover:bg-surface-container transition-all border border-surface-container"
                                >
                                    <span className="material-symbols-outlined text-[18px]">
                                        video_call
                                    </span>
                                    <span>Jadwalkan Video Call KPR</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showVideoModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-surface-container-lowest rounded-2xl max-w-md w-full p-6 shadow-2xl relative border border-surface-container">
                        <button
                            type="button"
                            onClick={() => setShowVideoModal(false)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface transition-colors"
                        >
                            <span className="material-symbols-outlined text-[18px]">close</span>
                        </button>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center">
                                <span className="material-symbols-outlined text-[20px]">
                                    video_call
                                </span>
                            </div>
                            <div>
                                <h4 className="font-headline-sm text-primary font-bold">
                                    Jadwalkan Video Call
                                </h4>
                                <p className="text-xs text-on-surface-variant">
                                    Bersama Rian Anggara, S.E. (30 Menit)
                                </p>
                            </div>
                        </div>
                        {scheduledSuccess ? (
                            <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 text-center font-medium">
                                Jadwal berhasil diajukan! Tim advisor akan mengirimkan link Google Meet ke WhatsApp Anda.
                            </div>
                        ) : (
                            <form onSubmit={handleSchedule} className="flex flex-col gap-3">
                                <div>
                                    <label className="text-xs font-semibold text-on-surface-variant block mb-1">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Contoh: Budi Santoso"
                                        className="w-full px-3 py-2 rounded-lg bg-surface-container-low border border-surface-container text-sm focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-on-surface-variant block mb-1">
                                        Nomor WhatsApp
                                    </label>
                                    <input
                                        required
                                        type="tel"
                                        placeholder="0812xxxxxxxx"
                                        className="w-full px-3 py-2 rounded-lg bg-surface-container-low border border-surface-container text-sm focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-on-surface-variant block mb-1">
                                        Pilihan Waktu
                                    </label>
                                    <select className="w-full px-3 py-2 rounded-lg bg-surface-container-low border border-surface-container text-sm focus:outline-none focus:border-primary">
                                        <option>Hari Ini - 15:00 WIB</option>
                                        <option>Hari Ini - 19:30 WIB</option>
                                        <option>Besok - 10:00 WIB</option>
                                    <option>Besok - 14:00 WIB</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 mt-2 rounded-xl bg-primary text-on-primary font-bold text-sm hover:bg-primary-container transition-all"
                                >
                                    Konfirmasi Jadwal
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}

export default AdvisorSection;