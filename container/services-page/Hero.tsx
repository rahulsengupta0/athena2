"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { staggerChildren: 0.2, when: "beforeChildren", duration: 0.6 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.05, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)" },
};

const buttonVariants = {
  hover: { scale: 1.1, transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

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
        autoPlay loop muted playsInline
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none z-0"
      >
        <source src="/herovideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Light blue overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-300 opacity-30 z-5 pointer-events-none"></div>

      {/* Content Container */}
      <motion.div
        className="w-full flex flex-col justify-between relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="w-full flex flex-col">
          {/* Heading */}
          <motion.div
            className="w-full margin padding-x"
            variants={cardVariants}
          >
            <h1 className="heading tracking-[-1.3px] text-white font-semibold font-FoundersGrotesk uppercase">
              Services
            </h1>
          </motion.div>

          {/* Sub-heading / Intro */}
          <motion.div
            className="w-full border-t border-[#ffffff66]"
            variants={cardVariants}
          >
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
          </motion.div>

          {/* Process Card Slider */}
          <motion.div
            className="w-full flex justify-end items-center py-12"
            variants={cardVariants}
          >
            <motion.div
              className="rounded-xl shadow-xl flex flex-col md:flex-row items-stretch w-full max-w-3xl relative p-10 border border-gray-300"
              style={{ backgroundColor: "rgba(239, 237, 236, 0.6)" }}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              {/* Left Arrow */}
              <motion.button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition"
                aria-label="Previous"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                &#8592;
              </motion.button>

              {/* Right Arrow */}
              <motion.button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition"
                aria-label="Next"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                &#8594;
              </motion.button>

              {/* Card Content */}
              <div className="flex flex-1 min-w-0 items-center gap-8">
                {/* Splash image */}
                <motion.div
                  className="w-44 h-28 rounded-lg overflow-hidden flex-shrink-0 shadow-md"
                  layout
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                  <Image
                    src={img}
                    alt={title}
                    width={280}
                    height={180}
                    className="object-cover w-full h-full"
                    priority
                  />
                </motion.div>

                <div className="flex-1">
                  <div className="flex flex-col gap-4">
                    <motion.p
                      className="font-bold text-2xl text-gray-900"
                      layout
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    >
                      {title}
                    </motion.p>

                    {showReview ? (
                      <motion.p
                        className="text-md text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {review}
                      </motion.p>
                    ) : (
                      <motion.button
                        className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-50 transition"
                        onClick={() => setShowReview(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Read&nbsp; <span>&#8594;</span>
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>

              {/* Step Indicator */}
              <motion.div
                className="absolute bottom-6 right-8 text-sm text-gray-600"
                layout
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                {String(currIdx + 1).padStart(2, "0")} / {String(processCards.length).padStart(2, "0")}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
