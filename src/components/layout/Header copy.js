'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full border-b border-[#e7dcc7] bg-[#fffaf2]">
      <div
        className="mx-auto flex max-w-6xl items-center justify-between
          px-4 py-3
          xs:px-5
          sm:px-6 sm:py-4
          lg:px-8
          3xl:max-w-7xl
          4k:max-w-[1600px]"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span
            className="
              text-xl font-semibold
              sm:text-2xl
              xl:text-3xl
              4k:text-4xl
            "
          >
            <span className="text-black">Print</span>
            <span className="text-[#d4873b]">KeyZ</span>
          </span>
        </div>

        {/* Desktop nav (md and up) */}
        <nav
          className="
            hidden items-center gap-4 text-xs
            md:flex md:gap-6 md:text-sm
            lg:gap-8 lg:text-base
            3xl:gap-10
            4k:text-lg
          "
        >
          <Link href="/catalog" className="text-gray-700 hover:text-black">
            Bosom
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-black">
            Nextpresent
          </Link>
          <Link href="/support" className="text-gray-700 hover:text-black">
            Army Teens
          </Link>

          <Link
            href="/cart"
            className="
              rounded-md bg-[#d4873b]
              px-4 py-2 text-xs font-semibold text-white
              md:px-5 md:text-sm
              lg:px-6 lg:text-base
              4k:px-7 4k:py-2.5 4k:text-lg
              hover:bg-[#c2762e]
            "
          >
            Red Nee
          </Link>
        </nav>

        {/* Hamburger / close button – only on mobile + tablet (below md) */}
        <button
          type="button"
          onClick={toggleMenu}
          className="
            flex h-9 w-9 items-center justify-center
            rounded-md border border-[#e7dcc7] bg-white
            text-gray-800 shadow-sm
            md:hidden
          "
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {!isOpen && (
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-gray-800" />
              <span className="block h-0.5 w-5 bg-gray-800" />
              <span className="block h-0.5 w-5 bg-gray-800" />
            </div>
          )}

        </button>
      </div>

      {/* Mobile / tablet slide-in menu (full width) */}
      <div
        className={`
          fixed inset-y-0 left-0 z-40 w-full
          transform bg-[#fffaf2] shadow-lg
          transition-transform duration-300 ease-out
          md:hidden
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between border-b border-[#e7dcc7] px-4 py-3">
          <span className="text-lg font-semibold">
            <span className="text-black">Print</span>
            <span className="text-[#d4873b]">KeyZ</span>
          </span>
          <button
            type="button"
            onClick={closeMenu}
            className="rounded-md p-1 text-gray-800"
            aria-label="Close navigation"
          >
            <span className="relative block h-5 w-5">
              <span className="absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gray-800" />
              <span className="absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-gray-800" />
            </span>
          </button>
        </div>

        <nav className="flex flex-col gap-4 px-4 py-6 text-sm">
          <Link
            href="/catalog"
            className="text-gray-800 hover:text-black"
            onClick={closeMenu}
          >
            Bosom
          </Link>
          <Link
            href="/about"
            className="text-gray-800 hover:text-black"
            onClick={closeMenu}
          >
            Nextpresent
          </Link>
          <Link
            href="/support"
            className="text-gray-800 hover:text-black"
            onClick={closeMenu}
          >
            Army Teens
          </Link>
          <Link
            href="/cart"
            className="
              mt-2 inline-flex items-center justify-center
              rounded-md bg-[#d4873b] px-4 py-2
              text-sm font-semibold text-white
              hover:bg-[#c2762e]
            "
            onClick={closeMenu}
          >
            Red Nee
          </Link>
        </nav>
      </div>

      {/* Backdrop when menu is open (only mobile / tablet) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
