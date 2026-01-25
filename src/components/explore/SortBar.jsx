'use client';

export default function SortBar({ sortOption, setSortOption }) {
  return (
    <div className="mb-4 flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-soft sm:flex-row sm:items-center sm:justify-between">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800">
        All Keychains
      </h2>

      {/* Sort Dropdown */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>Sort by:</span>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="
            rounded-md border border-gray-300 bg-white
            px-3 py-1.5 text-sm text-gray-700
            focus:outline-none focus:ring-1 focus:ring-sky-400
          "
        >
          <option value="featured">Featured</option>
          <option value="newest">Newest</option>
          <option value="low-high">Price: Low → High</option>
          <option value="high-low">Price: High → Low</option>
        </select>
      </div>
    </div>
  );
}
