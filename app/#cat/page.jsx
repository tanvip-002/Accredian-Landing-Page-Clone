// components/CATFramework.js
import Image from "next/image";
import catImage from "../../public/images/cat-framework.svg";
export default function CATFramework() {
  return (
    <section className="mt-20 mx-auto max-w-[980px] rounded-xl bg-[#F9FAFB] px-8 py-10 text-center mb-4">
      <h2 className="text-2xl font-bold text-gray-900">
        The <span className="text-blue-600">CAT Framework</span>
      </h2>
      <p className="mt-2 text-gray-600 text-sm">
        Our Proven Approach to <span className="text-blue-600">Learning Excellence</span>
      </p>

      <div className="mt-8 flex justify-center">
        <Image
          src={catImage}
          alt="CAT Framework Chart"
          width={850}
          height={400}
          className="h-auto max-w-full"
        />
      </div>
    </section>
  );
}
