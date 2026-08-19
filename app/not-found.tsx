import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-gray-600 mt-2">Service not found</p>
      <Link href="/services" className="mt-4 text-rose-500 hover:underline">
        View all services
      </Link>
    </div>
  );
}