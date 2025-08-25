import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { project3 } from "@/public";

const lmsFeatures = [
  {
    id: 1,
    category: "Learning Management",
    name: "Smart Course Builder",
    description: "Create engaging courses with our intuitive drag-and-drop interface, multimedia support, and AI-powered content suggestions.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400&q=80",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "blue"
  },
  {
    id: 2,
    category: "Student Engagement",
    name: "Interactive Learning Tools",
    description: "Boost engagement with quizzes, discussions, gamification, and real-time collaboration features that keep learners motivated.",
    image: project3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "green"
  },
  {
    id: 3,
    category: "Analytics & Reporting",
    name: "Advanced Analytics Dashboard",
    description: "Track progress, identify knowledge gaps, and measure ROI with comprehensive analytics and customizable reports.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "purple"
  },
  {
    id: 4,
    category: "Administration",
    name: "Automated User Management",
    description: "Simplify user onboarding, role assignment, and access control with our powerful administrative tools.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "orange"
  }
];

export default function LMSFeatures() {
  const [activeFeature, setActiveFeature] = useState(null);

  const handleMouseEnter = (featureId) => {
    setActiveFeature(featureId);
  };

  const handleMouseLeave = () => {
    setActiveFeature(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.03, y: -8, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.15, rotate: 5, transition: { duration: 0.4 } }
  };

  // Color mapping
  const colorMap = {
    blue: {
      light: "bg-blue-50",
      medium: "bg-blue-100",
      dark: "bg-blue-200",
      text: "text-blue-700",
      border: "border-blue-200",
      ring: "ring-blue-200"
    },
    green: {
      light: "bg-green-50",
      medium: "bg-green-100",
      dark: "bg-green-200",
      text: "text-green-700",
      border: "border-green-200",
      ring: "ring-green-200"
    },
    purple: {
      light: "bg-purple-50",
      medium: "bg-purple-100",
      dark: "bg-purple-200",
      text: "text-purple-700",
      border: "border-purple-200",
      ring: "ring-purple-200"
    },
    orange: {
      light: "bg-orange-50",
      medium: "bg-orange-100",
      dark: "bg-orange-200",
      text: "text-orange-700",
      border: "border-orange-200",
      ring: "ring-orange-200"
    }
  };

  return (
    <section className="w-full py-16 bg-gradient-to-br from-blue-50/60 to-sky-100/60">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-block mb-6"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="bg-white p-3 rounded-2xl shadow-lg shadow-blue-100/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Athena <span className="text-blue-500">LMS</span> Features
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover the powerful tools that make learning management seamless, engaging, and effective
          </p>
        </motion.div>

        {/* Features Grid - Modified to show all 4 cards in one row */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {lmsFeatures.map((feature) => {
            const colors = colorMap[feature.color];
            
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover="hover"
                initial="rest"
                animate="rest"
                onMouseEnter={() => handleMouseEnter(feature.id)}
                onMouseLeave={handleMouseLeave}
                className="relative h-full"
              >
                <motion.div
                  variants={hoverVariants}
                  className={`rounded-2xl overflow-hidden h-full border ${colors.border} ${
                    activeFeature === feature.id 
                      ? `bg-white shadow-xl ring-2 ${colors.ring}` 
                      : `${colors.light} hover:bg-white/90 shadow-lg`
                  } transition-all duration-500`}
                >
                  {/* Default/Collapsed View */}
                  <div className="p-6 flex flex-col items-center text-center h-full">
                    {/* Icon */}
                    <motion.div 
                      variants={iconVariants}
                      className={`w-16 h-16 rounded-xl ${colors.medium} flex items-center justify-center ${colors.text} mb-6 shadow-inner`}
                    >
                      {feature.icon}
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {feature.name}
                    </h3>
                    
                    {/* Category */}
                    <span className={`text-xs font-semibold ${colors.text} uppercase tracking-wider mb-4`}>
                      {feature.category}
                    </span>
                    
                    {/* Image (shown by default) */}
                    <div className="mt-3 relative w-full h-40 rounded-xl overflow-hidden group">
                      <Image
                        src={feature.image}
                        alt={feature.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-12 group-hover:animate-shine" />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content (shown on hover) */}
                  <AnimatePresence>
                    {activeFeature === feature.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl p-6 flex flex-col"
                      >
                        <h3 className="text-xl font-bold text-slate-800 mb-3">
                          {feature.name}
                        </h3>
                        
                        <p className="text-slate-600 mb-4 flex-grow text-base leading-relaxed">
                          {feature.description}
                        </p>
                        
                        {/* Feature highlights */}
                        <div className="space-y-2 mb-6">
                          {[
                            "Easy to use interface",
                            "AI-powered recommendations",
                            "Real-time collaboration",
                            "Comprehensive analytics"
                          ].slice(0, 3).map((highlight, index) => (
                            <motion.div 
                              key={index} 
                              className="flex items-center"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div className={`w-5 h-5 rounded-full ${colors.medium} flex items-center justify-center mr-2`}>
                                <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-sm text-slate-700">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                        
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          className={`mt-auto ${colors.medium} ${colors.text} hover:${colors.dark} px-4 py-2 rounded-lg font-semibold transition-colors self-stretch text-center text-sm`}
                        >
                          Learn more
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.button 
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.5)" 
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-base shadow-lg shadow-blue-200 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Explore All Features</span>
            <motion.span 
              className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
            />
          </motion.button>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        .animate-shine {
          animation: shine 1.8s ease-out;
        }
      `}</style>
    </section>
  );
}