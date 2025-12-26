'use client';

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#e7dcc7] bg-[#fffaf2]">
      <div
        className="
          mx-auto flex max-w-6xl flex-col items-start justify-between
          gap-6 px-4 py-8
          xs:px-5
          sm:flex-row sm:items-center sm:px-6 sm:py-10
          lg:px-8 lg:py-12
          3xl:max-w-7xl
          4k:max-w-[1600px]
        "
      >
        {/* Contact info */}
        <div className="w-full space-y-3 sm:w-2/3">
          <h2
            className="
              text-xl font-semibold text-gray-900
              sm:text-2xl
              xl:text-3xl
              4k:text-4xl
            "
          >
            Contact Us
          </h2>

          <div className="space-y-2 text-xs text-gray-700 sm:text-sm lg:text-base">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#d4873b] text-white sm:h-9 sm:w-9">
                @
              </span>
              <span>info@printkeyz.com</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#d4873b] text-white sm:h-9 sm:w-9">
                ☎
              </span>
              <span>+001 35268 948</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#d4873b] text-white sm:h-9 sm:w-9">
                ❖
              </span>
              <span>Henopri, preeniyese secti, kontakt</span>
            </div>
          </div>

          <p className="pt-3 text-[10px] text-gray-500 sm:text-xs lg:text-sm 4k:text-base">
            Flespeyyes&apos;loo toon tristseut bene imots and sonnee betson
          </p>
        </div>

        {/* Map thumbnail */}
        <div className="w-full sm:w-auto">
          <div
            className="
              h-32 w-full overflow-hidden rounded-md border border-gray-300 bg-gray-100
              sm:h-32 sm:w-32
              lg:h-40 lg:w-40
              4k:h-48 4k:w-48
            "
          >
            <img
              src="/images/map.jpg"
              alt="Map"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
