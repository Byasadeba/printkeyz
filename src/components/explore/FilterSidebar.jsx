// 'use client';

// import { useState } from "react";

// const categories = [
//   "Pet & Animal Keys",
//   "Pop Culture Keys",
//   "Utility Keys",
//   "Name / Text Keys",
//   "Photo / Memory Keys",
//   "Hobby Keys",
//   "Minimalist Keys",
//   "Novelty Keys",
//   "Professional Keys",
// ];

// const materials = ["Plastic", "Metal", "Wood"];
// const colors = ["Red", "Blue", "Black", "White", "Yellow"];
// const ratings = ["4★ & up", "3★ & up", "2★ & up"];
// const availability = ["In Stock", "Out of Stock"];

// export default function FilterSidebar() {
//   const [openFilter, setOpenFilter] = useState(null);

//   const toggleFilter = (name) => {
//     setOpenFilter(openFilter === name ? null : name);
//   };

//   return (
//     <aside className="w-full rounded-2xl bg-white p-4 shadow-soft">
//       {/* Categories */}
//       <div>
//         <h3 className="mb-3 text-sm font-semibold text-gray-800">
//           Categories
//         </h3>
//         <ul className="space-y-2">
//           {categories.map((cat) => (
//             <li
//               key={cat}
//               className="cursor-pointer text-sm text-gray-700 hover:text-black"
//             >
//               {cat}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <hr className="my-4" />

//       {/* Filters */}
//       <div>
//         <h3 className="mb-3 text-sm font-semibold text-gray-800">
//           Filters
//         </h3>

//         {/* Material */}
//         <FilterGroup
//           title="Material"
//           options={materials}
//           isOpen={openFilter === "material"}
//           onToggle={() => toggleFilter("material")}
//         />

//         {/* Color */}
//         <FilterGroup
//           title="Color"
//           options={colors}
//           isOpen={openFilter === "color"}
//           onToggle={() => toggleFilter("color")}
//         />

//         {/* Rating */}
//         <FilterGroup
//           title="Rating"
//           options={ratings}
//           isOpen={openFilter === "rating"}
//           onToggle={() => toggleFilter("rating")}
//         />

//         {/* Availability */}
//         <FilterGroup
//           title="Availability"
//           options={availability}
//           isOpen={openFilter === "availability"}
//           onToggle={() => toggleFilter("availability")}
//         />
//       </div>
//     </aside>
//   );
// }

// /* Reusable Filter Group */
// function FilterGroup({ title, options, isOpen, onToggle }) {
//   return (
//     <div className="mb-3">
//       <button
//         onClick={onToggle}
//         className="flex w-full items-center justify-between text-sm font-medium text-gray-700"
//       >
//         {title}
//         <span>{isOpen ? "−" : "+"}</span>
//       </button>

//       {isOpen && (
//         <div className="mt-2 space-y-2 pl-2">
//           {options.map((opt) => (
//             <label
//               key={opt}
//               className="flex items-center gap-2 text-sm text-gray-600"
//             >
//               <input type="checkbox" className="accent-sky-500" />
//               {opt}
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }



'use client';

import CategoryFilter from "./CategoryFilter";
import { categories, materials, colors, ratings, availability } from "./filtersData";

export default function FilterSidebar({
  selectedCategories,
  setSelectedCategories,
}) {
  return (
    <aside className="w-full rounded-2xl bg-white p-4 shadow-soft">
      {/* Categories */}
      <CategoryFilter
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />

      <hr className="my-4" />

      {/* Filters */}
      <h3 className="mb-3 text-sm font-semibold text-gray-800">
        Filters
      </h3>

      <FilterGroup title="Material" options={materials} />
      <FilterGroup title="Color" options={colors} />
      <FilterGroup title="Rating" options={ratings} />
      <FilterGroup title="Availability" options={availability} />
    </aside>
  );
}

function FilterGroup({ title, options }) {
  return (
    <div className="mb-3">
      <h4 className="text-sm font-medium text-gray-700">{title}</h4>
      <div className="mt-2 space-y-2 pl-1">
        {options.map((opt) => (
          <label
            key={opt}
            className="flex items-center gap-2 text-sm text-gray-600"
          >
            <input type="checkbox" className="accent-sky-500" />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}
