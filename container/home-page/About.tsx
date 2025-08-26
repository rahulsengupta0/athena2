"use client";
import Image from "next/image";
import { useState } from "react";
import { aboutImg, athenaDashboard } from "@/public";
import { LinkHover } from "@/animation";
import { footerItems } from "@/constants";
import { Heading, RoundButton } from "@/components";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [hovered, setHovered] = useState(false);
  const [hoveredApproach, setHoveredApproach] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="w-full padding-y rounded-t-[20px] z-20 relative mt-[-15px] bg-gradient-to-b from-sky-100 to-sky-200">
      {/* Hero Section */}
      <div className="pl-[50px] sm:px-[20px] xm:px-[20px] pt-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-medium font-NeueMontreal text-slate-800 leading-tight"
        >
          Athena is your trusted partner for dynamic e-learning solutions,
          <br className="sm:hidden xm:hidden" />
          empowering educational institutions and businesses to&nbsp;
          <span className="text-sky-600 font-semibold">deliver engaging courses</span>,
          &nbsp;enhance training experiences, <br className="sm:hidden xm:hidden" />
          <span className="text-sky-600 font-semibold">simplify complex topics</span>,
          &nbsp;and&nbsp;
          <span className="text-sky-600 font-semibold">connect with top educators</span>.
        </motion.h2>
      </div>

      {/* Athena Difference Section - Premium Enhanced */}
      <div className="w-full border-y border-sky-300/50 my-[80px] py-[80px] relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-sky-200/10"
              style={{
                width: `${200 + Math.random() * 300}px`,
                height: `${200 + Math.random() * 300}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(60px)'
              }}
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
                transition: {
                  duration: 20 + Math.random() * 20,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }
              }}
            />
          ))}
        </div>

        <div className="relative z-10 padding-x pb-[50px] w-full flex sm:flex-col xm:flex-col gap-[50px] items-center justify-between max-w-[1800px] mx-auto">
          {/* Video Placeholder - Premium */}
          <motion.div 
            initial={{ opacity: 0, x: -100, scale: 0.95 }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              scale: 1,
              transition: { 
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96]
              }
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-[50%] sm:w-full xm:w-full relative rounded-3xl overflow-hidden shadow-2xl aspect-video"
            whileHover={{ scale: isVideoPlaying ? 1 : 0.98 }}
          >
            <AnimatePresence mode="wait">
              {!isVideoPlaying ? (
                // Image Thumbnail with Play Button
                <motion.div
                  key="thumbnail"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-br from-sky-900 to-slate-900 flex items-center justify-center cursor-pointer"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-30">
                    <Image
                      src={"/LMS.png"}
                      alt="Athena platform preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Play Button with Animation */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10 w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: { delay: 0.5, duration: 0.5 }
                    }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-10 w-10 text-sky-600 ml-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                      />
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                    
                    {/* Pulsing Ring Effect */}
                    <motion.div 
                      className="absolute inset-0 border-2 border-white/50 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 0],
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut"
                        }
                      }}
                    />
                  </motion.div>
                  
                  {/* Subtle Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-purple-500/10 pointer-events-none" />
                  
                  {/* Video Label */}
                  <div className="absolute bottom-6 left-6 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                    Click to Play Demo
                  </div>
                </motion.div>
              ) : (
                // Video Player
                <motion.div
                  key="video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black"
                >
                  <iframe
                    src="https://drive.google.com/file/d/1VHSrPG2_DH0Fd23eu8gYofyaPNfwcZcB/preview"
                    // Replace "your-video-id" with your actual YouTube video ID
                    // Example: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Athena Platform Demo"
                  />
                  
                  {/* Close Button */}
                  <motion.button
                    onClick={() => setIsVideoPlaying(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-sm z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.3 } }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12" 
                      />
                    </svg>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              transition: { 
                duration: 0.8, 
                delay: 0.2,
                ease: [0.43, 0.13, 0.23, 0.96]
              }
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-[50%] sm:w-full xm:w-full"
          >
            <motion.h3
              className="text-4xl font-bold text-slate-800 font-NeueMontreal mb-8 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.3 }
              }}
            >
              What sets Athena apart?
              <motion.div 
                className="absolute bottom-[-10px] left-0 w-24 h-1 bg-sky-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ 
                  scaleX: 1,
                  transition: { delay: 0.4, duration: 0.6 }
                }}
              />
            </motion.h3>
            
            <motion.div 
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.5
                  }
                }
              }}
            >
              {[
                {
                  title: "Adaptive Learning",
                  description: "AI-powered personalization that adjusts to each learner's pace and style",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  color: "bg-purple-500"
                },
                {
                  title: "Comprehensive Analytics",
                  description: "Real-time insights to track progress and optimize learning paths",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  ),
                  color: "bg-sky-500"
                },
                {
                  title: "Collaborative Tools",
                  description: "Seamless interaction between students, educators, and institutions",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  color: "bg-green-500"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        type: "spring",
                        stiffness: 100
                      }
                    }
                  }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="flex items-start gap-6 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all border border-white"
                >
                  <div className={`p-3 ${item.color} text-white rounded-lg shadow-md`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h4>
                    <p className="text-slate-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

     {/* Our Approach Section - Landscape Premium */}
<div className="w-full padding-x mb-32 relative">
  {/* Floating abstract background elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-sky-200/20"
        style={{
          width: `${100 + Math.random() * 300}px`,
          height: `${100 + Math.random() * 300}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          filter: 'blur(60px)'
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          transition: {
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }
        }}
      />
    ))}
  </div>

  <div className="relative flex flex-col landscape:flex-row gap-12 z-10">
    {/* Image Showcase - Full Width Landscape */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, delay: 0.2 }
      }}
      className="w-full landscape:w-[60%] h-[400px] landscape:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl"
      onMouseEnter={() => setHoveredApproach(true)}
      onMouseLeave={() => setHoveredApproach(false)}
    >
      {/* Main Image with Parallax Effect */}
      <motion.div
        animate={{
          scale: hoveredApproach ? 1.05 : 1,
          transition: { duration: 1.5 }
        }}
        className="absolute inset-0"
      >
        <Image
          src={athenaDashboard}
          alt="Athena platform dashboard"
          fill
          className="object-cover object-left"
          priority
        />
      </motion.div>

      {/* Floating UI Elements */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-4"
          style={{
            width: `${120 + i * 40}px`,
            left: `${15 + i * 20}%`,
            top: `${20 + i * 15}%`
          }}
          animate={{
            y: hoveredApproach ? [0, -10, 0] : [0, 5, 0],
            rotate: hoveredApproach ? [0, 3, -3, 0] : [0, -1, 1, 0],
            transition: {
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <div className={`w-2 h-2 rounded-full ${
              i === 0 ? 'bg-green-400' : i === 1 ? 'bg-yellow-400' : 'bg-red-400'
            }`} />
            <div className="text-xs font-medium text-slate-600">
              {i === 0 ? 'Progress' : i === 1 ? 'Activity' : 'Performance'}
            </div>
          </div>
          <div className="text-lg font-bold text-slate-800">
            {i === 0 ? '87%' : i === 1 ? '3.5x' : '92%'}
          </div>
        </motion.div>
      ))}

      {/* Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"
        animate={{
          opacity: hoveredApproach ? 0.8 : 0.6,
          transition: { duration: 0.5 }
        }}
      />

      {/* Interactive CTA */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-8 text-center"
        animate={{
          y: hoveredApproach ? 0 : 20,
          opacity: hoveredApproach ? 1 : 0.9,
          transition: { duration: 0.5 }
        }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-white text-slate-800 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          View Interactive Demo
        </motion.button>
      </motion.div>
    </motion.div>

    {/* Content Panel - Sticky on Scroll */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8 }
      }}
      className="w-full landscape:w-[40%] flex flex-col gap-8 landscape:sticky landscape:top-20 landscape:self-start"
    >
      <Heading title="Our Modern Learning Approach:" />

      <div className="space-y-6">
        {[
          {
            title: "Personalized Learning Journeys",
            description: "Athena's AI creates unique pathways for each learner, adapting content and pacing to individual needs",
            icon: (
              <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            ),
            color: "from-purple-100 to-purple-50"
          },
          {
            title: "Immersive Content Delivery",
            description: "Interactive modules, VR experiences, and gamification to enhance engagement",
            icon: (
              <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
            ),
            color: "from-blue-100 to-blue-50"
          },
          {
            title: "Data-Driven Insights",
            description: "Real-time analytics help educators refine their teaching strategies",
            icon: (
              <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            ),
            color: "from-green-100 to-green-50"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className={`p-6 rounded-xl shadow-md border border-sky-100 bg-gradient-to-r ${item.color} hover:shadow-lg transition-all`}
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h4>
                <p className="text-slate-700">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

     <div className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <RoundButton
            href="/athena-team"
            title="learn more"
            bgcolor="#000"
            className="bg-white text-black"
            style={{ color: "#fff" }}
        />
    </div>
    </motion.div>
  </div>
</div>
    </section>
  );
}