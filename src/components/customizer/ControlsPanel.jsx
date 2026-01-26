// export default function ControlsPanel({
//   name,
//   setName,
//   setFont,
//   setThickness,
//   setMaterial,
// }) {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow-soft space-y-4">

//       <div>
//         <label>Name</label>
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full border p-2 rounded"
//         />
//       </div>

//       <div>
//         <label>Font</label>
//         <select onChange={(e) => setFont(e.target.value)} className="w-full border p-2 rounded">
//           <option value="/fonts/font1.ttf">Script</option>
//           <option value="/fonts/font2.ttf">Bold</option>
//           <option value="/fonts/font3.ttf">Classic</option>
//         </select>
//       </div>

//       <div>
//         <label>Thickness</label>
//         <input type="range" min="0.1" max="0.5" step="0.05"
//           onChange={(e) => setThickness(Number(e.target.value))}
//         />
//       </div>

//       <div>
//         <label>Material</label>
//         <select onChange={(e) => setMaterial(e.target.value)} className="w-full border p-2 rounded">
//           <option value="#c0c0c0">Silver</option>
//           <option value="#ffd700">Gold</option>
//           <option value="#cd7f32">Bronze</option>
//         </select>
//       </div>

//       <button className="w-full bg-black text-white py-2 rounded">
//         Add to Cart
//       </button>
//     </div>
//   );
// }

"use client";

export default function ControlsPanel({
  name,
  setName,
  font,
  setFont,
  thickness,
  setThickness,
  material,
  setMaterial,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-6 space-y-5">
      <h2 className="text-lg font-semibold text-gray-800">
        Customize Your Keychain
      </h2>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Enter Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full rounded-lg border px-3 py-2"
        />
      </div>

      {/* Font */}
      <div>
        <label className="block text-sm font-medium mb-1">Font</label>
        <select
          value={font}
          onChange={(e) => setFont(e.target.value)}
          className="w-full rounded-lg border px-3 py-2"
        >
          <option value="inter">Inter</option>
          <option value="lobster">Lobster</option>
          <option value="roboto">Roboto</option>
        </select>
      </div>

      {/* Thickness */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Thickness: {thickness}
        </label>
        <input
          type="range"
          min="0.2"
          max="1"
          step="0.1"
          value={thickness}
          onChange={(e) => setThickness(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Material */}
      <div>
        <label className="block text-sm font-medium mb-1">Material</label>
        <select
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
          className="w-full rounded-lg border px-3 py-2"
        >
          <option value="silver">Silver</option>
          <option value="gold">Gold</option>
          <option value="plastic">Plastic</option>
        </select>
      </div>
    </div>
  );
}
