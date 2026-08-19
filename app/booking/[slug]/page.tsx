// app/booking/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/app/lib/data";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BookingFormCompact from "@/app/components/BookingFormCompact";
import { Toaster } from "react-hot-toast";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-rose-500 hover:text-rose-600 transition mb-6"
          >
            ← Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Service Details - Left (3/5) */}
            <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="relative h-80 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-6 md:p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{service.title}</h1>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-2xl font-bold text-rose-500">{service.price}</span>
                  <span className="text-gray-500">⏱ {service.duration}</span>
                </div>

                <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                  {service.description}
                </p>

                {/* Optional: Highlights / Benefits */}
                <div className="mt-8 p-4 bg-rose-50 rounded-xl border border-rose-100">
                  <h4 className="font-semibold text-rose-800">✨ Why book with us?</h4>
                  <ul className="mt-2 text-sm text-gray-600 space-y-1">
                    <li>✓ Expert stylists with years of experience</li>
                    <li>✓ Premium products for best results</li>
                    <li>✓ Hygienic and comfortable environment</li>
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/services"
                    className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-full font-semibold hover:border-rose-500 hover:text-rose-500 transition text-sm"
                  >
                    See All Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Booking Form - Right (2/5) */}
            <div className="lg:col-span-2">
              <BookingFormCompact serviceName={service.title} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Toaster position="top-center" />
    </>
  );
}