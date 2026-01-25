'use client';

export default function ContactFormCard() {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-5 w-full h-full mt-8">
      <h3 className="mb-4 text-sm font-semibold text-gray-800">
        Contact Us
      </h3>

      <form className="space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-sky-400"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-sky-400"
        />

        <input
          type="text"
          placeholder="Order Number (optional)"
          className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-sky-400"
        />

        <textarea
          placeholder="Message"
          rows={3}
          className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-sky-400 resize-none"
        />

        <button
          type="submit"
          className="
            mt-4 w-full rounded-lg bg-gray-800
            py-2 text-sm font-semibold text-white
            hover:bg-gray-900 transition
          "
        >
          Submit
        </button>
      </form>
    </div>
  );
}
