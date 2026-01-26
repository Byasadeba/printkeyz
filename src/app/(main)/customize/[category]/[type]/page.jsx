// import ProductCustomizerLayout from "@/components/customizer/ProductCustomizerLayout";

// export default function CustomizePage({ params }) {
//   const { category, type } = params;

//   return (
//     <div className="bg-[#f3f4f6] min-h-screen py-10">
//       <div className="mx-auto max-w-7xl px-4">
//         <h1 className="mb-6 text-2xl font-semibold text-gray-800">
//           Customize Your {category} - {type}
//         </h1>

//         <ProductCustomizerLayout />
//       </div>
//     </div>
//   );
// }


"use client";

import { useParams } from "next/navigation";
import ProductCustomizerLayout from "@/components/customizer/ProductCustomizerLayout";

export default function CustomizeProductPage() {
  const { category, type } = useParams();

  return (
    <div className="min-h-screen bg-[#f3f4f6] py-10">
      <div className="mx-auto max-w-7xl px-4 space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Customize Product
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Category: <span className="font-medium">{category}</span> | Type:{" "}
            <span className="font-medium">{type}</span>
          </p>
        </div>

        {/* Main Customizer */}
        <ProductCustomizerLayout />

      </div>
    </div>
  );
}

