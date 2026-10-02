export default function PartnersSection() {
    const partners = [
        {
            name: "Bank BTN",
            desc: "Spesialis KPR FLPP & Platinum",
            rate: "Bunga mulai 4.75%",
            isDeveloper: false,
        },
        {
            name: "Bank Mandiri",
            desc: "KPR Livin' Multiguna & Baru",
            rate: "Bunga mulai 4.88%",
            isDeveloper: false,
        },
        {
            name: "BCA",
            desc: "KPR Fix & Cap Fleksibel",
            rate: "Bunga mulai 5.00%",
            isDeveloper: false,
        },
        {
            name: "BSI",
            desc: "Griya Hasanah Akad Murabahah",
            rate: "Margin tetap 5.15%",
            isDeveloper: false,
        },
        {
            name: "Harmoni Land",
            desc: "Official Primary Developer",
            rate: "Free Biaya Notaris & KPR",
            isDeveloper: true,
        },
    ];

    return (
        <section id="mitra-bank" className="w-full bg-surface-container-low py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center gap-2 mb-8">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline-variant font-bold">
                        Kemitraan Resmi Multi-Bank &amp; Pengembang Terverifikasi
                    </span>
                    <h2 className="font-headline-md text-headline-md text-primary font-bold">
                        Satu Formulir Pengajuan, Terhubung ke Bank Terbesar
                    </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {partners.map((p, idx) => (
                        <div
                            key={idx}
                            className={`bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-surface-container flex flex-col items-center justify-center text-center gap-1.5 hover:shadow-md transition-shadow ${
                                p.isDeveloper ? "col-span-2 md:col-span-1" : ""
                            }`}
                        >
                            <span
                                className={`font-headline-sm text-headline-sm font-bold ${
                                    p.isDeveloper ? "text-secondary" : "text-primary"
                                }`}
                            >
                                {p.name}
                            </span>
                            <span className="font-body-sm text-body-sm text-outline-variant text-[12px]">
                                {p.desc}
                            </span>
                            <span
                                className={`font-label-sm text-label-sm font-semibold mt-1 ${
                                    p.isDeveloper ? "text-primary" : "text-secondary"
                                }`}
                            >
                                {p.rate}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container text-on-surface font-label-md text-label-md border border-surface-container-high">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                            support_agent
                        </span>
                        <span>100% Layanan Konsultasi Bebas Biaya</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container text-on-surface font-label-md text-label-md border border-surface-container-high">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                            encrypted
                        </span>
                        <span>Keamanan Data Sesuai Aturan OJK &amp; BI</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container text-on-surface font-label-md text-label-md border border-surface-container-high">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                            publish
                        </span>
                        <span>1x Unggah Berkas untuk Multi-Bank</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
