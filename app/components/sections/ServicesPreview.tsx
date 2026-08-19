"use client";
import { services } from "@/app/lib/data";
import ServiceCard from "@/app/components/ui/ServiceCard";

export default function ServicesPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Signature Services</h2>
        <p className="text-center text-gray-500 mb-10">Choose the perfect treatment for you</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}