"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PropertyItem, fetchAllPropertiesCombined } from "@/lib/api";

export default function FeaturedProperties() {
    const [selectedFilter, setSelectedFilter] = useState<
        "all" | "subsidi" | "dp0" | "ready"
    >("all");
    const [properties, setProperties] = useState<PropertyItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [activeProperty, setActiveProperty] = useState<PropertyItem | null>(null);

    useEffect(() => {
        let isMounted = true;
        fetchAllPropertiesCombined()
            .then((data) => {
                if (isMounted) setProperties(data);
            })
            .catch((err) => {
                console.error("Gagal memuat properti:", err);
            })
            .finally(() => {
                if (isMounted) setIsLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    const handleRefresh = async () => {
        setIsLoading(true);
        try {
            const data = await fetchAllPropertiesCombined();
            setProperties(data);
        } catch (err) {
            console.error("Gagal memuat properti:", err);
        } finally {
            setIsLoading(false);
        }
    };

    const getBadgeStyle = (tagType: string) => {
        switch (tagType.toUpperCase()) {
            case "SUBSIDI":
                return "bg-primary text-on-primary";
            case "PROMO":
                return "bg-secondary-container text-on-secondary-fixed";
            case "DISCOUNT":
                return "bg-secondary text-on-secondary";
            default:
                return "bg-primary-container text-on-primary";
        }
    };

    const filteredProperties = properties.filter((p) => {
        if (selectedFilter === "all") return true;
        if (selectedFilter === "subsidi") return p.tagType.toUpperCase() === "SUBSIDI";
        if (selectedFilter === "dp0") return p.tagType.toUpperCase() === "PROMO";
        if (selectedFilter === "ready")
            return p.tagType.toUpperCase() === "DISCOUNT" || p.price >= 500_000_000;
        return true;
    });

    return (
        <section id="cari-hunian" className="w-full py-16 bg-surface-container-low/60 relative">
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
                            Semua Unit ({properties.length})
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
                            Siap Huni / Diskon
                        </button>
                    </div>
                </div>

                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((idx) => (
                            <div
                                key={idx}
                                className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-surface-container animate-pulse flex flex-col gap-4"
                            >
                                <div className="h-60 bg-surface-container rounded-xl w-full" />
                                <div className="h-4 bg-surface-container rounded w-1/3" />
                                <div className="h-6 bg-surface-container rounded w-3/4" />
                                <div className="h-12 bg-surface-container rounded w-full" />
                                <div className="h-8 bg-surface-container rounded w-1/2" />
                            </div>
                        ))}
                    </div>
                ) : filteredProperties.length === 0 ? (
                    <div className="text-center py-16 bg-surface-container-lowest rounded-3xl border border-surface-container p-8">
                        <span className="material-symbols-outlined text-outline-variant text-[48px] mb-2">
                            holiday_village
                        </span>
                        <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                            Tidak Ada Unit Ditemukan
                        </h3>
                        <p className="font-body-md text-on-surface-variant mt-1">
                            Silakan pilih filter lain atau muat ulang daftar unit.
                        </p>
                        <button
                            type="button"
                            onClick={handleRefresh}
                            className="mt-4 px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md cursor-pointer"
                        >
                            Muat Ulang Katalog
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProperties.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setActiveProperty(item)}
                                className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-surface-container cursor-pointer relative"
                            >
                                <div className="relative h-60 overflow-hidden bg-surface-container">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span
                                        className={`absolute top-4 left-4 px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider font-bold shadow-md ${getBadgeStyle(
                                            item.tagType
                                        )}`}
                                    >
                                        {item.tagText}
                                    </span>
                                    <span className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-surface-container-lowest/90 backdrop-blur text-primary font-label-sm text-label-sm font-semibold shadow-sm">
                                        {item.installmentEstimate}
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
                                            {item.addressDetail ||
                                                "Kawasan asri dengan akses strategis, fasilitas lengkap, dan legalitas SHM terjamin."}
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
                                            LT {item.surfaceArea}m²
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
                                                {item.priceFormatted}
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
                )}
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
                        <div className="relative h-56 rounded-2xl overflow-hidden mb-5 bg-surface-container">
                            <Image
                                src={activeProperty.imageUrl}
                                alt={activeProperty.title}
                                fill
                                sizes="(max-width: 640px) 100vw, 576px"
                                className="object-cover"
                            />
                            <span
                                className={`absolute top-4 left-4 px-3 py-1 rounded-full font-label-sm text-label-sm uppercase font-bold shadow-md ${getBadgeStyle(
                                    activeProperty.tagType
                                )}`}
                            >
                                {activeProperty.tagText}
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
                            {activeProperty.addressDetail ||
                                "Akses mudah ke transportasi umum, jalan tol, dan fasilitas publik. Legalitas sertifikat aman dan terverifikasi perbankan."}
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
                                <span className="font-headline-sm font-bold text-primary">{activeProperty.surfaceArea} m²</span>
                            </div>
                            <div>
                                <span className="font-label-sm text-outline-variant block">Luas Bangunan</span>
                                <span className="font-headline-sm font-bold text-primary">{activeProperty.buildingArea} m²</span>
                            </div>
                        </div>
                        <div className="border-t border-surface-container py-3 flex flex-col gap-2 font-body-sm text-on-surface-variant mb-6">
                            <div className="flex justify-between">
                                <span>Pengembang:</span>
                                <strong className="text-primary">{activeProperty.developerName || "Nusa Partner"}</strong>
                            </div>
                            <div className="flex justify-between">
                                <span>Legalitas:</span>
                                <strong className="text-primary">{activeProperty.certificateType}</strong>
                            </div>
                            <div className="flex justify-between">
                                <span>Listrik:</span>
                                <strong className="text-primary">{activeProperty.electricityVa} VA</strong>
                            </div>
                            <div className="flex justify-between">
                                <span>Estimasi Angsuran:</span>
                                <strong className="text-secondary font-bold">{activeProperty.installmentEstimate}</strong>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <span className="font-body-sm text-outline-variant block">Harga Penawaran</span>
                                <span className="font-headline-md font-bold text-secondary">{activeProperty.priceFormatted}</span>
                            </div>
                            <a
                                href="#kalkulator-kpr"
                                onClick={() => setActiveProperty(null)}
                                className="px-6 py-3 rounded-xl bg-primary-container text-on-primary font-label-md font-bold hover:bg-primary transition-all shadow-md text-center cursor-pointer"
                            >
                                Simulasi Unit Ini
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
