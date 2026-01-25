'use client';

import { useState } from "react";
import { FiEdit3, FiPackage } from "react-icons/fi";

const steps = [
  {
    id: 1,
    title: "Design it",
    description:
      "Upload a model or use our customizer to create your own unique keychain.",
    icon: <FiEdit3 size={18} />,
  },
  {
    id: 2,
    title: "Craft it",
    description:
      "Our team carefully crafts your design with premium materials and quality checks.",
    icon: "🎨",
  },
  {
    id: 3,
    title: "Ship it",
    description: "Delivered fast and safely right to your doorstep.",
    icon: <FiPackage size={18} />,
  },
];

export default function HowItWorks() {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="bg-[#f8fafc] rounded-2xl shadow-soft p-6">
      <h3 className="mb-6 text-lg font-semibold text-gray-800 sm:text-xl">
        How It Works
      </h3>

      {/* Wrapper: column on mobile, row on desktop */}
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
        {steps.map((step) => {
          const isActive = activeId === step.id;

          return (
            <div
              key={step.id}
              onClick={() => setActiveId(step.id)}
              className={`flex items-start gap-3 cursor-pointer transition-all duration-300 w-full ${isActive ? "md:flex-[2]" : "md:flex-1"}`}
            >
              {/* Circle */}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 shrink-0${isActive? "border-[#7dd3fc] bg-[#ecfeff]": "border-gray-300 bg-white"}transition`}
              >
                <span className="text-gray-800">{step.icon}</span>
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-800">
                  {step.title}
                </span>

                {/* Description only for active */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${isActive ? "max-h-24 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="mt-1 text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
