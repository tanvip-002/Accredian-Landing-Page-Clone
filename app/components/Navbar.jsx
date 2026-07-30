// components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logos/logo.webp";

const sections = [
     
  { path: "#home", label: "Home" },   
  { path: "#stats", label: "Stats" },
  { path: "#clients", label: "Clients" },
  { path: "#edge", label: "Accredian Edge" },
  { path: "#cat", label: "CAT" },
  { path: "#how", label: "How It Works" },
  { path: "#faq", label: "FAQs" },
  { path: "#testimonials", label: "Testimonials" },
];



export default function Navbar() {
  const [active, setActive] = useState("/");

  return (
    <nav className="fixed top-0 left-0 w-full shadow-[0_2px_20px_rgba(0,0,0,0.14)] bg-white z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-4 h-18">
        <Image src={logo} alt="Accredian" width={100} height={30} />

        <ul className="hidden gap-8 md:flex text-black text-sm">
          {sections.map((s) => (
            <li key={s.path}>
              <Link
                href={s.path}
                className={`pb-1 transition-colors ${
                  active === s.path
                    ? "border-b-2 border-blue-600 font-semibold text-blue-600"
                    : "hover:text-blue-600"
                }`}
                onClick={() => setActive(s.path)}
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
