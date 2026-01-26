import Link from "next/link";

export default function CustomizeCard({ item, categorySlug }) {
  return (
    <Link href={`/customize/${categorySlug}/${item.typeSlug}`}>
      <div
        className="
          min-w-[180px] sm:min-w-[200px] md:min-w-[220px]
          bg-white rounded-xl p-4
          shadow-soft hover:scale-105 transition
          cursor-pointer
          flex flex-col items-center
        "
      >
        {/* Circle Placeholder */}
        <div
          className="
            h-28 w-28 sm:h-32 sm:w-32
            rounded-full
            bg-gradient-to-br from-[#bfe9ff] to-[#fbe8c7]
            flex items-center justify-center
          "
        >
          <span className="text-2xl font-bold text-gray-700">
            {item.name.charAt(0)}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-sm sm:text-base font-semibold text-gray-800 text-center whitespace-normal">
          {item.name}
        </h3>
      </div>
    </Link>
  );
}
