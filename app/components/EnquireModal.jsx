// components/EnquireModal.jsx
"use client";

import Image from "next/image";
import officeImg from "../../public/images/officeImg.webp"; // replace with your actual image

export default function EnquireModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
  className="fixed inset-0 flex items-center justify-center z-50"
  style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
>



      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl flex relative scale-75 md:scale-85">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 cursor-pointer"  
        >
          ✕
        </button>

        {/* Left side image */}
        <div className="w-1/2 hidden md:block">
          <Image
            src={officeImg}
            alt="Corporate Team"
            className="h-full w-full object-cover rounded-l-lg"
          />
        </div>

        {/* Right side form */}
        <div className="w-full md:w-1/2 p-5 md:p-6">
          <h2 className="text-lg md:text-xl font-bold text-blue-600 mb-4">Enquire Now</h2>

          <form className="space-y-2.5 md:space-y-3">
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-600 text-sm"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-600 text-sm"
            />

            {/* Country code + phone */}
            <div className="flex">
              <span className="flex items-center px-2 border border-gray-300 rounded-l bg-gray-100 text-xs md:text-sm">
                🇮🇳 +91
              </span>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="flex-1 border border-gray-300 p-2 rounded-r focus:ring-2 focus:ring-blue-600 text-sm"
              />
            </div>

            <input
              type="text"
              placeholder="Enter Company Name"
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-600 text-sm"
            />

            <select className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-600 text-sm">
              <option>Select Domain</option>
              <option>Leadership Development</option>
              <option>Tech & Data</option>
              <option>Fintech</option>
              <option>Digital Business</option>
              <option>Product Innovation</option>
              <option>Operations Management</option>
              <option>Generative AI</option>
            </select>

            <input
              type="number"
              placeholder="Enter No. of Candidates"
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-600 text-sm"
            />

            <select className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-600 text-sm">
              <option>Select Mode of Delivery *</option>
              <option>Online</option>
              <option>Offline</option>
              <option>Hybrid</option>
              <option>On-Demand</option>
            </select>

            <input
              type="text"
              placeholder="Eg: Gurgaon, Delhi, India"
              className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-600 text-sm"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition text-sm cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
