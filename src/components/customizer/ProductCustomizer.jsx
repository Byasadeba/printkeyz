"use client";
import { useState } from "react";
import Viewer3D from "./Viewer3D";
import ControlsPanel from "./ControlsPanel";

export default function ProductCustomizer() {
  const [name, setName] = useState("Your Name");
  const [font, setFont] = useState("/fonts/font1.ttf");
  const [thickness, setThickness] = useState(0.2);
  const [material, setMaterial] = useState("#c0c0c0");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      <div className="h-[400px] bg-white rounded-xl shadow-soft">
        <Viewer3D
          name={name}
          font={font}
          thickness={thickness}
          material={material}
        />
      </div>

      <ControlsPanel
        name={name}
        setName={setName}
        setFont={setFont}
        setThickness={setThickness}
        setMaterial={setMaterial}
      />

    </div>
  );
}
