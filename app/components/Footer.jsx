// components/Footer.jsx
"use client";
import {useState} from "react";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../public/logos/logo.webp"; // replace with actual logo path
import EnquireModal from "./EnquireModal";

export default function Footer() {
   const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <footer className="border-gray-300">
      {/* Top Section: Logo + tagline + social icons + Enquire button */}
      <div className="mx-auto max-w-[1100px] px-3 py-8 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left side: Logo + tagline + social icons */}
        <div>
          <Image src={logo} alt="Accredian Logo" width={110} height={50} />

          {/* Social Icons */}
          <div className="mt-2.5 flex gap-4 text-gray-600">
            <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-600"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-600"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-600"><FaYoutube /></a>
          </div>
        </div>

        {/* Right side: Enquire Now */}
        <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end">
          <button className="px-5 py-1.75 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition text-[14px] cursor-pointer"
          onClick={() => setIsModalOpen(true)}>
            Enquire Now
          </button>
          <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          <p className="mt-2 text-[11px] text-gray-700">Speak with our Advisor</p>
        </div>
      </div>

      {/* Divider line */}
      <hr className="border-t border-gray-600 mx-auto max-w-[1075px]" />

      {/* Middle Section: Links + Contact */}
      <div className="mx-auto max-w-[1100px] px-3 py-5 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Accredian Links */}
        <div>
          <h3 className="text-sm mb-2 font-semibold text-gray-900">Accredian</h3>
          <ul className="space-y-2 text-[12px] text-gray-700">
            <li><a href="#" className="hover:text-blue-600">About</a></li>
            <li><a href="#" className="hover:text-blue-600">Blog</a></li>
            <li><a href="#" className="hover:text-blue-600">Why Accredian</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col items-start w-100">
          <h3 className="text-sm mb-2 font-semibold text-gray-900">Contact Us</h3>
          <ul className="space-y-2 text-[12px] text-gray-700">
          <p className="text-[12px] text-gray-700 mt-0.5">Email us: enterprise@accredian.com</p>
          <p className="text-[12px] text-gray-700 mt-0.5">
            Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
          </p>
          </ul>
        </div>
      </div>

      <hr className="border-t border-gray-600 mx-auto max-w-[1075px]" />

      {/* Bottom Section: Copyright */}
      <div className="text-center py-3 pb-8 text-[12px] text-gray-700 font-semibold">
        © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}
