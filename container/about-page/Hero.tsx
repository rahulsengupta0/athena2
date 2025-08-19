"use client";
import Link from "next/link";
import Image from "next/image";
import { ochiside } from "@/public";
import { Eyes } from "@/components";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#e6f2ff] via-[#f0f7ff] to-[#d9ecff]">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-200/30"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              transition: {
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </div>

      {/* Top Heading */}
      <div className="padding-x pt-24 relative z-10">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.86, 0, 0.07, 0.995] }}
          className="heading tracking-[-1.5px] text-[#0f172a] font-bold font-FoundersGrotesk uppercase leading-tight"
        >
          We are
          <div className="flex items-center gap-3 mt-2">
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                delay: 0.8, 
                type: "spring", 
                stiffness: 200,
                damping: 10
              }}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                width={120}
                height={90}
                src={ochiside}
                alt="Athena Logo"
                className="h-[90px] w-auto object-cover rounded-xl"
              />
            </motion.div>
            <motion.span 
              className="heading font-FoundersGrotesk text-[#0f172a]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Athena LMS
            </motion.span>
          </div>
        </motion.h1>
      </div>

      {/* Content Row */}
      <div className="flex flex-col lg:flex-row items-center justify-between padding-x gap-12 mt-16 relative">
        {/* Left - About */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:w-1/2 w-full flex flex-col gap-8 relative z-10"
        >
          <motion.h3
            className="text-lg font-semibold text-[#0f172a] font-NeueMontreal"
            whileInView={{ 
              x: [-20, 0],
              opacity: [0, 1]
            }}
            transition={{ duration: 0.6 }}
          >
            About Athena LMS
          </motion.h3>
          
          <motion.p 
            className="paragraph text-[#1e293b] font-NeueMontreal leading-relaxed"
            whileInView={{ 
              x: [-20, 0],
              opacity: [0, 1]
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Athena LMS transforms the way teams learn, share, and grow.  
            We combine design, interactivity, and deep insights to empower 
            businesses with impactful learning journeys.
          </motion.p>
          
          <motion.p 
            className="paragraph text-[#1e293b] font-NeueMontreal leading-relaxed"
            whileInView={{ 
              x: [-20, 0],
              opacity: [0, 1]
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our philosophy is simple: knowledge should be immersive, intuitive,
            and inspiring. That's why we built Athena — to help businesses 
            educate with elegance and scale with confidence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex gap-4 items-center"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/case"
              className="px-6 py-3 rounded-full bg-[#0f172a] text-white font-NeueMontreal uppercase text-sm tracking-wide hover:bg-[#1e293b] transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Explore Work</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            </Link>
            <Link
              href="/contact"
              className="p-3 border border-[#0f172a] rounded-full hover:bg-[#0f172a] hover:text-white transition-all duration-300 group relative"
            >
              <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
              <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-500 group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right - Eyes Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="lg:w-1/2 w-full flex justify-center relative"
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative">
            <Eyes className="w-[320px] h-[320px] md:w-[240px] md:h-[240px] sm:w-[180px] sm:h-[180px] hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#e6f2ff80] to-transparent rounded-full blur-2xl" />
            <div className="absolute -inset-4 rounded-full border-2 border-blue-300/30 pointer-events-none animate-pulse"></div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="padding-x pb-16 relative z-10"
      >
        <h2 className="sub-heading font-medium font-NeueMontreal text-[#0f172a]">
  We transform complex ideas into{" "} engaging learning experiences.
</h2>
      </motion.div>

      {/* Floating CTA at bottom */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <Link
          href="/demo"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
        >
          Get Demo
          <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
        </Link>
      </motion.div>
    </section>
  );
}