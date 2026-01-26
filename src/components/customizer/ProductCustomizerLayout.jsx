"use client";

import { useState } from "react";
import PreviewPanel from "./PreviewPanel";
import ControlsPanel from "./ControlsPanel";

export default function ProductCustomizerLayout() {
  const [name, setName] = useState("");
  const [font, setFont] = useState("inter");
  const [thickness, setThickness] = useState(0.4);
  const [material, setMaterial] = useState("silver");

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <PreviewPanel
        name={name}
        font={font}
        thickness={thickness}
        material={material}
      />
      <ControlsPanel
        name={name}
        setName={setName}
        font={font}
        setFont={setFont}
        thickness={thickness}
        setThickness={setThickness}
        material={material}
        setMaterial={setMaterial}
      />
    </div>
  );
}
