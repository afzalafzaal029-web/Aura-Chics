"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Hero Section.jpg"
          alt="Salon background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay - Black with slight opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent" />
        {/* Optional: Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        ></motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight"
        >
          Look Good, <br />
          <span className="text-rose-400">Feel Great</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-200 mt-6 leading-relaxed max-w-2xl mx-auto"
        >
          Premium salon services at your fingertips. Book your appointment in
          seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-rose-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-600 transition shadow-lg hover:shadow-rose-500/30"
          >
            {/* Scissors SVG Icon */}
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 6L18 18M18 6L6 18" />
              <circle cx="6" cy="6" r="2" fill="currentColor" stroke="none" />
              <circle cx="6" cy="18" r="2" fill="currentColor" stroke="none" />
            </svg>
            Contact
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 hover:border-white/50 transition"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Stats - White text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-12 flex gap-8 justify-center text-sm"
        >
          <div>
            <span className="block text-2xl font-bold text-white">500+</span>
            <span className="text-gray-300">Happy Clients</span>
          </div>
          <div>
            <span className="block text-2xl font-bold text-white">15+</span>
            <span className="text-gray-300">Expert Stylists</span>
          </div>
          <div>
            <span className="block text-2xl font-bold text-white">4.9★</span>
            <span className="text-gray-300">Average Rating</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
