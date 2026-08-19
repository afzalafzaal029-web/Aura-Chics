// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { Menu, X, Scissors } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full z-50 px-6 py-3">
//       <div className="max-w-6xl mx-auto flex justify-between items-center">
//         <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-rose-600">
//           <Scissors size={28} />
//           <span className="text-gray-800">Aura Chics</span>
//         </Link>

//         {/* Desktop */}
//         <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
//           <li><Link href="/" className="hover:text-rose-500 transition">Home</Link></li>
//           <li><Link href="/services" className="hover:text-rose-500 transition">Services</Link></li>
//           <li><Link href="/contact" className="hover:text-rose-500 transition">Contact</Link></li>
//         </ul>

//         {/* Mobile toggle */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile menu with animation */}
//       {isOpen && (
//         <motion.ul
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           className="md:hidden mt-4 space-y-3 text-center bg-white p-4 rounded-xl shadow"
//         >
//           <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
//           <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
//           <li><Link href="/booking" onClick={() => setIsOpen(false)}>Book Now</Link></li>
//           <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
//         </motion.ul>
//       )}
//     </nav>
//   );
// }

"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Scissors } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/app/components/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed w-full z-50 px-6 py-3 transition-all duration-300
        bg-white/95 dark:bg-white/20 backdrop-blur-md
        ${scrolled ? "shadow-lg shadow-black/5 dark:shadow-black/30" : "shadow-sm"}
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-2xl font-bold group"
        >
          <div className="relative">
            <Scissors
              size={28}
              className="text-rose-500 dark:text-rose-400 transition-transform duration-300 group-hover:rotate-12"
            />
            <span className="absolute -inset-2 bg-rose-500/10 dark:bg-rose-400/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
          </div>
          <span className="text-gray-800 dark:text-white tracking-tight">
            Aura<span className="text-rose-500 dark:text-rose-400">Chics</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1 text-gray-700 dark:text-gray-300 font-medium">
          <li>
            <Link
              href="/"
              className="px-4 py-2 rounded-full hover:bg-rose-50 dark:hover:bg-rose-950/30 hover:text-rose-500 dark:hover:text-rose-400 transition-all duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="px-4 py-2 rounded-full hover:bg-rose-50 dark:hover:bg-rose-950/30 hover:text-rose-500 dark:hover:text-rose-400 transition-all duration-200"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/booking"
              className="px-4 py-2 rounded-full hover:bg-rose-50 dark:hover:bg-rose-950/30 hover:text-rose-500 dark:hover:text-rose-400 transition-all duration-200"
            >
              Book Now
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-full hover:bg-rose-50 dark:hover:bg-rose-950/30 hover:text-rose-500 dark:hover:text-rose-400 transition-all duration-200"
            >
              Contact
            </Link>
          </li>
          <li className="ml-2">
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full hover:bg-rose-50 dark:hover:bg-rose-950/30 text-gray-700 dark:text-gray-300 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="md:hidden mt-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-slate-700"
        >
          <ul className="py-2 space-y-0.5 text-center text-gray-700 dark:text-gray-300 font-medium">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/booking"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-colors"
              >
                Book Now
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}