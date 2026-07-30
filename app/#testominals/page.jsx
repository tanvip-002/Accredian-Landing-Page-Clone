"use client";

import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import adp from "../../public/logos/adp.svg";
import bayer from "../../public/logos/bayer.svg";
import reliance from "../../public/logos/rel.png";

const testimonials = [
    {
    logo: adp,
    alt: "ADP Logo",
    text: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
  },
  {
    logo: bayer,
    alt: "Bayer Logo",
    text: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
  },
  {
    logo: reliance,
    alt: "Reliance Logo",
    text: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
  },

];

export default function TestimonialsCarousel() {
  const [page, setPage] = useState(0);

  // show 2 cards per page
  const itemsPerPage = 2;
  const totalPages = 2; // since we only have 3 cards, 2 pages: [0,1] and [1,2]

  const startIndex = page === 0 ? 0 : 1; // first page shows [0,1], second shows [1,2]
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="mx-auto max-w-[1100px] px-8 py-12">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-gray-900 text-center">
        Testimonials from <span className="text-blue-600">Our Partners</span>
      </h2>
      <p className="mt-2 text-gray-600 text-sm text-center">
        What <span className="text-blue-600">Our Clients</span> Are Saying
      </p>

      {/* Testimonials Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-2 items-stretch">
        {visibleTestimonials.map((t, idx) => (
          <TestimonialCard key={idx} logo={t.logo} alt={t.alt} text={t.text} />
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-center items-center gap-4">
        {/* Dots */}
        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`cursor-pointer w-2 h-2 rounded-full ${
                page === i ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
