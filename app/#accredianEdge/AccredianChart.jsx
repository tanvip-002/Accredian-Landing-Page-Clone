import React from 'react'
import Image from "next/image";
import AccredianEdgeImage from "../../public/images/accredian-edge.svg";

const AccredianChart = () => {
  return (
    <section className="mx-15 max-w-[1440px] px-8 py-20">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[35px] font-semibold">
          The <span className="text-[#2F80ED]">Accredian Edge</span>
        </h2>

        <p className="mt-3 text-[15px] text-[#4B5563] font-semibold">
          Key Aspects of{" "}
          <span className="text-[#2F80ED]">
            Our Strategic Training
          </span>
        </p>
      </div>

      {/* Timeline */}
      <div className="mt-10 flex justify-center">
        <Image
          src={AccredianEdgeImage}
          alt="Accredian Edge"
          width={1300}
          height={520}
          className="h-auto w-full max-w-[1300px]"
          priority
        />
      </div>
    </section>
  )
}

export default AccredianChart