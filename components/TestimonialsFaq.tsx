"use client";

import { useState } from "react";

export default function TestimonialsFaq() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const faqs = [
        {
            question: "Apa saja syarat utama mengajukan Rumah Subsidi (FLPP)?",
            answer: "Syarat utama KPR Subsidi FLPP mencakup WNI berpenghasilan maksimal Rp 8.000.000 per bulan (atau Rp 10.000.000 untuk Papua), belum pernah memiliki rumah sebelumnya, belum pernah menerima subsidi perumahan dari pemerintah, dan memiliki masa kerja/usaha minimal 1 tahun.",
        },
        {
            question: "Bagaimana jika riwayat SLIK OJK / BI Checking saya ada catatan keterlambatan?",
            answer: "Advisor kami akan melakukan pre-screening riwayat kredit Anda. Bila tunggakan telah dilunasi dan Anda memiliki Surat Keterangan Lunas (SKL), kami akan memandu penyusunan dokumen penjelasan agar analis bank dapat mempertimbangkan profil kelayakan Anda dengan adil.",
        },
        {
            question: "Apakah ada biaya tambahan untuk konsultasi dan pemrosesan berkas?",
            answer: "Tidak ada sama sekali. Layanan pendampingan NusaProperty 100% bebas biaya bagi calon debitur. Seluruh biaya kemitraan telah disinergikan langsung dengan pihak perbankan dan developer rekanan resmi.",
        },
        {
            question: "Bisa ajukan ke berapa bank sekaligus dalam 1 kali upload?",
            answer: "Anda dapat memilih hingga 3 bank sekaligus (misalnya kombinasi BTN, Mandiri, dan BSI Syariah) untuk membandingkan penawaran suku bunga dan plafon terbaik tanpa harus mengunggah berkas terpisah.",
        },
    ];

    const toggleFaq = (idx: number) => {
        setOpenFaq(openFaq === idx ? null : idx);
    };

    return (
        <section id="faq" className="w-full py-20 bg-surface-container-low/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="flex flex-col items-center text-center gap-2 mb-8">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                            Frequently Asked Questions
                        </span>
                        <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                            Pertanyaan Seputar KPR di NusaProperty
                        </h2>
                    </div>
                    <div className="flex flex-col gap-3">
                        {faqs.map((faq, idx) => {
                            const isOpen = openFaq === idx;
                            return (
                                <div
                                    key={idx}
                                    className="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container overflow-hidden transition-colors"
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full p-5 text-left flex items-center justify-between gap-4 font-headline-sm text-headline-sm text-primary hover:bg-surface-container-low transition-colors font-semibold cursor-pointer"
                                    >
                                        <span>{faq.question}</span>
                                        <span
                                            className={`material-symbols-outlined text-[20px] transition-transform duration-200 text-outline ${
                                                isOpen ? "rotate-180 text-primary" : ""
                                            }`}
                                        >
                                            expand_more
                                        </span>
                                    </button>
                                    {isOpen && (
                                        <div className="px-5 pb-5 font-body-md text-body-md text-on-surface-variant leading-relaxed border-t border-surface-container-low pt-3 animate-fade-in">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
