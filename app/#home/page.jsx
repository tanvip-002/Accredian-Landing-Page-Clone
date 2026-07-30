"use client"

import Image from "next/image";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import heroImage from "../../public/images/hero.webp";
import EnquireModal from "../components/EnquireModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
  id="hero"
  className="mx-12 mt-10 max-w-[90rem] h-110 rounded-3xl border border-[#e5e7eb] bg-[#eef5ff] px-16 pt-6 shadow-[0_-2px_10px_rgba(0,0,0,0.08)]"
>

      <div className="flex flex-col md:flex-row h-full items-stretch gap-10">

        {/* Left Content */}
          <div className="md:w-1/2 flex flex-col justify-between w-full">
          <div>
            <h1 className="heading">
              <span className="text-black">Next-Gen </span>
              <span className="text-[#2F80ED]">Expertise</span>
              <br />
              <span className="text-black">For Your </span>
              <span className="text-[#2F80ED]">Enterprise</span>
            </h1>

            <p className="mt-5 text-xl leading-8 text-black">
              Cultivate high-performance
              <br />
              teams through expert learning.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {[
              "Tailored Solutions",
              "Industry Insights",
              "Expert Guidance",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle
                  size={20}
                  className="text-green-500"
                  strokeWidth={2.5}
                />
                <span className="text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>

          <button className="w-fit rounded-xl bg-[#2F80ED] px-8 py-3 text-lg font-medium text-white shadow-lg transition hover:bg-[#2468c9] cursor-pointer mb-5"
          onClick={() => setIsModalOpen(true)}>
            Enquire Now
          </button>
           <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>

{/* Right Image */}
  <div className="md:w-1/2 relative flex justify-center w-full">
    <Image
      src={heroImage}
      alt="Hero Image"
      className="absolute bottom-0 max-h-[390px] w-auto object-contain"
      priority
    />
  </div>


      </div>
    </section>
  );
}