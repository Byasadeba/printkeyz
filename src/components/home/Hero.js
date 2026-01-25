'use client';

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#bfe9ff] to-[#fbe8c7] rounded-2xl">
      <div
        className="mx-auto grid grid-cols-1 items-center gap-10 px-6 py-12 xs:px-5 sm:px-6 sm:py-16 md:grid-cols-2 lg:px-8 lg:py-20 3xl:max-w-7xl 4k:max-w-[1600px]"
      >
        {/* LEFT CONTENT */}
        <div>
          <h1
            className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl 3xl:text-6xl"
          >
            Your Imagination, <br />
            <span className="text-gray-900">Keyed to Reality</span>
          </h1>

          <p
            className="mt-4 max-w-md text-sm text-gray-700 sm:text-base lg:text-lg"
          >
            Design your own custom keychains and bring your ideas to life with premium quality prints.
          </p>

          <button
            className="mt-6 rounded-lg bg-[#ff8c2b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#e97a1f] sm:px-6 sm:py-3 sm:text-base transition"
          >
            Start Creating Your Keychain
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative h-[320px] sm:h-[380px] lg:h-[450px]">
          {/* Image 1 */}
          <Image
            src="/images/storyone.png"
            alt="Keychain 1"
            width={120}
            height={120}
            className="absolute left-5 top-10 animate-[float_6s_ease-in-out_infinite]"
          />

          {/* Image 2 */}
          <Image
            src="/images/storytwo.png"
            alt="Keychain 2"
            width={140}
            height={140}
            className="absolute right-10 top-20 animate-[float_8s_ease-in-out_infinite]"
          />

          {/* Image 3 */}
          <Image
            src="/images/storythree.png"
            alt="Keychain 3"
            width={110}
            height={110}
            className="absolute left-1/3 bottom-10 animate-[float_7s_ease-in-out_infinite]"
          />

          {/* Image 4 */}
          <Image
            src="/images/storyfour.png"
            alt="Keychain 4"
            width={130}
            height={130}
            className="absolute right-1/4 bottom-20 animate-[float_9s_ease-in-out_infinite]"
          />
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}
