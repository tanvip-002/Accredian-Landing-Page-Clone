import {
  HiOutlineLightBulb,
  HiOutlineUserGroup,
} from "react-icons/hi";

import {
  FaBrain,
  FaChartBar,
  FaGlobe,
} from "react-icons/fa";

import { FiSettings, FiCreditCard } from "react-icons/fi";

const domains = [
  {
    title: "Product & Innovation Hub",
    icon: <HiOutlineLightBulb size={52} />,
  },
  {
    title: "Gen-AI Mastery",
    icon: <FaBrain size={50} />,
  },
  {
    title: "Leadership Elevation",
    icon: <HiOutlineUserGroup size={52} />,
  },
  {
    title: "Tech & Data Insights",
    icon: <FaChartBar size={48} />,
  },
  {
    title: "Operations Excellence",
    icon: <FiSettings size={50} />,
  },
  {
    title: "Digital Enterprise",
    icon: <FaGlobe size={48} />,
  },
  {
    title: "Fintech Innovation Lab",
    icon: <FiCreditCard size={50} />,
  },
];

export default function DomainExpertise() {
  return (
    <section className="mx-auto max-w-[880px] px-8 py-10">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[40px] font-semibold">
          Our <span className="text-[#2F80ED]">Domain Expertise</span>
        </h2>

        <p className="mt-3 text-[15px] text-[#4B5563]">
          <span className="text-[#2F80ED]">
            Specialized Programs
          </span>{" "}
          Designed to Fuel Innovation
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-14 grid max-w-[1040px] grid-cols-1 gap-5 md:grid-cols-3">
        {domains.slice(0, 6).map((domain) => (
          <div
            key={domain.title}
            className="flex h-[108px] flex-col items-center justify-center rounded-2xl border border-[#E8E8E8] bg-white shadow-[0_4px_18px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-[#2F80ED]">{domain.icon}</div>

            <h3 className="mt-3 text-[13px] font-semibold text-[#111827]">
              {domain.title}
            </h3>
          </div>
        ))}

        {/* Last card centered */}
        <div className="md:col-span-3 flex justify-center">
          <div className="flex h-[108px] w-full max-w-[260px] flex-col items-center justify-center rounded-2xl border border-[#E8E8E8] bg-white shadow-[0_4px_18px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="text-[#2F80ED]">
              {domains[6].icon}
            </div>

            <h3 className="mt-3 text-[13px] font-semibold text-[#111827]">
              {domains[6].title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}