"use client";

import Viewer3D from "./Viewer3D";

export default function PreviewPanel({ name, font, thickness, material }) {
  return (
    <div className="h-[420px] rounded-2xl bg-white shadow-soft overflow-hidden">
      <Viewer3D
        name={name}
        font={font}
        thickness={thickness}
        material={material}
      />
    </div>
  );
}
