import CustomizeHero from "@/components/customize/CustomizeHero";
import CustomizeSlider from "@/components/customize/CustomizeSlider";
import { customizeSections } from "@/components/customize/customizeData";

export default function CustomizePage() {
  return (
    <div className="bg-[#f3f4f6] min-h-screen px-4 py-10">
      <div className="max-w-7xl mx-auto space-y-12">

        <CustomizeHero />

        {customizeSections.map((section) => (
          <CustomizeSlider key={section.id} section={section} />
        ))}

      </div>
    </div>
  );
}