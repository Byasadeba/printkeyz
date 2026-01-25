'use client';

import { useState } from "react";
import { faqData } from "./faqData";
import { FiSearch } from "react-icons/fi";

export default function FaqSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    const filtered = faqData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()) ||
      item.content.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered);
  };

  return (
    <div className="w-full flex flex-col items-center mb-10">
      {/* Search Bar */}
      <div className="relative w-full max-w-xl">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="How can we help you today?"
          className="
            w-full rounded-full border border-gray-300
            bg-white py-3 pl-12 pr-4 text-sm
            shadow-soft
            focus:outline-none focus:ring-2 focus:ring-sky-300
          "
        />
      </div>

      {/* Search Results */}
      {results.length > 0 && (
        <div className="mt-4 w-full max-w-xl rounded-xl bg-white shadow-soft p-4">
          <p className="mb-2 text-sm font-semibold text-gray-700">
            Search Results:
          </p>

          <ul className="space-y-2">
            {results.map((item) => (
              <li
                key={item.id}
                className="border-b pb-2 last:border-none"
              >
                <p className="text-sm font-medium text-gray-800">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500">
                  {item.content}
                </p>
                <span className="text-xs text-blue-500">
                  {item.category}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
