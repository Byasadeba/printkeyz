import ContactFormCard from "@/components/faq/ContactFormCard";
import FaqCard from "@/components/faq/FaqCard";
import FaqSearch from "@/components/faq/FaqSearch";
import HelpfulResourcesCard from "@/components/faq/HelpfulResourcesCard";
import ReturnPolicyCard from "@/components/faq/ReturnPolicyCard";
import ShippingInfoCard from "@/components/faq/ShippingInfoCard";
import TroubleshootingCard from "@/components/faq/TroubleshootingCard";

export default function FaqPage() {
  return (
    <div className="bg-[#eef3f8] min-h-screen px-4 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Search bar */}
        <FaqSearch />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          
          {/* Row 1 */}
          <FaqCard />
          <TroubleshootingCard />

          {/* Row 2 - Left */}
          <ShippingInfoCard />

          {/* Right merged column (spans 2 rows) */}
          <div className="lg:row-span-2 flex flex-col gap-6">
            <ContactFormCard />
            <HelpfulResourcesCard />
          </div>

          {/* Row 3 - Left */}
          <ReturnPolicyCard />

        </div>
      </div>
    </div>
  );
}
