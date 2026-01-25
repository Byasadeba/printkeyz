import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import CategorySlider from "@/components/home/CategorySlider";
import HowItWorks from "@/components/home/HowItWorks";
import ContactBox from "@/components/home/ContactBox";

export default function HomePage() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-5">
        <Hero />
        <CategorySlider />

      <section
      className="
        mx-auto
        px-6
        py-16
        3xl:max-w-7xl
        4k:max-w-[1600px]
      "
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* How It Works takes 3 columns */}
        <div className="lg:col-span-3">
          <HowItWorks />
        </div>

        {/* Contact Us takes 1 column */}
        <div className="lg:col-span-1">
          <ContactBox />
        </div>
      </div>
    </section>
      </div>
    </>
  );
}
