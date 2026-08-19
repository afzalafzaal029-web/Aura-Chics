// components/layout/Footer.tsx
import Link from "next/link";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/app/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-rose-400">Aura Chics</h3>
            <p className="text-sm text-gray-400 mt-1">Where beauty meets elegance.</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-5">
            <a href="#" className="text-gray-400 hover:text-white transition-transform hover:scale-110">
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-transform hover:scale-110">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-transform hover:scale-110">
              <TwitterIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Quick links (optional, but minimal) */}
          <nav className="flex gap-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/services" className="hover:text-white transition">Services</Link>
            <Link href="/booking" className="hover:text-white transition">Book</Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Aura Chics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}