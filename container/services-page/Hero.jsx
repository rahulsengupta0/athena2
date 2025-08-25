"use client";

import { motion } from "framer-motion";

const features = [
  { title: "Personalized Learning" },
  { title: "Seamless Management" },
  { title: "Anytime, Anywhere" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none"
      >
        <source src="/features.mp4" type="video/mp4" />
      </video>

      {/* Blue overlay with gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-800/30 to-blue-900/40 z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full h-full flex flex-col items-start justify-center px-8 sm:px-16 lg:px-24"
        initial="hidden"
        animate="show"
        variants={container}
      >
        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans leading-tight drop-shadow-xl"
          variants={item}
        >
          Smarter Learning, <br /> Seamless Management
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed drop-shadow"
          variants={item}
        >
          Athena LMS transforms education with modern tools that make learning
          more engaging, accessible, and impactful — for institutions, teachers,
          and learners alike.
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          className="mt-10 flex gap-6 flex-wrap"
          variants={container}
        >
          {features.map((feat, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.08, y: -4 }}
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-4 shadow-md hover:shadow-2xl transition group"
            >
              <p className="font-semibold text-white tracking-wide group-hover:text-blue-100">
                {feat.title}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="#features"
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mt-12 inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all px-10 py-4 rounded-full font-semibold text-lg text-white shadow-lg shadow-blue-900/40"
        >
          Explore Features →
        </motion.a>
      </motion.div>
    </section>
  );
}
