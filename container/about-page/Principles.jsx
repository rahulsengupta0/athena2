import Image from "next/image";
import { principles1, principles2 } from "@/public";
import { FaArrowRight } from "react-icons/fa";

export default function Principles() {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-b from-[#EAF6FB] to-[#F5F9FC] py-16 md:py-24 rounded-t-[50px]">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h4 className="text-primary font-medium uppercase tracking-widest text-sm mb-4">
            Principles & Values
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-NeueMontreal text-primary-dark leading-tight">
            The foundation of Athena LMS
          </h1>
          <p className="mt-4 text-lg text-secondry/70 max-w-2xl mx-auto">
            Two timeless principles that guide our learning philosophy — 
            making education transformative and deeply insightful.
          </p>
        </div>

        {/* Principles Grid with Interactive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 border-t border-gray-300 pt-16">
          {/* Principle 1 */}
          <div className="group relative overflow-hidden rounded-[25px] bg-white shadow-md transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            {/* Image with Parallax Effect */}
            <div className="overflow-hidden">
              <Image
                src={principles1}
                alt="Learning should spark transformation"
                className="w-full rounded-[25px] transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end text-white transition-all duration-500 transform translate-y-full group-hover:translate-y-0">
              <h2 className="text-2xl font-bold font-NeueMontreal mb-2">
                Learning with a purpose
              </h2>
              <p className="text-lg mb-4">
                Learning should spark transformation — shifting perception,
                building clarity, and empowering learners with practical knowledge.
              </p>
              <a
                href="#"
                className="flex items-center gap-2 text-white font-medium group-hover:translate-x-1 transition-transform duration-300"
              >
                Discover our journey <FaArrowRight />
              </a>
            </div>
          </div>

          {/* Principle 2 */}
          <div className="group relative overflow-hidden rounded-[25px] bg-white shadow-md transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            {/* Image with Parallax Effect */}
            <div className="overflow-hidden">
              <Image
                src={principles2}
                alt="Great learning reveals the unseen"
                className="w-full rounded-[25px] transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end text-white transition-all duration-500 transform translate-y-full group-hover:translate-y-0">
              <h2 className="text-2xl font-bold font-NeueMontreal mb-2">
                Revealing the unseen
              </h2>
              <p className="text-lg mb-4">
                Great learning uncovers what's hidden — guiding focus,
                sparking curiosity, and delivering lasting understanding.
              </p>
              <a
                href="#"
                className="flex items-center gap-2 text-white font-medium group-hover:translate-x-1 transition-transform duration-300"
              >
                Explore our approach <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}