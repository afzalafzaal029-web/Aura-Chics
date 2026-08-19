import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ServiceCard from "@/app/components/ui/ServiceCard";
import { services } from "@/app/lib/data";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <section className="max-w-6xl mx-auto px-4 py-28">
        <h1 className="text-4xl font-bold text-center mb-4">All Services</h1>
        <p className="text-center text-gray-500 mb-12">Discover our full range of beauty treatments</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => <ServiceCard key={s.id} {...s} />)}
        </div>
      </section>
      <Footer />
    </>
  );
}