import Image from "next/image";
import { useState } from "react";
import { servicebg } from "@/public"; // Keep for fallback if needed

const processCards = [
  {
    title: "Learning goals first",
    review:
      "What knowledge or skill should be gained? Understanding your learning objectives helps us tailor courses and modules that deliver measurable outcomes.",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Learners at the center",
    review:
      "Who are the learners? What motivates them? Why does it matter to them? Athena LMS puts learner engagement at the core, ensuring a personalized and impactful experience.",
    img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Context shapes delivery",
    review:
      "Whether in classrooms, corporate training, or online courses— Athena LMS adapts to your context. From live sessions to self-paced learning, we ensure flexibility for every learning environment.",
    img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Hero() {
  const [currIdx, setCurrIdx] = useState(0);
  const [showReview, setShowReview] = useState(false);
  const { title, review, img } = processCards[currIdx];

  const handleNext = () => {
    setShowReview(false);
    setCurrIdx((prev) => (prev + 1) % processCards.length);
  };
  const handlePrev = () => {
    setShowReview(false);
    setCurrIdx((prev) => (prev - 1 + processCards.length) % processCards.length);
  };

  return (
    <section className="w-full min-h-screen relative overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none z-0"
      >
        <source src="/herovideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Light blue overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-300 opacity-30 z-5 pointer-events-none"></div>

      {/* Content */}
      <div className="w-full flex flex-col justify-between relative z-10">
        <div className="w-full flex flex-col">
          {/* Heading */}
          <div className="w-full margin padding-x">
            <div>
              <h1 className="heading tracking-[-1.3px] text-white font-semibold font-FoundersGrotesk uppercase">
                Services
              </h1>
            </div>
          </div>
          {/* Sub-heading / Intro */}
          <div className="w-full border-t border-[#ffffff66]">
            <p className="w-[80%] sm:w-full xm:w-full sub-heading font-normal padding-x font-NeueMontreal text-white padding-y">
              Empowering institutions and organizations with&nbsp;
              <span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
                smart learning&nbsp;
              </span>
              and&nbsp;
              <span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
                seamless management&nbsp;
              </span>
              to make education more engaging, accessible, and impactful.
            </p>
          </div>

          {/* Process Card Slider aligned to right with updated styling */}
          <div className="w-full flex justify-end items-center py-12">
            <div
  className="rounded-xl shadow-xl flex flex-col md:flex-row items-stretch w-full max-w-3xl relative p-10 border border-gray-300"
  style={{ backgroundColor: "rgba(239, 237, 236, 0.6)" }} // semi-transparent #efedec with 60% opacity
>
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition"
                aria-label="Previous"
              >
                &#8592;
              </button>
              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition"
                aria-label="Next"
              >
                &#8594;
              </button>

              {/* Card Content */}
              <div className="flex flex-1 min-w-0 items-center gap-8">
                {/* Splash image */}
                <div className="w-44 h-28 rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                  <Image
                    src={img}
                    alt={title}
                    width={280}
                    height={180}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-4">
                    <p className="font-bold text-2xl text-gray-900">{title}</p>
                    {showReview ? (
                      <p className="text-md text-gray-700">{review}</p>
                    ) : (
                      <button
                        className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-50 transition"
                        onClick={() => setShowReview(true)}
                      >
                        Read&nbsp; <span>&#8594;</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              {/* Step Indicator */}
              <div className="absolute bottom-6 right-8 text-sm text-gray-600">
                {String(currIdx + 1).padStart(2, "0")} / {String(processCards.length).padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
