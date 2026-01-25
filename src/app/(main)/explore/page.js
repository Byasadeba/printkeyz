'use client';

import { useState } from "react";

import ExploreHero from "@/components/explore/ExploreHero";
import FilterSidebar from "@/components/explore/FilterSidebar";
import SortBar from "@/components/explore/SortBar";
import ProductGrid from "@/components/explore/ProductGrid";
import Pagination from "@/components/explore/Pagination";

import { products } from "@/components/explore/productsData";

export default function ExplorePage() {
  const [sortOption, setSortOption] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const itemsPerPage = 8;

  // 🔹 Filter by category
  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((product) =>
          selectedCategories.includes(product.category)
        );

  // 🔹 Sort
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "low-high") return a.price - b.price;
    if (sortOption === "high-low") return b.price - a.price;
    return 0;
  });

  // 🔹 Pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  return (
    <div className="bg-[#f3f4f6] min-h-screen">
      <ExploreHero />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <FilterSidebar
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />

          {/* Right Content */}
          <div className="flex flex-col gap-6">
            <SortBar sortOption={sortOption} setSortOption={setSortOption} />

            <ProductGrid products={paginatedProducts} />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
