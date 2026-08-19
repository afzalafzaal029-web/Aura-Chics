"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

interface ServiceCardProps {
  slug: string;      
  title: string;
  price: string;
  shortDescription:string;
  duration: string;
  image: string;
  description: string;
}

export default function ServiceCard({ slug, title, price, shortDescription, duration, image }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow"
    >
      <Link href={`/booking/${slug}`} className="block">
        <div className="relative h-48 w-full">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-rose-500 font-bold text-lg">{price}</p>
          <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
            <Clock size={16} /> {duration}
          </div>
          <p className="mt-2 text-gray-600 text-sm">{shortDescription}</p>
          <span className="mt-3 inline-block w-full bg-rose-500 text-white text-center py-2 rounded-full hover:bg-rose-600 transition text-sm">
            Book Now
          </span>
        </div>
      </Link>
    </motion.div>
  );
}