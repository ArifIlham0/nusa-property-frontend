"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
    { id: "beranda", label: "Beranda", href: "#beranda" },
    { id: "cari-hunian", label: "Cari Hunian", href: "#cari-hunian" },
    { id: "kalkulator-kpr", label: "Simulasi KPR", href: "#kalkulator-kpr" },
    { id: "alur-pengajuan", label: "Alur Pengajuan", href: "#alur-pengajuan" },
    { id: "mitra-bank", label: "Mitra Bank", href: "#mitra-bank" },
    { id: "faq", label: "FAQ", href: "#faq" },
];

const sectionOrder = [
    "beranda",
    "mitra-bank",
    "kalkulator-kpr",
    "cari-hunian",
    "alur-pengajuan",
    "faq",
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("beranda");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 80) {
                setActiveSection("beranda");
                return;
            }

            if (
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 60
            ) {
                setActiveSection("faq");
                return;
            }

            const headerOffset = 140;
            let current = "beranda";

            for (const id of sectionOrder) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= headerOffset) {
                        current = id;
                    }
                }
            }

            setActiveSection(current);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        id: string
    ) => {
        e.preventDefault();
        setActiveSection(id);
        setMobileMenuOpen(false);

        if (id === "beranda") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const targetEl = document.getElementById(id);
        if (targetEl) {
            const navHeight = 80;
            const targetPosition =
                targetEl.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
            <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
                <Link
                    href="/"
                    onClick={(e) => handleNavClick(e, "beranda")}
                    className="flex items-center gap-3 cursor-pointer"
                >
                    <div className="relative h-10 w-10 flex-shrink-0">
                        <Image
                            src="/images/logo.png"
                            alt="NusaProperty Logo"
                            fill
                            sizes="40px"
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm text-primary leading-tight tracking-tight font-bold">
                            NusaProperty
                        </span>
                        <span className="font-label-sm text-label-sm text-outline-variant font-medium tracking-normal">
                            Digital Mortgage &amp; Proptech
                        </span>
                    </div>
                </Link>

                <nav className="hidden xl:flex items-center gap-1 p-1">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <a
                                key={item.id}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.id)}
                                className={`px-3.5 py-2 font-label-md text-label-md rounded-lg transition-all cursor-pointer ${
                                    isActive
                                        ? "bg-surface-container-high text-on-surface font-semibold shadow-sm"
                                        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-medium"
                                }`}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-2 sm:gap-3">
                    <a
                        href="#kalkulator-kpr"
                        onClick={(e) => handleNavClick(e, "kalkulator-kpr")}
                        className="inline-flex items-center justify-center font-label-md text-label-md px-5 py-2.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm font-semibold cursor-pointer"
                    >
                        Simulasi KPR
                    </a>
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Navigation"
                        className="xl:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-[24px]">
                            {mobileMenuOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="xl:hidden border-t border-surface-container-high bg-surface-container-lowest px-4 py-4 space-y-2 shadow-lg">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <a
                                key={item.id}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.id)}
                                className={`block px-4 py-2.5 rounded-lg transition-all cursor-pointer ${
                                    isActive
                                        ? "bg-surface-container-high font-semibold text-on-surface shadow-sm"
                                        : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-medium"
                                }`}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </div>
            )}
        </header>
    );
}
