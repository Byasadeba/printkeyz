'use client';

import Image from "next/image";
import { FiTool } from "react-icons/fi";

export default function TroubleshootingCard() {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-5 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FiTool className="text-sky-500" />
          <h3 className="text-sm font-semibold text-gray-800">
            Troubleshooting Guides
          </h3>
        </div>
        <span className="text-gray-400">ⓘ</span>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Image */}
        <div className="w-full md:w-40 flex justify-center">
          <Image
            src="/images/story-2.jpg" // replace with your image
            alt="Keychain troubleshooting"
            width={160}
            height={160}
            className="rounded-xl object-cover"
          />
        </div>

        {/* Right Guides */}
        <div className="flex-1 space-y-4">
          {/* Guide 1 */}
          <div className="flex items-start gap-3">
            <Image
              src="/images/team-1.jpg" // small guide image
              alt="Keychain Care"
              width={50}
              height={50}
              className="rounded-md object-cover"
            />

            <div>
              <p className="text-sm font-semibold text-gray-700">
                How do Keychain Care
              </p>
              <p className="text-xs text-gray-500">
                Keychain Care involves the right tools to solve common issues.
              </p>
            </div>
          </div>

          {/* Guide 2 */}
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#fff3e6]">
              <span className="text-lg">🌞</span>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-700">
                Fixing Common Problems
              </p>
              <p className="text-xs text-gray-500">
                Fix common issues that arise during crafting your keychains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
