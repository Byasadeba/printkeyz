'use client';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="
          rounded-md border border-gray-300 px-3 py-1 text-sm
          text-gray-600 hover:bg-gray-100
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        Prev
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`
            rounded-md px-3 py-1 text-sm
            border
            ${
              currentPage === page
                ? "bg-gray-800 text-white border-gray-800"
                : "border-gray-300 text-gray-600 hover:bg-gray-100"
            }
          `}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="
          rounded-md border border-gray-300 px-3 py-1 text-sm
          text-gray-600 hover:bg-gray-100
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        Next
      </button>
    </div>
  );
}
