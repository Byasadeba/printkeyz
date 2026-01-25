'use client';

import Image from "next/image";
import { FiTruck, FiInfo } from "react-icons/fi";

export default function ShippingInfoCard() {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-5 w-full mt-8">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FiTruck className="text-sky-500" />
          <h3 className="text-sm font-semibold text-gray-800">
            Shipping Information
          </h3>
        </div>
        <FiInfo className="text-gray-400" />
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-start gap-4">
        {/* Left Text */}
        <div className="flex-1 space-y-3">
          <p className="text-xs text-gray-500">
            (Door to door shipping for free)
          </p>

          <div className="flex items-start gap-2">
            <FiTruck className="mt-1 text-gray-400" />
            <p className="text-sm text-gray-700">
              We provide simple shipping facilities to ensure timely delivery
              worldwide.
            </p>
          </div>

          <p className="text-xs text-gray-500">
            You can track your shipment easily once your order is dispatched.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-28 flex justify-center">
          <Image
            src="/images/map.jpg"   // use your world map image
            alt="World Map"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
