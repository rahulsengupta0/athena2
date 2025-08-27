"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AthenaDas,
  capaybilities1,
  capaybilities2,
  capaybilities3,
  capaybilities4,
  capaybilities5,
  chelengeBg,
  client03,
  latest2,
} from "@/public";

const features = [
  {
    title: "Complete Content Authoring Tool",
    desc: "Create, edit, and organize course content with real-time previews and a user-friendly interface designed for educators.",
    image: capaybilities1,
  },
  {
    title: "AI-Powered Course Generation",
    desc: "Leverage AI to quickly draft lessons, quizzes, and interactive modules from basic topic outlines.",
    image: AthenaDas,
  },
  {
    title: "Personalized Learning Paths",
    desc: "Smart algorithms adapt course recommendations to learner progress, engagement, and goals.",
    image: capaybilities2,
  },
  {
    title: "Integrated Video & Assessment",
    desc: "Embed HD video, run interactive assessments, and track performance metrics from a central dashboard.",
    image: capaybilities3,
  },
  {
    title: "Collaborative Classroom Tools",
    desc: "Live discussions, peer reviews, and instructor messaging unify your digital classroom experience.",
    image: capaybilities4,
  },
  {
    title: "Certification & Analytics",
    desc: "Issue certificates, measure completion rates, and visualize engagement analytics with easy export options.",
    image: capaybilities5,
  },
  {
    title: "Mobile Learning Support",
    desc: "Responsive layouts and offline sync ensure seamless learning across devices.",
    image: chelengeBg,
  },
  {
    title: "Third-Party Integration",
    desc: "Connect your LMS to Zoom, Google Drive, and more, automating workflows for teachers and students.",
    image: latest2,
  },
];

export default function Features() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      className="relative w-full min-h-[600px] rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #87CEFA 0%, #ffffff 70%)",
      }}
    >
      {/* Subtle wave pattern SVG overlay */}
      <svg
        className="pointer-events-none absolute top-0 left-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#b6d4fe"
          fillOpacity="0.3"
          d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,117.3C672,139,768,149,864,138.7C960,128,1056,96,1152,80C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      {/* Header Section */}
      <div className="relative z-10 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Features
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Next-generation LMS capabilities to engage, empower, and analyze.
        </p>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-8 md:gap-12">
        {/* Left Panel: Thumbnail Grid */}
        <div className="lg:w-2/5">
          <div className="grid grid-cols-4 gap-3 md:gap-4">
            {features.map((feature, idx) => (
              <motion.button
                key={idx}
                className={`w-full aspect-square rounded-lg overflow-hidden cursor-pointer transition-all ${
                  activeIdx === idx
                    ? "ring-3 ring-indigo-500 shadow-lg scale-105 backdrop-blur-sm bg-white/30"
                    : "ring-1 ring-gray-200 hover:ring-2 hover:ring-indigo-300 bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
                aria-label={`View ${feature.title}`}
              >
                <img
                  src={feature.image.src}
                  alt={feature.title}
                  className="object-cover w-full h-full rounded-lg"
                  loading="lazy"
                />
              </motion.button>
            ))}
          </div>
          <div className="mt-6 text-center lg:text-right">
            <a
              href="#"
              className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors group"
            >
              View All Features
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Panel: Big Square Image + Content */}
        <div className="lg:w-3/5 flex flex-col justify-center backdrop-blur-xl bg-white/40 rounded-2xl p-6 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col lg:flex-row items-center gap-8"
            >
              {/* Square Image Container with glassmorphism */}
              <div className="w-full lg:w-2/5 rounded-2xl overflow-hidden shadow-lg border border-white/30">
                <img
                  src={features[activeIdx].image.src}
                  alt={features[activeIdx].title}
                  className="object-cover w-full aspect-square rounded-2xl"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-2xl pointer-events-none">
                  <span className="text-white text-sm font-medium pointer-events-none">
                    Preview of {features[activeIdx].title}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-3/5">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {features[activeIdx].title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {features[activeIdx].desc}
                </p>
                <div className="flex items-center">
                  <div className="flex space-x-2">
                    {features.map((_, idx) => (
                      <button
                        key={idx}
                        className={`w-3 h-3 rounded-full ${
                          activeIdx === idx ? "bg-indigo-600" : "bg-gray-300"
                        }`}
                        onClick={() => setActiveIdx(idx)}
                        aria-label={`View feature ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-3">
                    {activeIdx + 1} of {features.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
