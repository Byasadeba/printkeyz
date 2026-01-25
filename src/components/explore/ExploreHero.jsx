import Image from "next/image";

export default function ExploreHero() {
  return (
    <section className="w-full bg-[#f3f4f6] py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl">
          {/* Background Image */}
          <Image
            src="/images/explore-hero.png" // replace with your banner image
            alt="Explore Keychains"
            width={1400}
            height={400}
            className="h-[220px] w-full object-cover sm:h-[280px] lg:h-[320px]"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text Content */}
          {/* <div className="absolute inset-0 flex items-center">
            <div className="px-6 sm:px-10">
              <h1 className="max-w-xl text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Unlock Your Style:
                <br />
                Shop All Keychains!
              </h1>

              <p className="mt-2 max-w-md text-sm text-gray-200 sm:text-base">
                Explore our wide collection of custom keychains designed just
                for you.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
