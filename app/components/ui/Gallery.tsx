"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { galleryImages } from "@/app/lib/data";

export default function Gallery() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Salon Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative h-48 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <Image src={src} alt={`Gallery ${i+1}`} fill className="object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}