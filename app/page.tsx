import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import KprCalculator from "@/components/KprCalculator";
import FeaturedProperties from "@/components/FeaturedProperties";
import LoanPipeline from "@/components/LoanPipeline";
import AppDownloadSection from "@/components/AppDownloadSection";
import TestimonialsFaq from "@/components/TestimonialsFaq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-20 bg-background flex flex-col flex-1">
        <HeroSection />
        <PartnersSection />
        <KprCalculator />
        <FeaturedProperties />
        <LoanPipeline />
        <AppDownloadSection />
        <TestimonialsFaq />
      </main>
      <Footer />
    </>
  );
}
