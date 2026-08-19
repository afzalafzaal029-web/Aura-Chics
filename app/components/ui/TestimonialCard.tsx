"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface TestimonialProps {
  name: string;
  text: string;
  rating: number;
  avatar: string;
}

export default function TestimonialCard({ name, text, rating, avatar }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-2xl shadow-lg"
    >
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image src={avatar} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-3 text-gray-600 italic">“{text}”</p>
    </motion.div>
  );
}