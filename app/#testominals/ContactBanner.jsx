// components/ContactBanner.jsx
"use client";

import { HiOutlinePhone } from "react-icons/hi";
import EnquireModal from "../components/EnquireModal";
import {useState} from "react";

export default function ContactBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="mx-auto max-w-[1000px] px-8 py-10">
      <div className="bg-blue-600 text-white rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between px-8 py-13 min-h-[100px]">
        {/* Left side: Icon + Text */}
        <div className="flex items-center gap-4">
          <div className="bg-white text-blue-600 rounded-md p-3 border-blue-300 border-4">
            <HiOutlinePhone size={28} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Want to Learn More About Our Training Solutions?
            </h3>
            <p className="text-sm mt-1">
              Get Expert Guidance for Your Team's Success!
            </p>
          </div>
        </div>

        {/* Right side: Button */}
        <div className="mt-6 md:mt-0">
          <button
            className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-100 transition flex items-center gap-2 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            Contact Us <span>→</span>
          </button>
        </div>
      </div>

      {/* Render modal OUTSIDE the flex container */}
      <EnquireModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

