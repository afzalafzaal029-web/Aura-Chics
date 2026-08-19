"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/sections/HeroSection";
import ServicesPreview from "@/app/components/sections/ServicesPreview";
import TestimonialsSection from "@/app/components/sections/TestimonialsSection";
import GallerySection from "@/app/components/sections/GallerySection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesPreview />
        <TestimonialsSection />
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}
