const stats = [
  {
    value: "10K+",
    text: "Professionals Trained For Exceptional Career Success",
  },
  {
    value: "200+",
    text: "Sessions Delivered With Unmatched Learning Excellence",
  },
  {
    value: "5K+",
    text: "Active Learners Engaged In Dynamic Courses",
  },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-[940px] px-8 py-20">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[35px] font-semibold leading-none tracking-[-0.5px]">
          Our <span className="text-[#2F80ED]">Track Record</span>
        </h2>

        <p className="mt-3 text-[15px] text-[#4B5563]">
          The Numbers Behind{" "}
          <span className="text-[#2F80ED]">Our Success</span>
        </p>
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={stat.value}
            className={`flex flex-col items-center px-10 text-center ${
              index !== stats.length - 1
                ? "md:border-r md:border-[#E6E6E6]"
                : ""
            }`}
          >
            {/* Pill */}
            <div className="flex h-[44px] w-[108px] items-center justify-center rounded-full bg-[#DCEBFF]">
              <span className="text-[18px] font-semibold text-[#2F80ED]">
                {stat.value}
              </span>
            </div>

            {/* Description */}
            <p className="mt-5 max-w-[285px] text-[12px] font-medium leading-8 text-black">
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}