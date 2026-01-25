'use client';

import { FiBookOpen, FiLayers, FiInfo } from "react-icons/fi";

export default function HelpfulResourcesCard() {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-5 w-full h-full mt-8">
      <h3 className="mb-4 text-sm font-semibold text-gray-800">
        Helpful Resources
      </h3>

      <div className="space-y-3">
        {/* Item 1 */}
        <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3 cursor-pointer hover:bg-gray-100 transition">
          <div className="flex items-center gap-3">
            <FiBookOpen className="text-sky-500" />
            <span className="text-sm text-gray-700">Tutorials</span>
          </div>
          <span className="text-gray-400">›</span>
        </div>

        {/* Item 2 */}
        <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3 cursor-pointer hover:bg-gray-100 transition">
          <div className="flex items-center gap-3">
            <FiLayers className="text-sky-500" />
            <span className="text-sm text-gray-700">Design Templates</span>
          </div>
          <span className="text-gray-400">›</span>
        </div>

        {/* Item 3 */}
        <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3 cursor-pointer hover:bg-gray-100 transition">
          <div className="flex items-center gap-3">
            <FiInfo className="text-sky-500" />
            <span className="text-sm text-gray-700">Material Info</span>
          </div>
          <span className="text-gray-400">›</span>
        </div>
      </div>
    </div>
  );
}
