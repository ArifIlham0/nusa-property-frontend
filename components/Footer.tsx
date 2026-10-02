export default function Footer() {
    return (
        <footer className="w-full bg-primary text-surface-container-highest">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <span className="font-headline-md text-headline-md text-on-primary tracking-tight font-bold">
                                NusaProperty
                            </span>
                            <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded bg-tertiary text-tertiary-fixed font-bold border border-outline/20">
                                PropTech
                            </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-surface-variant max-w-sm leading-relaxed">
                            Platform agregator KPR digital dan ekosistem pencarian properti terintegrasi di Indonesia. Menghadirkan simulasi transparan, verifikasi akurat, dan pengajuan kredit hunian yang aman.
                        </p>
                        <div className="p-3.5 rounded-xl bg-tertiary/60 border border-outline/30 flex items-start gap-2.5">
                            <span className="material-symbols-outlined text-secondary-container text-[20px] mt-0.5 flex-shrink-0">
                                verified_user
                            </span>
                            <p className="font-body-sm text-body-sm text-surface-variant text-[12px] leading-relaxed">
                                Tercatat &amp; diawasi di bawah regulasi ekosistem fintech perbankan nasional berkolaborasi bersama mitra perbankan resmi yang terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK) serta Bank Indonesia.
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-2 flex flex-col gap-3">
                        <span className="font-label-md text-label-md text-on-primary uppercase tracking-wider font-bold">
                            Navigasi
                        </span>
                        <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-surface-variant">
                            <li className="hover:text-on-primary transition-colors">
                                <a href="#">Beranda Utama</a>
                            </li>
                            <li className="hover:text-on-primary transition-colors">
                                <a href="#cari-hunian">Jelajah Properti</a>
                            </li>
                            <li className="hover:text-on-primary transition-colors">
                                <a href="#kalkulator-kpr">Kalkulator Angsuran</a>
                            </li>
                            <li className="hover:text-on-primary transition-colors">
                                <a href="#alur-pengajuan">Panduan KPR</a>
                            </li>
                            <li className="hover:text-on-primary transition-colors">
                                <a href="#mitra-bank">Katalog Suku Bunga</a>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:col-span-2 flex flex-col gap-3">
                        <span className="font-label-md text-label-md text-on-primary uppercase tracking-wider font-bold">
                            Perusahaan
                        </span>
                        <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-surface-variant">
                            <li className="hover:text-on-primary transition-colors">
                                <a href="#">Tentang NusaProperty</a>
                            </li>
                            <li className="hover:text-on-primary transition-colors">
                                <a href="#mitra-bank">Daftar Mitra Bank</a>
                            </li>
                            <li className="hover:text-on-primary transition-colors">
                                <a href="#">Kebijakan Privasi</a>
                            </li>
                            <li className="hover:text-on-primary transition-colors">
                                <a href="#">Syarat &amp; Ketentuan</a>
                            </li>
                            <li className="hover:text-on-primary transition-colors">
                                <a href="#faq">Pusat Bantuan (FAQ)</a>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:col-span-4 flex flex-col gap-3.5">
                        <span className="font-label-md text-label-md text-on-primary uppercase tracking-wider font-bold">
                            Kantor Pusat Operasional
                        </span>
                        <div className="flex items-start gap-2 text-surface-variant">
                            <span className="material-symbols-outlined text-primary-fixed-dim text-[20px] mt-0.5 flex-shrink-0">
                                location_on
                            </span>
                            <p className="font-body-sm text-body-sm leading-relaxed">
                                Menara Kadin Indonesia Lt. 18, Jl. H.R. Rasuna Said Blok X-5 Kav. 2-3, Kuningan Timur, Setiabudi, Jakarta Selatan, DKI Jakarta 12950
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-surface-variant">
                            <span className="material-symbols-outlined text-primary-fixed-dim text-[20px]">
                                mail
                            </span>
                            <span className="font-body-sm text-body-sm">halo@nusaproperty.id</span>
                        </div>
                        <div className="flex items-center gap-2 text-surface-variant">
                            <span className="material-symbols-outlined text-primary-fixed-dim text-[20px]">
                                call
                            </span>
                            <span className="font-body-sm text-body-sm">+62 (021) 5299-4300</span>
                        </div>
                    </div>
                </div>
                <div className="pt-6 pb-6 border-t border-outline/20 flex flex-col lg:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-center sm:text-left">
                        <span className="font-label-sm text-label-sm text-surface-variant uppercase tracking-wider font-bold">
                            Mitra Perbankan &amp; Pengembang Resmi:
                        </span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-label-md text-label-md text-primary-fixed-dim">
                        <span className="px-3 py-1.5 rounded-lg bg-tertiary/70 border border-outline/30">
                            Bank BTN
                        </span>
                        <span className="px-3 py-1.5 rounded-lg bg-tertiary/70 border border-outline/30">
                            Bank Mandiri
                        </span>
                        <span className="px-3 py-1.5 rounded-lg bg-tertiary/70 border border-outline/30">
                            BCA
                        </span>
                        <span className="px-3 py-1.5 rounded-lg bg-tertiary/70 border border-outline/30">
                            BSI
                        </span>
                        <span className="px-3 py-1.5 rounded-lg bg-tertiary/70 border border-outline/30 text-secondary-container font-bold">
                            Harmoni Land
                        </span>
                    </div>
                </div>
                <div className="pt-6 border-t border-outline/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-surface-variant font-body-sm text-body-sm text-[12px]">
                    <p>© 2025 PT Nusa Properti Digital Indonesia. Terdaftar &amp; Diawasi.</p>
                    <p className="text-outline-variant">
                        Banking-grade 256-bit SSL Certified • ISO 27001 Compliant
                    </p>
                </div>
            </div>
        </footer>
    );
}
