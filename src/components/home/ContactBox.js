export default function ContactBox() {
  return (
    <div className="bg-[#f8fafc] rounded-2xl shadow-soft p-6 h-full">
      <h3 className="mb-6 text-lg font-semibold text-gray-800 sm:text-xl">
        Contact Us
      </h3>

      <input
        type="text"
        placeholder="Name"
        className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <textarea
        placeholder="Message"
        rows={4}
        className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <button className="rounded-md bg-[#ff8c2b] px-5 py-2 text-sm font-semibold text-white hover:bg-[#e97a1f] transition">
        Send
      </button>
    </div>
  );
}
