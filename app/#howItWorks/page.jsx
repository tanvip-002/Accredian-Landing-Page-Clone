// components/HowItWorks.jsx
import {  MdOutlinePlayCircle } from "react-icons/md";
import { HiOutlineChartBar, HiOutlineClipboardList } from "react-icons/hi";


const steps = [
  {
    number: "1",
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs.",
    icon: <HiOutlineChartBar size={28} className="text-white" />,
  },
  {
    number: "2",
    title: "Customized Training Plan",
    description: "Create a tailored roadmap addressing organizational goals.",
    icon: <HiOutlineClipboardList size={28} className="text-white" />,
  },
  {
    number: "3",
    title: "Flexible Program Delivery",
    description: "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: <MdOutlinePlayCircle size={28} className="text-white" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-[800px] px-8 py-12 text-center">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-gray-900">
        How We <span className="text-blue-600">Deliver Results</span> That Matter?
      </h2>
      <p className="mt-2 text-gray-600 text-sm">
        A Structured Three-Step Approach to <span className="text-blue-600">Skill Development</span>
      </p>

      {/* Steps */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div key={step.title} className="relative flex flex-col items-center">
            {/* Blue base rectangle (shorter height) */}
            <div className="w-full h-30 bg-blue-600 rounded-lg"></div>

            {/* White block overlay */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[98%] h-45 -translate-y-6 bg-[#EFF6FF] rounded-lg shadow-md px-2 pt-2 pb-4 flex flex-col items-center justify-center border border-[#99C8FD]">
              {/* Step number badge */}
              <span className="absolute top-4 left-4 flex items-center justify-center w-5 h-5 rounded-full bg-white text-blue-600 text-sm font-bold border border-[#99C8FD]">
                {step.number}
              </span>

              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 mb-4">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-[15px] font-semibold text-gray-900">{step.title}</h3>

              {/* Description */}
              <p className="mt-2 text-[10px] text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
