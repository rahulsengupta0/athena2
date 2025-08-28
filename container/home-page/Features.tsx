"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  AthenaDas,
  capaybilities1,
  capaybilities2,
  capaybilities3,
  capaybilities4,
  capaybilities5,
  chelengeBg,
  latest2,
} from "@/public";

const features = [
  {
    title: "Content Authoring & Learning Design Studio",
    desc: "Create, edit, and organize course content with advanced tools that empower educators to build engaging learning journeys.",
    image: capaybilities1,
  },
  {
    title: "Collaborative Communities & Intelligent Communication Hub",
    desc: "Connect learners and instructors seamlessly with messaging, discussion forums, and collaborative study tools.",
    image: AthenaDas,
  },
  {
    title: "AI-Powered Content Personalization & Co-Creation",
    desc: "Leverage AI to tailor learning materials for each student and enable collaborative content creation.",
    image: capaybilities2,
  },
  {
    title: "Comprehensive Learning Analytics & Actionable Insights",
    desc: "Gain deep understanding of learner progress and engagement with insightful dashboards and reports.",
    image: capaybilities3,
  },
  {
    title: "All-in-One SaaS Ecosystem for Learning & Growth",
    desc: "Manage courses, users, payments, and more from a unified cloud-based platform.",
    image: capaybilities4,
  },
  {
    title: "Interactive Assessments & Smart Evaluation Engine",
    desc: "Create dynamic quizzes and assignments with automated grading to boost learner success.",
    image: capaybilities5,
  },
  {
    title: "Mobile Learning Support",
    desc: "Seamless learning across devices with offline access and responsive design.",
    image: chelengeBg,
  },
  {
    title: "Third-Party Integration",
    desc: "Connect your LMS to Zoom, Google Drive, and more, automating workflows for teachers and students.",
    image: latest2,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const thumbnailVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.6
    }
  }
};

export default function Features() {
  const [activeIdx, setActiveIdx] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative w-full min-h-[600px] rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #87CEFA 0%, #ffffff 70%)",
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

      {/* Header Section - Enhanced */}
      <div className="relative z-10 text-center mb-8 md:mb-12">
        <motion.div
          variants={itemVariants}
          className="mb-4"
        >
          <motion.span 
            className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-3"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            POWERFUL CAPABILITIES
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Transformative Learning <span className="text-indigo-600">Experiences</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-indigo-500 mx-auto mb-4 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : { width: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto"
        >
          <motion.p 
            className="text-xl md:text-2xl font-semibold text-gray-800 mb-3"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            All-in-One SaaS Ecosystem for Learning & Growth
          </motion.p>
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Next-generation LMS capabilities designed to <span className="font-medium text-indigo-600">engage</span> learners, <span className="font-medium text-indigo-600">empower</span> educators, and <span className="font-medium text-indigo-600">analyze</span> outcomes.
          </motion.p>
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-8 md:gap-12">
        {/* Left Panel: Thumbnail Grid */}
        <motion.div 
          className="lg:w-2/5"
          variants={containerVariants}
        >
          <motion.div 
            className="grid grid-cols-4 gap-3 md:gap-4"
            variants={containerVariants}
          >
            {features.map((feature, idx) => (
              <motion.button
                key={idx}
                variants={thumbnailVariants}
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
          </motion.div>
          <motion.div 
            className="mt-6 text-center lg:text-right"
            variants={itemVariants}
          >
            <motion.a
              href="#"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors group shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Features
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Panel: Big Square Image + Content with Gradient Background */}
        <motion.div 
          className="lg:w-3/5 flex flex-col justify-center rounded-2xl p-6 shadow-lg backdrop-blur-sm"
          style={{
            background: "linear-gradient(135deg, rgba(135, 206, 250, 0.4) 0%, rgba(255, 255, 255, 0.7) 70%)",
          }}
          variants={itemVariants}
        >
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
              <motion.div 
                className="w-full lg:w-2/5 rounded-2xl overflow-hidden shadow-lg border border-white/30"
                style={{
                  background: "linear-gradient(135deg, rgba(135, 206, 250, 0.3) 0%, rgba(255, 255, 255, 0.6) 70%)",
                }}
                initial={{ x: -30, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
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
              </motion.div>

              {/* Content */}
              <motion.div 
                className="w-full lg:w-3/5"
                initial={{ x: 30, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
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
                          activeIdx === idx ? "bg-indigo-600" : "bg-gray-400"
                        }`}
                        onClick={() => setActiveIdx(idx)}
                        aria-label={`View feature ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-3">
                    {activeIdx + 1} of {features.length}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}