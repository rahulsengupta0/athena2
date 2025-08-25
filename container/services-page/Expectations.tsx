"use client";
import { useState, useEffect } from "react";
import { Marquee } from "@/components";
import { TextHover } from "@/animation";
import { expectationsItems as originalExpectationsItems } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";

// Athena LMS-specific images
const athenaLmsImgs = [
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1582573618381-c9a77c31f6b6?auto=format&fit=crop&w=400&q=80",
];

// Enhanced content specific to Athena LMS
const expectationsItems = [
  {
    id: 1,
    title1: "01",
    subTitle1: "Interactive Learning",
    btn: "Explore",
    para1: "Experience engaging multimedia content, interactive quizzes, and real-time collaboration tools that make learning immersive and effective.",
    icon: "📚"
  },
  {
    id: 2,
    title1: "02",
    subTitle1: "AI-Powered Analytics",
    btn: "Discover",
    para1: "Our advanced analytics track your progress, identify knowledge gaps, and recommend personalized learning paths to maximize your potential.",
    icon: "📊"
  },
  {
    id: 3,
    title1: "03",
    subTitle1: "Mobile Accessibility",
    btn: "Learn",
    para1: "Access your courses anytime, anywhere with our fully responsive platform that works seamlessly across all your devices.",
    icon: "📱"
  },
  {
    id: 4,
    title1: "04",
    subTitle1: "Expert Instructors",
    btn: "Meet",
    para1: "Learn from industry professionals and academic experts who bring real-world experience and cutting-edge knowledge to every lesson.",
    icon: "👨‍🏫"
  },
  {
    id: 5,
    title1: "05",
    subTitle1: "Career Advancement",
    btn: "Grow",
    para1: "Gain recognized certifications and build portfolio projects that demonstrate your skills to potential employers and advance your career.",
    icon: "🚀"
  },
  {
    id: 6,
    title1: "06",
    subTitle1: "Community Support",
    btn: "Connect",
    para1: "Join a vibrant community of learners, participate in discussion forums, and get support from peers and mentors throughout your journey.",
    icon: "🤝"
  }
].map((item, i) => ({
  ...item,
  img: athenaLmsImgs[i % athenaLmsImgs.length],
}));

export default function Expectations() {
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate featured items
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % expectationsItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  const hoveredItem = expectationsItems.find((item) => item.id === hoveredItemId);
  const activeItem = expectationsItems[activeIndex];

  return (
    <section
      className="w-full padding-y rounded-t-[20px] overflow-hidden relative"
      style={{ backgroundColor: "#005A9C" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div
        className="w-full z-10 relative rounded-t-[20px]"
        style={{ backgroundColor: "transparent" }}
      >
        <Marquee
          title="Athena LMS Excellence"
          className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[30px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
        />
      </div>
      
      <div className="w-full padding-x py-[20px] flex flex-row sm:flex-col xm:flex-col gap-[20px] relative z-20">
        {/* Left column: heading + preview */}
        <div className="w-1/2 sm:w-full xm:w-full flex flex-col items-center justify-start pt-[32px] relative">
          <motion.h3 
            className="paragraph font-medium text-white font-NeueMontreal mb-6 text-center sm:text-left xm:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What can you expect with Athena LMS?
          </motion.h3>
          
          <div className="relative w-96 h-72">
            <AnimatePresence mode="wait">
              {(hoveredItem || activeItem) && (
                <motion.div
                  key={hoveredItem ? hoveredItem.id : `active-${activeIndex}`}
                  initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                  className="w-full h-full bg-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden border border-white/20"
                >
                  <div className="h-3/4 overflow-hidden">
                    <img
                      src={hoveredItem ? hoveredItem.img : activeItem.img}
                      alt={hoveredItem ? hoveredItem.subTitle1 : activeItem.subTitle1}
                      className="object-cover w-full h-full transition-transform duration-700 ease-out hover:scale-110"
                      style={{ pointerEvents: "none" }}
                    />
                  </div>
                  <div className="h-1/4 bg-gradient-to-b from-blue-800 to-blue-900 p-3 flex items-center">
                    <span className="text-2xl mr-3">{hoveredItem ? hoveredItem.icon : activeItem.icon}</span>
                    <h4 className="text-white font-medium">
                      {hoveredItem ? hoveredItem.subTitle1 : activeItem.subTitle1}
                    </h4>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-yellow-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-green-400"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
          </div>
          
          <motion.p 
            className="text-white/80 text-center mt-6 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Athena LMS transforms learning through cutting-edge technology and pedagogical innovation.
          </motion.p>
        </div>

        {/* Right column: grid of cards */}
        <div className="w-1/2 sm:w-full xm:w-full grid grid-cols-3 gap-[20px]">
          {expectationsItems.map((item) => (
            <motion.div
              key={item.id}
              className="flex flex-col gap-[20px]"
              onMouseEnter={() => setHoveredItemId(item.id)}
              onMouseLeave={() => setHoveredItemId(null)}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div 
                className={`w-full rounded-[20px] px-[30px] py-[20px] cursor-pointer transition-all duration-300 min-h-[220px] flex flex-col 
                  ${openItemId === item.id ? 'bg-[#0066CC] shadow-lg' : 'bg-[#1E90FF]'} 
                  hover:shadow-xl`}
              >
                <div className="flex gap-x-[10px] items-center pb-[10px]">
                  <span className="text-2xl">{item.icon}</span>
                  <h1 className="sub-heading font-normal font-NeueMontreal text-white">
                    {item.title1}
                  </h1>
                </div>
                
                <motion.div 
                  className="mb-4 mt-2 h-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-white font-medium text-lg">{item.subTitle1}</h3>
                </motion.div>
                
                <div className="w-full flex justify-between items-center mt-auto">
                  <button className="small-text font-normal font-NeueMontreal text-white">
                    <TextHover titile1="Learn more" titile2="Learn more" />
                  </button>
                  <button
                    onClick={() => handleButtonClick(item.id)}
                    className="small-text uppercase font-normal font-NeueMontreal text-white px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    {openItemId === item.id ? "Hide" : item.btn}
                  </button>
                </div>
                
                <AnimatePresence>
                  {openItemId === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        opacity: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                        height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                      }}
                    >
                      <div className="border-t border-[#f1f1f155] pt-[20px] text-white mt-[10px]">
                        {item.para1}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Floating CTA at bottom */}
      <motion.div 
        className="flex justify-center mt-10 pb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <button className="px-8 py-3 bg-white text-blue-900 font-medium rounded-full hover:bg-blue-100 transition-colors shadow-lg hover:shadow-xl">
          Start Your Learning Journey
        </button>
      </motion.div>
    </section>
  );
}