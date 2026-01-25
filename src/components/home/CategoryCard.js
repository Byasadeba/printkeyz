import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ title, image, link }) {
  return (
    <div
      className="
        flex-shrink-0
        w-[80%]
        sm:w-[60%]
        md:w-[45%]
        lg:w-[25%]
        rounded-2xl bg-white p-4
        shadow-soft
        flex items-center gap-4
        hover:scale-105 transition
      "
    >
      {/* Image Wrapper */}
      <div className="relative h-24 w-24 flex items-center justify-center">
        {/* Circle Background */}
        <div className="absolute inset-0 rounded-full bg-[#eaf6fb]" />

        {/* Floating Image */}
        <Image
          src={image}
          alt={title}
          width={90}
          height={90}
          className="relative z-10 object-contain -translate-y-2"
        />
      </div>

      {/* Text + Button */}
      <div className="flex flex-col">
        <h3 className="text-sm font-semibold text-gray-800 sm:text-base">
          {title}
        </h3>

        <Link
          href={link}
          className="
            mt-2 inline-block w-fit
            rounded-full border border-gray-300
            px-3 py-1 text-xs text-gray-600
            hover:bg-gray-100 transition
          "
        >
          View All
        </Link>
      </div>
    </div>
  );
}
