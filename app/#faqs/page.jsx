// components/FAQ.jsx
"use client";

import { useState } from "react";
import { HiChevronUp, HiChevronDown } from "react-icons/hi2";
import EnquireModal from "../components/EnquireModal";
const faqData = {
  "About the Course": [
    {
      question: "What types of corporate training programs does Accredian offer?",
      answer:
        "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
    },
    {
      question: "What domain specializations are available?",
      answer:
        "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
    },
  ],
  "About the Delivery": [
    {
      question: "Can the courses be customized for specific industries or teams?",
      answer:
        "Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization's goals.",
    },
    {
      question: "Who are the instructors for these programs?",
      answer:
        "Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights.",
    },
    {
      question: "What formats are the programs delivered in?  ",
      answer:
        "Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team's preferences and requirements.",
    },
  ],
  Miscellaneous: [
    {
      question: "What is the ideal team size for corporate training?",
      answer:
        "Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts.",
    },
    {
      question: "How do we get started with Accredian?",
      answer:
        "Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process-from skill gap analysis to a custom program tailored to your needs.",
    },
  ],
};

export default function FAQ() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("About the Course");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="mx-auto max-w-[1100px] px-8 py-12">
      {/* Heading - left aligned */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-10">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Side: Category Buttons */}
        <div className="flex flex-col space-y-4 md:col-span-1">
          {Object.keys(faqData).map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null);
              }}
              className={`px-4 py-3 h-13 rounded-sm text-sm font-medium text-left border cursor-pointer transition transform
                ${
                  activeCategory === category
                    ? "bg-white text-blue-600 border-gray-300 scale-105 shadow-sm"
                    : "bg-transparent text-gray-600 border-gray-600 hover:bg-gray-100"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Right Side: Questions with dropdown answers */}
<div className="md:col-span-3 space-y-4">
  {faqData[activeCategory].map((item, idx) => (
    <div
      key={idx}
      className="rounded-md p-2 cursor-pointer"
      onClick={() => toggleQuestion(idx)}
    >
      <p
        className={`text-sm font-semibold flex justify-between items-center transition-colors
          ${openIndex === idx ? "text-blue-600" : "text-gray-800"}`}
      >
        {item.question}
        <span
          className={`ml-2 font-bold ${
            openIndex === idx ? "text-blue-600" : "text-gray-800"
          }`}
        >
          {openIndex === idx ? <HiChevronUp /> : <HiChevronDown />}
        </span>
      </p>
      {openIndex === idx && (
        <p className="mt-2 mx-2 text-sm text-gray-600">{item.answer}</p>
      )}
    </div>
  ))}
</div>

      </div>

      {/* Enquire Now Button - centered across full width */}
      <div className="mt-6 flex justify-center items-center">
        <button className="h-10 w-31 px-3 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition flex items-center justify-center text-[12px] font-semibold cursor-pointer"
          onClick={() => setIsModalOpen(true)}>
          Enquire Now
        </button>
        <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  );
}
