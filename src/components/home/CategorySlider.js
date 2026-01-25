'use client';

import { useRef } from "react";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    id: 1,
    title: "Pet & Animal Keys",
    image: "/images/categories/pet-animal.png",
    link: "/catalog/pet-animal",
  },
  {
    id: 2,
    title: "Pop Culture Keys",
    image: "/images/categories/pop-culture.png",
    link: "/catalog/pop-culture",
  },
  {
    id: 3,
    title: "Utility Keys",
    image: "/images/categories/utility.png",
    link: "/catalog/utility",
  },
  {
    id: 4,
    title: "Name / Text Keys",
    image: "/images/categories/name-text.png",
    link: "/catalog/name-text",
  },
  {
    id: 5,
    title: "Photo / Memory Keys",
    image: "/images/categories/photo-memory.png",
    link: "/catalog/photo-memory",
  },
  {
    id: 6,
    title: "Hobby Keys",
    image: "/images/categories/hobby.png",
    link: "/catalog/hobby",
  },
  {
    id: 7,
    title: "Minimalist Keys",
    image: "/images/categories/minimalist.png",
    link: "/catalog/minimalist",
  },
  {
    id: 8,
    title: "Novelty Keys",
    image: "/images/categories/novelty.png",
    link: "/catalog/novelty",
  },
  {
    id: 9,
    title: "Professional Keys",
    image: "/images/categories/professional.png",
    link: "/catalog/professional",
  },
];


export default function CategorySlider() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#f8fafc] py-14 mt-8 rounded-2xl">
      <div
        className="mx-auto relative px-4 xs:px-5 sm:px-6 lg:px-8 3xl:max-w-7xl 4k:max-w-[1600px]"
      >
        <h2 className="mb-8 text-xl font-semibold text-gray-800 sm:text-2xl">
          Product Categories
        </h2>

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-1 top-[65%] -translate-y-[65%] z-10 h-9 w-9 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100"
        >
          ◀
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-1 top-[65%] -translate-y-[65%] z-10 h-9 w-9 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100"
        >
          ▶
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
        >
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              title={cat.title}
              image={cat.image}
              link={cat.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
