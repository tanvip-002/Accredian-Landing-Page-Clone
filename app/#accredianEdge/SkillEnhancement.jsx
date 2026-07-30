import Image from "next/image";
import {
  HiOutlineComputerDesktop,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
} from "react-icons/hi2";
import { FiMonitor } from "react-icons/fi";
import image from "../../public/images/imagehuman.png";

const audience = [
  {
    title: "Tech Professionals",
    description: "Enhance expertise, embrace tech, drive innovation.",
    icon: <FiMonitor size={32} className="text-white" />,
  },
  {
    title: "Non-Tech Professionals",
    description: "Adapt digitally, collaborate in tech environments.",
    icon: <HiOutlineComputerDesktop size={32} className="text-white" />,
  },
  {
    title: "Emerging Professionals",
    description: "Develop powerful skills for rapid career growth.",
    icon: <HiOutlineAcademicCap size={32} className="text-white" />,
  },
  {
    title: "Senior Professionals",
    description: "Strengthen leadership, enhance strategic decisions.",
    icon: <HiOutlineBriefcase size={32} className="text-white" />,
  },
];

export default function SkillEnhancement() {
  return (
    <section className="mx-auto max-w-[980px] rounded-xl bg-[#2F80ED] px-8 pt-6 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-[15px] font-medium">Who Should Join?</p>
            <h2 className="mt-1 text-[28px] lg:text-[34px] font-semibold leading-snug">
              Strategic Skill Enhancement
            </h2>
          </div>

          <div className="mt-5 flex justify-center lg:justify-start">
            <Image
              src={image}
              alt="Professionals"
              width={300}
              height={220}
              className="h-auto max-w-full"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-8">
          {audience.map((item) => (
            <div key={item.title} className="flex flex-col">
              <div className="mb-2">{item.icon}</div>
              <h3 className="text-[15px] font-semibold">{item.title}</h3>
              <p className="mt-1 text-[12px] leading-6 text-blue-100">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
