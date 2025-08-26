"use client";
import { useState, useEffect, useRef } from "react";
import { Marquee } from "@/components";
import { TextHover } from "@/animation";
import { AnimatePresence, motion } from "framer-motion";
import { 
  BookOpen, 
  BarChart3, 
  Smartphone, 
  Users, 
  Target, 
  MessageCircle,
  Play,
  Pause,
  ChevronRight,
  Sparkles
} from "lucide-react";

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
    icon: BookOpen,
    color: "#3B82F6"
  },
  {
    id: 2,
    title1: "02",
    subTitle1: "AI-Powered Analytics",
    btn: "Discover",
    para1: "Our advanced analytics track your progress, identify knowledge gaps, and recommend personalized learning paths to maximize your potential.",
    icon: BarChart3,
    color: "#10B981"
  },
  {
    id: 3,
    title1: "03",
    subTitle1: "Mobile Accessibility",
    btn: "Learn",
    para1: "Access your courses anytime, anywhere with our fully responsive platform that works seamlessly across all your devices.",
    icon: Smartphone,
    color: "#F59E0B"
  },
  {
    id: 4,
    title1: "04",
    subTitle1: "Expert Instructors",
    btn: "Meet",
    para1: "Learn from industry professionals and academic experts who bring real-world experience and cutting-edge knowledge to every lesson.",
    icon: Users,
    color: "#EF4444"
  },
  {
    id: 5,
    title1: "05",
    subTitle1: "Career Advancement",
    btn: "Grow",
    para1: "Gain recognized certifications and build portfolio projects that demonstrate your skills to potential employers and advance your career.",
    icon: Target,
    color: "#8B5CF6"
  },
  {
    id: 6,
    title1: "06",
    subTitle1: "Community Support",
    btn: "Connect",
    para1: "Join a vibrant community of learners, participate in discussion forums, and get support from peers and mentors throughout your journey.",
    icon: MessageCircle,
    color: "#EC4899"
  }
].map((item, i) => ({
  ...item,
  img: athenaLmsImgs[i % athenaLmsImgs.length],
}));

export default function Expectations() {
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-rotate featured items
  useEffect(() => {
    if (!isAutoRotating) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % expectationsItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const handleButtonClick = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  const handleManualSelection = (index: number) => {
    setActiveIndex(index);
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  const hoveredItem = expectationsItems.find((item) => item.id === hoveredItemId);
  const activeItem = expectationsItems[activeIndex];

  return (
    <section
      className="w-full padding-y rounded-t-[20px] overflow-hidden relative"
      style={{ backgroundColor: "#005A9C" }}
      ref={containerRef}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 120 + 30,
              height: Math.random() * 120 + 30,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
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
  className="pb-[32px] lg:pb-[26px] md:pb-[20px] sm:pb-[20px] xm:pb-[12px] text-[350px] leading-[210px] lg:text-[250px] lg:leading-[160px] md:text-[200px] md:leading-[110px] sm:text-[150px] sm:leading-[90px] xm:text-[100px] xm:leading-[60px]"
/>

      </div>
      
      <div className="w-full padding-x py-[20px] flex flex-row sm:flex-col xm:flex-col gap-[30px] relative z-20">
        {/* Left column: heading + preview */}
        <div className="w-1/2 sm:w-full xm:w-full flex flex-col items-center justify-start pt-[32px] relative">
          <motion.h3 
            className="paragraph font-medium text-white font-NeueMontreal mb-8 text-center text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Transform Your Learning Experience with Athena LMS
          </motion.h3>
          
          <div className="relative w-96 h-80 group">
            <AnimatePresence mode="wait">
              {(hoveredItem || activeItem) && (
                <motion.div
                  key={hoveredItem ? hoveredItem.id : `active-${activeIndex}`}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full h-full bg-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-white/20 backdrop-blur-sm"
                >
                  <div className="h-3/4 overflow-hidden relative">
                    <motion.img
                      src={hoveredItem ? hoveredItem.img : activeItem.img}
                      alt={hoveredItem ? hoveredItem.subTitle1 : activeItem.subTitle1}
                      className="object-cover w-full h-full"
                      style={{ pointerEvents: "none" }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full backdrop-blur-sm">
                      {hoveredItem ? (
                        <hoveredItem.icon size={20} />
                      ) : (
                        <activeItem.icon size={20} />
                      )}
                    </div>
                  </div>
                  <div className="h-1/4 bg-gradient-to-b from-blue-800/90 to-blue-900/90 p-4 flex items-center justify-between">
                    <h4 className="text-white font-semibold text-lg">
                      {hoveredItem ? hoveredItem.subTitle1 : activeItem.subTitle1}
                    </h4>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight size={20} className="text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Rotation controls */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-black/50 rounded-full px-3 py-1 backdrop-blur-sm">
              <button
                onClick={() => setIsAutoRotating(!isAutoRotating)}
                className="text-white p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                {isAutoRotating ? <Pause size={14} /> : <Play size={14} />}
              </button>
              <div className="flex gap-1">
                {expectationsItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleManualSelection(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeIndex === index ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <motion.p 
            className="text-white/80 text-center mt-8 max-w-md text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Discover the future of education with our cutting-edge learning platform designed for success.
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
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div 
                className={`w-full rounded-2xl p-6 cursor-pointer transition-all duration-300 min-h-[240px] flex flex-col 
                  ${openItemId === item.id ? 'bg-white/20' : 'bg-white/10'} 
                  hover:bg-white/15 backdrop-blur-sm border border-white/10 hover:border-white/20 shadow-lg hover:shadow-xl`}
                onClick={() => handleButtonClick(item.id)}
              >
                <div className="flex gap-x-3 items-center pb-4">
                  <motion.div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: item.color }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon size={20} className="text-white" />
                  </motion.div>
                  <h1 className="text-sm font-medium font-NeueMontreal text-white/80">
                    {item.title1}
                  </h1>
                </div>
                
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-white font-semibold text-lg mb-2">{item.subTitle1}</h3>
                </motion.div>
                
                <div className="w-full flex justify-between items-center mt-auto">
                  <button className="text-sm font-normal font-NeueMontreal text-white/70 hover:text-white transition-colors">
                    <TextHover titile1="Learn more" titile2="Discover →" />
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-xs uppercase font-medium px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                  >
                    {item.btn}
                  </motion.button>
                </div>
                
                <AnimatePresence>
                  {openItemId === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        opacity: { duration: 0.3 },
                        height: { duration: 0.4 },
                      }}
                    >
                      <div className="border-t border-white/20 pt-4 text-white/80 mt-4 text-sm leading-relaxed">
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
        className="flex justify-center mt-12 pb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.button 
          className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-50 transition-colors shadow-2xl hover:shadow-3xl flex items-center gap-3 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Sparkles size={20} className="text-blue-600" />
          Start Your Learning Journey
          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </section>
  );
}