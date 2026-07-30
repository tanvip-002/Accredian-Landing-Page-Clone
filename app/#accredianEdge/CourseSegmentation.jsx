import Image from "next/image";
import image2 from "../../public/images/digital-transformation-v2.webp";
import image1 from "../../public/images/project-management-v2.webp";
import image3 from "../../public/images/data-science-v2.webp";
import image4 from "../../public/images/senior-management-v2.webp";
const courses = [
  {
    title: "Program Specific",
    description: "Certificate, Executive, Post Graduate Certificate",
    image: image1,
  },
  {
    title: "Industry Specific",
    description:
      "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    image: image2,
  },
  {
    title: "Topic Specific",
    description:
      "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    image: image3,
  },
  {
    title: "Level Specific",
    description:
      "Senior Leadership, Mid-Career Professionals, Freshers",
    image: image4,
  },
];

export default function CourseSegmentation() {
  return (
    <section className="mx-auto max-w-[1000px] px-8 py-20">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[40px] font-semibold">
          Tailored{" "}
          <span className="text-[#2F80ED]">
            Course Segmentation
          </span>
        </h2>

        <p className="mt-3 text-[15px] text-[#4B5563]">
          Explore{" "}
          <span className="text-[#2F80ED]">
            Custom-fit Courses
          </span>{" "}
          Designed to Address Every Professional Focus
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-14 grid max-w-[1180px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <div
            key={course.title}
            className="overflow-hidden rounded-lg border border-[#E6E6E6] bg-white shadow-[0_5px_18px_rgba(0,0,0,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-lg w-55" 
          >
            {/* Image */}
            <div className="relative h-[150px] w-full">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="px-5 py-3 text-center mt-1">
              <h3 className="text-[18px] font-semibold text-[#2F80ED]">
                {course.title}
              </h3>

              <p className="text-[11px] leading-5 text-black mt-1">
                {course.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}