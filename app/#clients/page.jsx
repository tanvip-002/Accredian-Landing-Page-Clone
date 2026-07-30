import Image from "next/image";
import rel from "../../public/logos/rel.png"
import ibm from "../../public/logos/ibm.png"
import hcl from "../../public/logos/hcl.png"
import crif from "../../public/logos/crif.png"
import bayer from "../../public/logos/bayer.svg"
import adp from "../../public/logos/adp.svg"

const clients = [
  {
    name: "Reliance",
    logo: rel,
    width: 96,
    height: 96,
  },
  {
    name: "HCL",
    logo: hcl,
    width: 144,
    height: 160,
  },
  {
    name: "IBM",
    logo: ibm,
    width: 96,
    height: 96,
  },
  {
    name: "CRIF",
    logo:  crif ,
    width: 96,
    height: 96,
  },
  {
    name: "ADP",
    logo: adp ,
    width: 96,
    height: 96,
  },
  {
    name: "Bayer",
    logo:  bayer ,
    width: 96,
    height: 96,
  },
];

export default function Clients() {
  return (
    <section className="mx-20 max-w-[1440px] px-8 py-10">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[35px] font-semibold tracking-[-0.5px] text-black">
          Our Proven{" "}
          <span className="text-[#2F80ED]">Partnerships</span>
        </h2>

        <p className="mt-3 text-[15px] text-[#4B5563]">
          Successful Collaborations With the{" "}
          <span className="text-[#2F80ED]">
            Industry's Best
          </span>
        </p>
      </div>

      {/* Logos */}
      <div className="mt-20 flex flex-wrap items-center justify-between gap-10">
        {clients.map((client) => (
          <div
            key={client.name}
            className="flex h-[90px] items-center justify-center"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={client.width}
              height={client.height}
              className="object-contain transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}