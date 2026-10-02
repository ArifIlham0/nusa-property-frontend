export default function LoanPipeline() {
    const steps = [
        {
            num: "01",
            title: "Eksplorasi & Simulasi",
            desc: "Pilih cluster hunian idaman sesuai budget, lalu simulasikan kemampuan angsuran secara presisi melalui kalkulator pintar kami.",
            icon: "touch_app",
            action: "Pilih Unit & Bunga",
        },
        {
            num: "02",
            title: "Upload Berkas 1x",
            desc: "Unggah KTP, NPWP, slip gaji, dan rekening koran via aplikasi terenkripsi. Tidak perlu fotokopi berulang ke berbagai kantor cabang.",
            icon: "cloud_upload",
            action: "Dokumen Terproteksi",
        },
        {
            num: "03",
            title: "Pre-Screening Analis",
            desc: "Tim analis NusaProperty mengecek kelayakan BI Checking (SLIK OJK) dan merekomendasikan bank dengan peluang lolos tertinggi.",
            icon: "manage_search",
            action: "Review SLIK OJK Cepat",
        },
        {
            num: "04",
            title: "SP3K & Akad Kredit",
            desc: "Surat Penegasan Persetujuan Penyediaan Kredit resmi terbit. Pendampingan penuh saat tanda tangan akad di notaris rekanan bank.",
            icon: "handshake",
            action: "Serah Terima Kunci",
        },
    ];

    return (
        <section id="alur-pengajuan" className="w-full py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto mb-16">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                        Proses Terstruktur &amp; Cepat
                    </span>
                    <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-primary font-bold">
                        Alur Pengajuan KPR Digital Tanpa Ribet
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                        Dari survei lokasi hingga serah terima kunci, kami mendampingi setiap tahap
                        agar proses kepemilikan rumah impian berjalan transparan dan mudah.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {steps.map((s, idx) => (
                        <div
                            key={idx}
                            className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container flex flex-col gap-4 relative hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary font-headline-sm text-headline-sm font-bold">
                                {s.num}
                            </div>
                            <div>
                                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                                    {s.title}
                                </h3>
                                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                                    {s.desc}
                                </p>
                            </div>
                            <div className="mt-auto pt-2 flex items-center gap-1.5 text-secondary font-label-sm text-label-sm font-semibold">
                                <span className="material-symbols-outlined text-[16px]">
                                    {s.icon}
                                </span>
                                <span>{s.action}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
