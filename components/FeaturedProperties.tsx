"use client";

import { useState } from "react";
import Image from "next/image";

interface Property {
    id: string;
    title: string;
    location: string;
    price: string;
    installment: string;
    badge: string;
    badgeClass: string;
    image: string;
    description: string;
    category: "all" | "subsidi" | "dp0" | "ready";
    bedrooms: number;
    bathrooms: number;
    landArea: number;
    buildingArea: number;
    developer: string;
    certificate: string;
}

export default function FeaturedProperties() {
    const [selectedFilter, setSelectedFilter] = useState<
        "all" | "subsidi" | "dp0" | "ready"
    >("all");
    const [activeProperty, setActiveProperty] = useState<Property | null>(null);

    const properties: Property[] = [
        {
            id: "botanical-hills",
            title: "Cluster Botanical Hills A-12",
            location: "Cikarang Selatan, Bekasi",
            price: "Rp 450.000.000",
            installment: "2.3 Jt/bln",
            badge: "SUBSIDI FLPP",
            badgeClass: "bg-primary text-on-primary",
            image: "/images/cluster-suburban.png",
            description: "Akses 10 menit ke Kawasan Industri EJIP & Pintu Tol Cibatu. Air bersih PDAM mandiri serta lingkungan asri cluster tertutup.",
            category: "subsidi",
            bedrooms: 2,
            bathrooms: 1,
            landArea: 60,
            buildingArea: 36,
            developer: "PT Cikarang Graha Permai",
            certificate: "SHM (Sertifikat Hak Milik)",
        },
        {
            id: "grand-harmoni",
            title: "Grand Harmoni City B-04",
            location: "Cibarusah, Jawa Barat",
            price: "Rp 385.000.000",
            installment: "1.9 Jt/bln",
            badge: "PROMO DP 0%",
            badgeClass: "bg-secondary-container text-on-secondary-fixed",
            image: "/images/cluster-tropical.png",
            description: "Kawasan mandiri berkonsep modern tropical dengan fasilitas clubhouse, kolam renang keluarga, dan taman bermain anak.",
            category: "dp0",
            bedrooms: 3,
            bathrooms: 2,
            landArea: 72,
            buildingArea: 45,
            developer: "Harmoni Land Group",
            certificate: "SHM & PBG Lengkap",
        },
        {
            id: "emerald-garden",
            title: "Emerald Garden Residence",
            location: "Serang Baru, Cikarang",
            price: "Rp 520.000.000",
            installment: "2.8 Jt/bln",
            badge: "CASHBACK 25 JT",
            badgeClass: "bg-secondary text-on-secondary",
            image: "/images/cluster-suburban.png",
            description: "Kawasan bebas banjir dengan row jalan 8 meter, taman tematik terbuka hijau, serta sistem keamanan One Gate System 24 jam.",
            category: "ready",
            bedrooms: 3,
            bathrooms: 2,
            landArea: 84,
            buildingArea: 54,
            developer: "Emerald Mitra Propertindo",
            certificate: "SHM Siap Balik Nama",
        },
    ];

    const filteredProperties =
        selectedFilter === "all"
            ? properties
            : properties.filter((p) => p.category === selectedFilter);

    return (
        <section id="cari-hunian" className="w-full py-16 bg-surface-container-low/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div className="flex flex-col gap-1.5">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                            Katalog Proyek Terkurasi
                        </span>
                        <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-primary font-bold">
                            Pilihan Cluster Hunian Terpopuler
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                            Cluster siap huni maupun indent dengan legalitas SHM aman dan
                            kemudahan KPR ekspres berkolaborasi dengan bank rekanan.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setSelectedFilter("all")}
                            className={`px-4 py-2 rounded-full font-label-sm text-label-sm font-semibold transition-all cursor-pointer ${
                                selectedFilter === "all"
                                    ? "bg-primary text-on-primary shadow-sm"
                                    : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
                            }`}
                        >
                            Semua Unit
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedFilter("subsidi")}
                            className={`px-4 py-2 rounded-full font-label-sm text-label-sm font-semibold transition-all cursor-pointer ${
                                selectedFilter === "subsidi"
                                    ? "bg-primary text-on-primary shadow-sm"
                                    : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
                            }`}
                        >
                            Rumah Subsidi (FLPP)
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedFilter("dp0")}
                            className={`px-4 py-2 rounded-full font-label-sm text-label-sm font-semibold transition-all cursor-pointer ${
                                selectedFilter === "dp0"
                                    ? "bg-primary text-on-primary shadow-sm"
                                    : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
                            }`}
                        >
                            Promo DP 0%
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedFilter("ready")}
                            className={`px-4 py-2 rounded-full font-label-sm text-label-sm font-semibold transition-all cursor-pointer ${
                                selectedFilter === "ready"
                                    ? "bg-primary text-on-primary shadow-sm"
                                    : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
                            }`}
                        >
                            Siap Huni (Ready Stock)
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProperties.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setActiveProperty(item)}
                            className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-surface-container cursor-pointer"
                        >
                            <div className="relative h-60 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <span
                                    className={`absolute top-4 left-4 px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider font-bold shadow-md ${item.badgeClass}`}
                                >
                                    {item.badge}
                                </span>
                                <span className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-surface-container-lowest/90 backdrop-blur text-primary font-label-sm text-label-sm font-semibold shadow-sm">
                                    Cicilan {item.installment}
                                </span>
                            </div>
                            <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-1 text-outline-variant font-label-sm text-label-sm mb-1">
                                        <span className="material-symbols-outlined text-[16px]">
                                            location_on
                                        </span>
                                        <span>{item.location}</span>
                                    </div>
                                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                                        {item.title}
                                    </h3>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="py-3 px-4 rounded-xl bg-surface-container-low flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm border border-surface-container">
                                    <span className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[18px]">
                                            bed
                                        </span>
                                        {item.bedrooms} KT
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[18px]">
                                            shower
                                        </span>
                                        {item.bathrooms} KM
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[18px]">
                                            crop_square
                                        </span>
                                        LT {item.landArea}m²
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[18px]">
                                            domain
                                        </span>
                                        LB {item.buildingArea}m²
                                    </span>
                                </div>
                                <div className="pt-2 flex items-center justify-between">
                                    <div>
                                        <span className="font-body-sm text-body-sm text-outline-variant">
                                            Harga Mulai
                                        </span>
                                        <p className="font-headline-sm text-headline-sm font-bold text-secondary tabular-numbers">
                                            {item.price}
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setActiveProperty(item)}
                                        className="px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-colors shadow-sm cursor-pointer"
                                    >
                                        Detail Unit
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {activeProperty && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-surface-container-lowest rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-surface-container overflow-hidden max-h-[90vh] overflow-y-auto">
                        <button
                            type="button"
                            onClick={() => setActiveProperty(null)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface transition-colors cursor-pointer"
                            aria-label="Tutup Modal"
                        >
                            <span className="material-symbols-outlined text-[20px]">
                                close
                            </span>
                        </button>
                        <div className="relative h-56 rounded-2xl overflow-hidden mb-5">
                            <Image
                                src={activeProperty.image}
                                alt={activeProperty.title}
                                fill
                                sizes="(max-width: 640px) 100vw, 576px"
                                className="object-cover"
                            />
                            <span
                                className={`absolute top-4 left-4 px-3 py-1 rounded-full font-label-sm text-label-sm uppercase font-bold shadow-md ${activeProperty.badgeClass}`}
                            >
                                {activeProperty.badge}
                            </span>
                        </div>
                        <div className="flex items-center gap-1 text-outline font-label-sm text-label-sm mb-1">
                            <span className="material-symbols-outlined text-[16px]">
                                location_on
                            </span>
                            <span>{activeProperty.location}</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md font-bold text-primary mb-2">
                            {activeProperty.title}
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
                            {activeProperty.description}
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-surface-container-low mb-5 text-center">
                            <div>
                                <span className="font-label-sm text-outline-variant block">Kamar Tidur</span>
                                <span className="font-headline-sm font-bold text-primary">{activeProperty.bedrooms} KT</span>
                            </div>
                            <div>
                                <span className="font-label-sm text-outline-variant block">Kamar Mandi</span>
                                <span className="font-headline-sm font-bold text-primary">{activeProperty.bathrooms} KM</span>
                            </div>
                            <div>
                                <span className="font-label-sm text-outline-variant block">Luas Tanah</span>
                                <span className="font-headline-sm font-bold text-primary">{activeProperty.landArea} m²</span>
                            </div>
                            <div>
                                <span className="font-label-sm text-outline-variant block">Luas Bangunan</span>
                                <span className="font-headline-sm font-bold text-primary">{activeProperty.buildingArea} m²</span>
                            </div>
                        </div>
                        <div className="border-t border-surface-container py-3 flex flex-col gap-2 font-body-sm text-on-surface-variant mb-6">
                            <div className="flex justify-between">
                                <span>Pengembang:</span>
                                <strong className="text-primary">{activeProperty.developer}</strong>
                            </div>
                            <div className="flex justify-between">
                                <span>Legalitas:</span>
                                <strong className="text-primary">{activeProperty.certificate}</strong>
                            </div>
                            <div className="flex justify-between">
                                <span>Estimasi Angsuran:</span>
                                <strong className="text-secondary font-bold">{activeProperty.installment}</strong>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <span className="font-body-sm text-outline-variant block">Harga Penawaran</span>
                                <span className="font-headline-md font-bold text-secondary">{activeProperty.price}</span>
                            </div>
                            <a
                                href="#kalkulator-kpr"
                                onClick={() => setActiveProperty(null)}
                                className="px-6 py-3 rounded-xl bg-primary-container text-on-primary font-label-md font-bold hover:bg-primary transition-all shadow-md text-center cursor-pointer"
                            >
                                Ajukan Unit Ini
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
