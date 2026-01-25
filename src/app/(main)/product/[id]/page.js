"use client";
import { products } from "@/components/explore/productsData";
import Image from "next/image";

import { useParams } from "next/navigation";

export default function ProductPage() {
   const params = useParams();
  const id = params.id
  console.log(id)
  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
  return <div>Product not found</div>;
}

  return (
     <div className="bg-[#f3f4f6] min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4">

        {/* Top Section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* LEFT: Image Gallery */}
          <div className="bg-white rounded-2xl shadow-soft p-6">
            <div className="flex justify-center">
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                className="object-contain"
              />
            </div>

            {/* Thumbnails */}
            <div className="mt-4 grid grid-cols-4 gap-3">
              {[1,2,3,4].map((i) => (
                <div key={i} className="rounded-lg border p-2 bg-gray-50">
                  <Image
                    src={product.image}
                    alt="thumb"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="mt-4 grid grid-cols-4 gap-3 text-center text-xs text-gray-600">
              <div>PLA Plastic</div>
              <div>3D Printed</div>
              <div>Material</div>
              <div>Metal Ring</div>
            </div>
          </div>

          {/* RIGHT: Product Details */}
          <div className="bg-white rounded-2xl shadow-soft p-6 space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">
              {product.title}
            </h1>

            <p className="text-xl font-semibold text-gray-800">
              ${product.price} USD
            </p>

            {/* Material */}
            <div>
              <label className="text-sm font-medium">Material</label>
              <select className="mt-1 w-full rounded-md border p-2">
                <option>Resin</option>
                <option>PLA</option>
                <option>Metal</option>
              </select>
            </div>

            {/* Color */}
            <div>
              <label className="text-sm font-medium">Color</label>
              <div className="mt-2 flex gap-2">
                {["bg-blue-500","bg-green-500","bg-yellow-400","bg-purple-500","bg-pink-400"].map((c,i)=>(
                  <span key={i} className={`h-6 w-6 rounded-full ${c} border cursor-pointer`} />
                ))}
              </div>
            </div>

            <p className="text-sm text-gray-600">Weight: 10-20g</p>

            {/* Custom Text */}
            <input
              type="text"
              placeholder="Custom Name/Text (Max 10 Chars)"
              className="w-full rounded-md border p-2"
            />

            <p className="text-sm text-gray-500">
              Ships in 2-3 business days
            </p>

            <button className="w-full rounded-lg bg-gray-200 py-2 text-blue-600 font-semibold">
              PREVIEW
            </button>

            <button className="w-full rounded-lg bg-orange-500 py-3 text-white font-semibold hover:bg-orange-600 transition">
              Add to Cart
            </button>

            {/* Reviews */}
            <div className="pt-4 border-t">
              <h3 className="font-semibold">Customer Reviews</h3>
              <p className="text-yellow-500">★★★★★</p>
              <p className="text-sm text-gray-600">
                Amazing quality, love my keychain! – Sarah L.
              </p>
              <p className="text-sm text-gray-600">
                Super fast & helpful! – Emily R.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-10 bg-white rounded-2xl shadow-soft p-6">
          <h2 className="mb-4 text-lg font-semibold">Related Products</h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {products.slice(0,5).map((item) => (
              <div key={item.id} className="text-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={120}
                  height={120}
                  className="mx-auto object-contain"
                />
                <p className="mt-2 text-sm">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 text-right">
            <button className="rounded-md bg-orange-500 px-4 py-2 text-white">
              Shop Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
