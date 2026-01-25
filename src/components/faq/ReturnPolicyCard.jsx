'use client';

import Image from "next/image";
import { FiRotateCcw, FiInfo } from "react-icons/fi";

export default function ReturnPolicyCard() {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-5 w-full mt-8">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FiRotateCcw className="text-sky-500" />
          <h3 className="text-sm font-semibold text-gray-800">
            Return Policy
          </h3>
        </div>
        <FiInfo className="text-gray-400" />
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Content */}
        <div className="flex-1 space-y-4">
          {/* Main Question */}
          <div className="flex items-start gap-2">
            <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-100">
              ❓
            </div>
            <p className="text-sm text-gray-700">
              Can I return my order if I don’t like it?
            </p>
          </div>

          {/* Small Card 1 */}
          <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-3">
            <Image
              src="/images/team-1.jpg"
              alt="Return example"
              width={50}
              height={50}
              className="rounded-md object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-700">
                Can I replace my broken keychain?
              </p>
              <p className="text-xs text-gray-500">
                Learn how to request a replacement.
              </p>
            </div>
          </div>

          {/* Small Card 2 */}
          <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-3">
            <Image
              src="/images/story-2.jpg"
              alt="Track order"
              width={50}
              height={50}
              className="rounded-md object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-700">
                How do I track my order?
              </p>
              <p className="text-xs text-gray-500">
                Check your delivery status anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-40 flex justify-center">
          <Image
            src="/images/team-4.jpg" // replace with your return policy image
            alt="Return Policy"
            width={160}
            height={160}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
