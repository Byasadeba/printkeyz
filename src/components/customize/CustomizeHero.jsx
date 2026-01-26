"use client";
import Image from "next/image";

export default function CustomizeHero() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#dbeafe] to-[#fef3c7]">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 py-12">

        {/* Left */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Customize Your Keychain
          </h1>
          <p className="mt-4 text-gray-700 max-w-md">
            Create personalized keychains, bracelets and necklaces with your name and style.
          </p>

          <button className="mt-6 rounded-lg bg-[#ff8c2b] px-6 py-3 text-white font-semibold hover:bg-[#e97a1f] transition">
            Start Customizing
          </button>
        </div>

        {/* Right Floating Images */}
        <div className="relative h-[300px] sm:h-[380px]">
          <Image src="/images/customize/one.png" alt="" width={120} height={120}
            className="absolute left-5 top-10 animate-[float_6s_ease-in-out_infinite]" />

          <Image src="/images/customize/two.png" alt="" width={140} height={140}
            className="absolute right-10 top-16 animate-[float_8s_ease-in-out_infinite]" />

          <Image src="/images/customize/three.png" alt="" width={120} height={120}
            className="absolute left-1/3 bottom-10 animate-[float_7s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
