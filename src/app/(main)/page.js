import Image from "next/image";
// import at top of file
import {
  FaLightbulb,
  FaStar,
  FaTools,
  FaUserCog,
  FaRocket,
  FaLeaf,
  FaCheck
} from 'react-icons/fa';

export default function HomePage() {

  const valueItems = [
  { label: 'Creativity', icon: FaLightbulb },
  { label: 'Quality', icon: FaStar },
  { label: 'Craftsmanship', icon: FaTools },
  { label: 'Customization', icon: FaUserCog },
  { label: 'Innovation', icon: FaRocket },
  { label: 'Sustainability', icon: FaLeaf },
];

const steps = [
  { label: 'Design & Ideation', img: '/images/process-design.jpg' },
  { label: 'Product Selection', img: '/images/process-selection.jpg' },
  { label: 'Precision Cutting', img: '/images/process-cutting.jpg' },
  { label: 'Printing & Assembly', img: '/images/process-printing.jpg' },
  { label: 'Finishing', img: '/images/process-finishing.jpg' },
  { label: 'Quality Check', img: '/images/process-quality.jpg' },
];


const qualityItems = [
  { label: 'Precision Engineering', checked: true },
  { label: 'Durable Craftsmanship', checked: true },
  { label: 'Hand-Finished', checked: false },
  { label: 'Eco-Friendly Practices', checked: true },
];


  return (
    <main className="bg-[#f5efe6] text-[#2c2c2c]">

      {/* HERO / OUR STORY */}
      <section
      className="
        bg-[url('/images/wood-bg.jpg')]
        bg-cover bg-center
        md:bg-[length:150%_auto]
        2xl:bg-[length:120%_auto]
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
  <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-[#F5F1EB] drop-shadow-md">
  Our Story
</h1>

  <p className="text-[#E6D3B1] mb-6 leading-relaxed max-w-xl">
    Your bring tiny small passion into tangible imagination into tiny
    pieces, crafted with quality, to every pocket, inspiring
    self-expression one key at a time.
  </p>

  <button className="bg-[#C9A46A] text-white px-6 py-3 rounded-md hover:opacity-90 transition">
    About Us
  </button>
</div>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/story-1.jpg"
            alt="3D printing keychain"
            width={400}
            height={300}
            className="rounded-xl object-cover"
          />
          <Image
            src="/images/story-2.jpg"
            alt="Finished keychains"
            width={400}
            height={300}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </section>

      {/* WOOD BODY BACKGROUND WRAPPER */}
<section className="bg-[url('/images/woodbody.jpg')] bg-cover bg-center bg-no-repeat">
  <div className="bg-white/40 backdrop-blur-sm">

    {/* TOP SECTION */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-6">

      {/* LEFT BIG BOX (TEAM + MISSION) */}
<div className="lg:col-span-3 rounded-3xl bg-[#fffefd] px-6 py-8 md:px-10 md:py-10 lg:px-14 lg:py-12 shadow-sm">
  <div className="grid grid-cols-1 gap-8 lg:gap-12 items-start">
    {/* LEFT – TEAM */}
    <div>
      <h2 className="mb-6 text-3xl md:text-4xl font-semibold text-[#1f1a17]">
        Meet The Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          'Founder & Lead Designer',
          'Operations Manager',
          'Customer Manager',
          'Creative Specialist',
        ].map((role, i) => (
          <div key={role} className="text-center">
            <img
              src={`/images/team-${i + 1}.jpg`}
              alt={role}
              className="
                mx-auto mb-3 h-40 w-80
                object-cover
              "
            />
            <p className="text-sm md:text-base text-[#555]">{role}</p>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT – MISSION */}
    <div className="flex flex-col justify-center lg:pl-4">
      <h2 className="mb-4 text-3xl md:text-4xl font-semibold text-[#1f1a17]">
        Our Mission
      </h2>
      <p className="max-w-md text-base md:text-lg leading-relaxed text-[#4b4641]">
        To bring personalised, high‑quality, inspiring accessories, one
        keychain at a time, making every pocket a little more expressive.
      </p>
    </div>
  </div>
</div>

      {/* RIGHT SMALL BOX (VALUES) */}
       <div className="bg-white/95 rounded-2xl p-6 shadow">
    <h2 className="text-xl font-semibold mb-4">Our Values</h2>
    <ul className="space-y-3 text-gray-600">
      {valueItems.map(({ label, icon: Icon }) => (
        <li key={label} className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff3e6]">
            <Icon className="text-[#d38b5d]" size={14} />
          </span>
          <span>{label}</span>
        </li>
      ))}
    </ul>
  </div>
    </section>

    {/* BOTTOM SECTION */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 grid grid-cols-1 lg:grid-cols-4 gap-6">

      {/* PROCESS (BIG BOX) */}
      <div className="lg:col-span-3 bg-white/95 rounded-2xl p-6 md:p-8 shadow">
  <h2 className="text-xl font-semibold mb-6">Manufacturing Process</h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
    {steps.map((step, i) => (
      <div key={step.label}>
        <div className="w-14 h-14 mx-auto rounded-full border-2 border-[#d38b5d] flex items-center justify-center mb-2 bg-white overflow-hidden">
          <img
            src={step.img}
            alt={step.label}
            className="h-10 w-10 object-contain"
          />
        </div>
        <p className="text-xs text-gray-700">{step.label}</p>
      </div>
    ))}
  </div>
</div>

      {/* QUALITY (SMALL BOX) */}
      <div className="bg-white/95 rounded-2xl p-6 shadow">
      <h2 className="text-xl font-semibold mb-4">Quality Standards</h2>
      <ul className="space-y-3 text-gray-600">
        {qualityItems.map((item) => (
          <li key={item.label} className="flex items-center gap-3">
            <span
              className={`
                flex h-5 w-5 items-center justify-center rounded-[4px]
                border
                ${item.checked ? 'border-[#d38b5d] bg-[#ffe9d4]' : 'border-gray-300 bg-white'}
              `}
            >
              {item.checked && <FaCheck className="text-[#d38b5d] text-[10px]" />}
            </span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
    </section>

  </div>
</section>


      
    </main>
  );
}
