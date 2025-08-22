import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { BookOpen, Users, Lightbulb, Globe2, ArrowRight, Sparkles } from "lucide-react";

const values = [
  {
    title: "Excellence in Learning",
    description: "We deliver structured, adaptive, and accessible learning experiences that empower every student to reach their full potential.",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    title: "Community & Support",
    description: "We foster a supportive community of learners, educators, and innovators who collaborate to create meaningful educational experiences.",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    title: "Innovation & Growth",
    description: "We embrace creativity and cutting-edge technology to unlock better education outcomes and drive continuous improvement.",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-amber-500 to-orange-500",
  },
  {
    title: "Global Reach",
    description: "We empower learners across borders with scalable digital solutions that break down barriers to quality education.",
    icon: Globe2,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-gradient-to-br from-emerald-500 to-teal-500",
  },
];

const ValuesSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-slate-50 to-blue-50/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-200/20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 20 - 10],
              x: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-4"
          >
            <Sparkles size={16} />
            <span className="text-sm font-medium">Our Principles</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Guiding <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Principles</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            At Athena LMS, our core values shape every aspect of our platform, creating transformative learning experiences for everyone.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => {
            const Icon = value.icon;
            const isActive = activeCard === idx;
            
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                initial="hidden"
                animate={controls}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setActiveCard(idx)}
                onHoverEnd={() => setActiveCard(null)}
                className="relative group cursor-pointer"
              >
                {/* Main card */}
                <div className={`rounded-2xl overflow-hidden transition-all duration-500 ${isActive ? 'shadow-2xl' : 'shadow-lg'}`}>
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                  
                  <div className="bg-white/90 backdrop-blur-sm p-6 flex flex-col h-full relative z-10">
                    {/* Icon container with gradient background */}
                    <div className={`w-16 h-16 flex items-center justify-center rounded-2xl ${value.bgColor} text-white mb-6 relative overflow-hidden`}>
                      <Icon size={28} />
                      
                      {/* Animated sparkle effect */}
                      <motion.div 
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute text-white"
                            style={{
                              top: `${Math.random() * 60 + 20}%`,
                              left: `${Math.random() * 60 + 20}%`,
                            }}
                            animate={{
                              scale: [0, 1, 0],
                              rotate: [0, 180, 360],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.5,
                            }}
                          >
                            <Sparkles size={12} />
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 flex-grow">
                      {value.description}
                    </p>

                    {/* Animated read more link */}
                    <div className="flex items-center text-sm font-medium">
                      <span className={`${isActive ? 'text-blue-600' : 'text-gray-500'} transition-colors duration-300`}>
                        Learn more
                      </span>
                      <motion.div
                        animate={{ x: isActive ? 5 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight size={16} className="ml-2" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Connecting line animation between cards when hovered */}
                {isActive && idx < values.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute top-1/2 -right-3 w-6 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full z-20"
                    initial={{ width: 0 }}
                    animate={{ width: 24 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Animated CTA at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-16"
        >
          <button className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-800 rounded group-hover:-mt-4 group-hover:-mr-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-800 rounded group-hover:-mb-4 group-hover:-ml-4">
              <span className="absolute bottom-0 left-0 w-5 h-5 -rotate-45 -translate-x-1/2 translate-y-1/2 bg-white"></span>
            </span>
            <span className="relative w-full text-center font-semibold transition-all duration-200 ease-in-out">
              Explore Our Platform
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;