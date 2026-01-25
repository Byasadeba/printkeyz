'use client';

import { useState } from "react";
import Image from "next/image";
import { FiHelpCircle, FiPlus } from "react-icons/fi";

const faqs = [
  {
    id: 1,
    question: "How do track you order?",
    answer: "You can track your order using the tracking link sent to your email.",
  },
  {
    id: 2,
    question: "What do track wits to yor materials?",
    answer: "We use premium acrylic and metal materials for all keychains.",
  },
  {
    id: 3,
    question: "What do trjney you use?",
    answer: "We use eco-friendly printing and finishing techniques.",
  },
];

export default function FaqCard() {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="bg-white rounded-2xl shadow-soft p-5 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FiHelpCircle className="text-sky-500" />
          <h3 className="text-sm font-semibold text-gray-800">
            Frequently Asked Questions
          </h3>
        </div>
        <span className="text-gray-400">ⓘ</span>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left: Questions */}
        <div className="flex-1 space-y-3">
          {faqs.map((faq) => {
            const isActive = activeId === faq.id;

            return (
              <div
                key={faq.id}
                className="cursor-pointer"
                onClick={() => setActiveId(faq.id)}
              >
                <div className="flex items-start gap-2">
                  <FiPlus
                    className={`mt-1 transition ${
                      isActive ? "rotate-45 text-sky-500" : "text-gray-400"
                    }`}
                  />
                  <p className="text-sm font-medium text-gray-700">
                    {faq.question}
                  </p>
                </div>

                {isActive && (
                  <p className="ml-6 mt-1 text-xs text-gray-500">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}

          <p className="mt-2 text-xs text-blue-500 cursor-pointer">
            See more questions
          </p>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-32 flex justify-center">
          <Image
            src="/images/story-1.jpg" // replace with your real image
            alt="FAQ keychain"
            width={120}
            height={120}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
