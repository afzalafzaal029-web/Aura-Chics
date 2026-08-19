import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center py-10">
      {/* Video wala same "Arvo" font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');
        .font-arvo { font-family: 'Arvo', serif; }
      `}</style>

      {/* Container mein padding adjust ki gayi hai */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-arvo">
        <div className="flex flex-col items-center justify-center w-full text-center">
          {/* GIF Animation Container */}
          {/* Mobile k liye height 250px, Tablet k liye 300px aur Desktop k liye 400px */}
          {/* bg-contain add kiya hai taaki mobile par GIF kate nahi */}
          <div
            className="w-full max-w-3xl h-[250px] sm:h-[300px] md:h-[400px] bg-center bg-no-repeat bg-contain md:bg-auto flex justify-center"
            style={{
              backgroundImage:
                "url('/dribbble_1.gif')",
            }}
          >
            {/* 404 Text - Screen size k hisaab se responsive font size */}
            <h1 className="text-6xl sm:text-7xl md:text-[80px] font-bold text-black mt-4 sm:mt-8 md:mt-10">
              404
            </h1>
          </div>

          {/* Text Content & Button */}
          {/* Mobile par negative margin hata diya hai taaki overlap na ho */}
          <div className="mt-4 sm:mt-[-20px] md:mt-[-40px] z-10 bg-white/90 px-4 py-2 rounded-md">
            <h3 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-gray-900 mb-2 sm:mb-4">
              Look like you're lost
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6">
              the page you are looking for is not available!
            </p>

            {/* Button size bhi mobile k liye optimize kiya hai */}
            <Link
              href="/"
              className="inline-block bg-[#39ac31] text-white px-6 py-2 sm:px-8 sm:py-3 rounded hover:bg-green-700 transition-all duration-300 font-semibold shadow-sm text-sm sm:text-base"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
