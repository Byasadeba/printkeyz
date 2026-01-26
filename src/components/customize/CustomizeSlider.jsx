"use client";
import { useRef } from "react";
import CustomizeCard from "./CustomizeCard";

export default function CustomizeSlider({ section }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="bg-white rounded-2xl p-6 shadow-soft">
      <h2 className="mb-6 text-xl font-semibold text-gray-800">
        {section.title}
      </h2>

      <div className="relative">

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="
            absolute -left-4 top-1/2 -translate-y-1/2 z-10
            h-9 w-9 rounded-full bg-white shadow-md
            flex items-center justify-center
            hover:bg-gray-100
          "
        >
          ◀
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="
            absolute -right-4 top-1/2 -translate-y-1/2 z-10
            h-9 w-9 rounded-full bg-white shadow-md
            flex items-center justify-center
            hover:bg-gray-100
          "
        >
          ▶
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="
            flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide
            px-8
          "
        >
          {section.items.map((item) => (
            <CustomizeCard
              key={item.id}
              item={item}
              categorySlug={section.categorySlug}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
