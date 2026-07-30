// components/TestimonialCard.jsx
"use client";

import Image from "next/image";

export default function TestimonialCard({ logo, alt, text }) {
  return (
    <div className="bg-white border border-gray-300 rounded-xl px-10 flex flex-col w-full min-h-[200px] pb-6 pt-2">
      {/* Logo row - fixed height */}
      <div className="h-16 mb-2 flex items-center">
        <Image src={logo} alt={alt} width={45} height={45} className="object-contain" />
      </div>

      {/* Text block - consistent placement */}
      <p className="text-neutral-500 text-base font-light flex-grow text-[11px]">
        {text}
      </p>
    </div>
  );
}
