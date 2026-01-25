import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function ProductCard({ product }) {
  const { id, title, price, image, rating } = product;

  return (
    <Link href={`/product/${id}`}>
      <div
        className="
          rounded-xl bg-white p-4 shadow-soft
          transition hover:shadow-lg hover:-translate-y-1
          cursor-pointer
        "
      >
        {/* Image */}
        <div className="relative mb-3 flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-gray-50">
          <Image
            src={image}
            alt={title}
            width={160}
            height={160}
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {title}
        </h3>

        {/* Price */}
        <p className="mt-1 text-sm font-medium text-gray-700">
          ${price}
        </p>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          {[1,2,3,4,5].map((star) => (
            <FaStar
              key={star}
              size={12}
              className={star <= rating ? "text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
