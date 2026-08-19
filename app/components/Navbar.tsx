"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Scissors } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full z-50 px-6 py-3">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-rose-600">
          <Scissors size={28} />
          <span className="text-gray-800">Aura Chics</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><Link href="/" className="hover:text-rose-500 transition">Home</Link></li>
          <li><Link href="/services" className="hover:text-rose-500 transition">Services</Link></li>
          <li><Link href="/contact" className="hover:text-rose-500 transition">Contact</Link></li>
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu with animation */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden mt-4 space-y-3 text-center bg-white p-4 rounded-xl shadow"
        >
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link href="/booking" onClick={() => setIsOpen(false)}>Book Now</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </motion.ul>
      )}
    </nav>
  );
}