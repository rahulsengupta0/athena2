import Image from "next/image";
import { Paul } from "@/public";
import { Marquee } from "@/components";
import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Linkedin, Twitter, Mail, ArrowRight, ArrowLeft } from "lucide-react";

// Mock team data (you would replace this with your actual data)
const teamMembers = [
  {
    id: 1,
    name: "PAULMICHAEL ROWLAND",
    role: "Founder and CEO",
    image: Paul,
    bio: "Visionary leader with over 15 years of experience in educational technology. Passionate about creating learning solutions that transform lives.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    id: 2,
    name: "SARAH JOHNSON",
    role: "Chief Learning Officer",
    image: Paul, // Replace with actual image
    bio: "Education specialist with a PhD in Instructional Design. Creates engaging learning experiences that drive results.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    id: 3,
    name: "DAVID CHEN",
    role: "CTO",
    image: Paul, // Replace with actual image
    bio: "Tech innovator with expertise in scalable learning platforms. Believes technology should empower educators and learners.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    id: 4,
    name: "EMMA WILSON",
    role: "Head of Design",
    image: Paul, // Replace with actual image
    bio: "Award-winning designer focused on creating intuitive, beautiful learning interfaces that enhance user experience.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  }
];

export default function Team() {
  const [activeMember, setActiveMember] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const nextMember = () => {
    setActiveMember((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setActiveMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
    <section className="w-full bg-gradient-to-b from-[#005A9C] to-[#003A6B] min-h-screen rounded-t-[20px] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
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

      <div className="w-full bg-[#004687] z-10 relative rounded-t-[20px] pt-16 pb-8">
        <Marquee
  title="the team core of"
  className="pb-[28px] lg:pb-[22px] md:pb-[16px] sm:pb-[14px] xm:pb-[12px] text-[280px] leading-[170px] lg:text-[220px] lg:leading-[130px] md:text-[180px] md:leading-[100px] sm:text-[140px] sm:leading-[90px] xm:text-[90px] xm:leading-[50px]"
/>

      </div>

      <div ref={ref} className="w-full bg-[#004687] flex items-center justify-center pb-16 px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="w-full max-w-6xl mx-auto"
        >
          {/* Team member card */}
          <div className="relative bg-gradient-to-br from-blue-500/10 to-cyan-400/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 p-8">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png')]"></div>
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
              {/* Image section */}
              <motion.div
                variants={itemVariants}
                className="relative flex-shrink-0"
              >
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden">
                  <Image
                    src={teamMembers[activeMember].image}
                    alt={teamMembers[activeMember].name}
                    fill
                    className="object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Social links */}
                <div className="flex justify-center mt-4 gap-3">
                  <motion.a
                    whileHover={{ y: -5, scale: 1.1 }}
                    href={teamMembers[activeMember].social.linkedin}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm"
                  >
                    <Linkedin size={18} />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -5, scale: 1.1 }}
                    href={teamMembers[activeMember].social.twitter}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm"
                  >
                    <Twitter size={18} />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -5, scale: 1.1 }}
                    href={`mailto:${teamMembers[activeMember].social.email}`}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm"
                  >
                    <Mail size={18} />
                  </motion.a>
                </div>
              </motion.div>
              
              {/* Content section */}
              <motion.div variants={itemVariants} className="flex-1 text-white">
                <div className="mb-2">
                  <span className="text-sm font-medium text-cyan-300 bg-cyan-900/30 px-3 py-1 rounded-full">
                    {teamMembers[activeMember].role}
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  {teamMembers[activeMember].name}
                </h1>
                
                <p className="text-lg text-white/80 mb-6 leading-relaxed">
                  {teamMembers[activeMember].bio}
                </p>
                
                <div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevMember}
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm"
                  >
                    <ArrowLeft size={20} />
                  </motion.button>
                  
                  <span className="text-lg font-medium">
                    {activeMember + 1} / {teamMembers.length}
                  </span>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextMember}
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm"
                  >
                    <ArrowRight size={20} />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Team member indicators */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-8 gap-2"
          >
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveMember(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeMember ? "bg-cyan-400 scale-125" : "bg-white/30"
                }`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}