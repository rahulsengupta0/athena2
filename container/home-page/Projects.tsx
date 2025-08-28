// import React, { useEffect, useRef, useState } from 'react';
// import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';

// const AthenaFeatures = () => {
//   const [activeFeature, setActiveFeature] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });
//   const controls = useAnimation();
  
//   const features = [
//     {
//       id: 1,
//       title: "Complete Content Authoring Tool",
//       description: "Create engaging courses with our intuitive drag-and-drop editor, multimedia support, quizzes, and interactive elements. Publish content once and deliver everywhere.",
//       icon: "📝",
//       color: "from-blue-400 to-cyan-400",
//       bgColor: "bg-gradient-to-br from-blue-100 to-cyan-100",
//       details: [
//         "Drag-and-drop course builder",
//         "Multimedia content support",
//         "Interactive assessments",
//         "SCORM compliant",
//         "Collaborative editing"
//       ]
//     },
//     {
//       id: 2,
//       title: "AI-Powered Course Creation",
//       description: "Leverage artificial intelligence to generate course outlines, suggest content, automate assessments, and personalize learning paths for each student.",
//       icon: "🤖",
//       color: "from-purple-400 to-pink-400",
//       bgColor: "bg-gradient-to-br from-purple-100 to-pink-100",
//       details: [
//         "AI content recommendations",
//         "Automated assessment generation",
//         "Personalized learning paths",
//         "Content gap analysis",
//         "Natural language processing"
//       ]
//     },
//     {
//       id: 3,
//       title: "Immersive Virtual Classroom",
//       description: "Host live sessions with interactive whiteboards, breakout rooms, real-time collaboration tools, and engagement analytics for impactful remote learning.",
//       icon: "👨‍🏫",
//       color: "from-amber-400 to-orange-400",
//       bgColor: "bg-gradient-to-br from-amber-100 to-orange-100",
//       details: [
//         "Interactive whiteboard",
//         "Breakout rooms",
//         "Real-time collaboration",
//         "Screen sharing & recording",
//         "Engagement analytics"
//       ]
//     },
//     {
//       id: 4,
//       title: "Smart Analytics Dashboard",
//       description: "Track learner progress, engagement metrics, course effectiveness, and skill development with real-time analytics and predictive insights.",
//       icon: "📊",
//       color: "from-green-400 to-teal-400",
//       bgColor: "bg-gradient-to-br from-green-100 to-teal-100",
//       details: [
//         "Real-time progress tracking",
//         "Engagement heatmaps",
//         "Skill gap analysis",
//         "Predictive analytics",
//         "Custom report builder"
//       ]
//     }
//   ];

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible");
//     }
//   }, [isInView, controls]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % features.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }
//   };

//   const featureImageVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
//       {/* Animated background elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-blue-200/40"
//             style={{
//               width: Math.random() * 80 + 30,
//               height: Math.random() * 80 + 30,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, Math.random() * 30 - 15],
//               x: [0, Math.random() * 30 - 15],
//               scale: [1, 1 + Math.random() * 0.3],
//               opacity: [0.3, 0.7, 0.3],
//             }}
//             transition={{
//               duration: Math.random() * 8 + 8,
//               repeat: Infinity,
//               repeatType: "reverse",
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header Section */}
//         <motion.div 
//           ref={ref}
//           initial={{ opacity: 0, y: -20 }}
//           animate={controls}
//           variants={{
//             hidden: { opacity: 0, y: -20 },
//             visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
//           }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             animate={{ 
//               rotate: [0, 5, -5, 0],
//               scale: [1, 1.05, 1]
//             }}
//             transition={{ 
//               duration: 8, 
//               repeat: Infinity,
//               repeatType: "reverse"
//             }}
//             className="inline-block mb-6"
//           >
//             <div className="text-5xl mb-2 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">✨</div>
//           </motion.div>
          
//           <motion.h1 
//             className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-6"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.7 }}
//           >
//             <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
//               Athena LMS Features
//             </span>
//           </motion.h1>
          
//           <motion.p 
//             className="mt-5 max-w-3xl mx-auto text-xl text-gray-600"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.7 }}
//           >
//             Powerful tools designed to transform the way you create, deliver, and manage learning experiences.
//           </motion.p>
//         </motion.div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
//           {/* Feature List */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate={controls}
//             className="space-y-8"
//           >
//             {features.map((feature, index) => (
//               <motion.div
//                 key={feature.id}
//                 variants={itemVariants}
//                 whileHover={{ 
//                   scale: 1.02,
//                   transition: { duration: 0.2 }
//                 }}
//                 whileTap={{ scale: 0.98 }}
//                 className={`p-6 rounded-2xl backdrop-blur-sm border cursor-pointer transition-all duration-300 ${activeFeature === index ? 'bg-white shadow-lg border-blue-300' : 'bg-white/80 border-gray-200'}`}
//                 onClick={() => setActiveFeature(index)}
//               >
//                 <div className="flex items-start">
//                   <motion.div 
//                     className={`text-3xl p-3 rounded-xl mr-4 ${activeFeature === index ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' : 'bg-blue-100 text-blue-600'}`}
//                     animate={{ 
//                       rotate: activeFeature === index ? [0, 5, -5, 0] : 0,
//                       scale: activeFeature === index ? [1, 1.1, 1] : 1
//                     }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     {feature.icon}
//                   </motion.div>
//                   <div>
//                     <h3 className={`text-xl font-bold mb-2 ${activeFeature === index ? 'text-blue-700' : 'text-gray-800'}`}>
//                       {feature.title}
//                     </h3>
//                     <p className="text-gray-600">
//                       {feature.description}
//                     </p>
//                     <motion.div 
//                       className="mt-4 flex flex-wrap gap-2"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: activeFeature === index ? 1 : 0.7 }}
//                     >
//                       {feature.details.slice(0, 3).map((detail, i) => (
//                         <motion.span 
//                           key={i} 
//                           className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
//                           whileHover={{ scale: 1.05 }}
//                         >
//                           {detail}
//                         </motion.span>
//                       ))}
//                     </motion.div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Feature Visualization */}
//           <div className="relative">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeFeature}
//                 initial="hidden"
//                 animate="visible"
//                 exit="hidden"
//                 variants={featureImageVariants}
//                 className={`h-full rounded-3xl p-8 flex flex-col justify-center ${features[activeFeature].bgColor} border border-gray-200 shadow-md`}
//               >
//                 <div className="text-center mb-8">
//                   <motion.div 
//                     className="text-5xl mb-4"
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//                   >
//                     {features[activeFeature].icon}
//                   </motion.div>
//                   <h2 className="text-2xl font-bold text-gray-800 mb-2">{features[activeFeature].title}</h2>
//                   <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-4"></div>
//                   <p className="text-gray-600 max-w-md mx-auto">
//                     {features[activeFeature].description}
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   {features[activeFeature].details.map((detail, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: i * 0.1 + 0.3 }}
//                       className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 shadow-sm"
//                       whileHover={{ y: -3, transition: { duration: 0.2 } }}
//                     >
//                       <div className="flex items-center">
//                         <motion.div 
//                           className="w-3 h-3 rounded-full bg-blue-400 mr-2"
//                           animate={{ scale: [1, 1.2, 1] }}
//                           transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
//                         ></motion.div>
//                         <span className="text-gray-700 text-sm">{detail}</span>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>

//                 <motion.div 
//                   className="mt-8 text-center"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.8 }}
//                 >
//                   <motion.button 
//                     className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-md"
//                     whileHover={{ scale: 1.05, y: -2 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Explore Feature
//                   </motion.button>
//                 </motion.div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8, duration: 0.7 }}
//           className="text-center relative"
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-3xl blur-xl opacity-70"></div>
//           <div className="relative bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-lg border border-blue-200">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//               Ready to transform your learning experience?
//             </h2>
//             <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
//               Join thousands of educators and organizations using Athena LMS to create impactful learning journeys.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <motion.button 
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-md"
//               >
//                 Get Started Free
//               </motion.button>
//               <motion.button 
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 border-2 border-blue-500 text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-all duration-300"
//               >
//                 Schedule a Demo
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AthenaFeatures;
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';

// ==== SVG Icons ====
const ContentAuthoringIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);
const CollaborationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);
const PersonalizationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);
const AnalyticsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);
const EcosystemIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>
);
const AssessmentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

// Define interfaces for type safety
interface Feature {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  category: number;
  color: string;
  bgColor: string;
  details: string[];
}

interface Category {
  id: number;
  name: string;
  color: string;
  bgColor: string;
  icon: string;
}

const AthenaFeatures: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  const categories: Category[] = [
    { id: 1, name: "Content Creation", color: "from-blue-500 to-cyan-500", bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50", icon: "📝" },
    { id: 2, name: "Collaboration", color: "from-indigo-500 to-purple-500", bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50", icon: "👥" },
    { id: 3, name: "AI & Personalization", color: "from-purple-500 to-pink-500", bgColor: "bg-gradient-to-br from-purple-50 to-pink-50", icon: "🤖" },
    { id: 4, name: "Analytics & Insights", color: "from-teal-500 to-green-500", bgColor: "bg-gradient-to-br from-teal-50 to-green-50", icon: "📊" }
  ];

  const features: Feature[] = [
    {
      id: 1,
      title: "Content Authoring Studio",
      description: "Create stunning, interactive learning experiences with our intuitive drag-and-drop studio. Support for multiple content types and seamless integration with existing tools.",
      icon: <ContentAuthoringIcon />,
      category: 0,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      details: ["Drag-and-drop course builder", "Multimedia content support", "Interactive elements library", "Responsive design templates", "SCORM and xAPI compliant", "Version control and history"]
    },
    {
      id: 2,
      title: "All-in-One SaaS Ecosystem",
      description: "A fully integrated platform that combines all the tools you need for creating, managing, and delivering exceptional learning experiences at scale.",
      icon: <EcosystemIcon />,
      category: 0,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      details: ["Unified learning environment", "Seamless integration capabilities", "Scalable cloud infrastructure", "Multi-tenant architecture", "Continuous update pipeline", "Enterprise-grade security"]
    },
    {
      id: 3,
      title: "Collaborative Communities",
      description: "Foster engagement with built-in social learning features for discussion, group projects, and knowledge sharing across your organization.",
      icon: <CollaborationIcon />,
      category: 1,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      details: ["Discussion forums & spaces", "Real-time collaboration tools", "Group project management", "Peer review system", "Knowledge sharing hubs", "Mentorship programs"]
    },
    {
      id: 4,
      title: "Intelligent Communication Hub",
      description: "Enhance interaction with smart notifications, detailed engagement analytics, and automated workflows to keep everyone connected.",
      icon: <CollaborationIcon />,
      category: 1,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      details: ["Smart notifications", "Intelligent moderation", "Engagement analytics", "Discussion analytics", "Automated follow-ups", "Role-based communication"]
    },
    {
      id: 5,
      title: "AI-Powered Personalization",
      description: "Leverage advanced AI to tailor learning experiences, create personalized learning paths, and adapt content based on individual progress and preferences.",
      icon: <PersonalizationIcon />,
      category: 2,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      details: ["Adaptive learning paths", "AI content recommendations", "Automated difficulty adjustment", "Personalized feedback system", "Predictive performance analysis", "Learning style adaptation"]
    },
    {
      id: 6,
      title: "Smart Content Co-Creation",
      description: "AI-assisted content creation that helps you develop engaging materials faster with intelligent suggestions and automation tools.",
      icon: <PersonalizationIcon />,
      category: 2,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      details: ["AI content suggestions", "Automated outline generation", "Content enhancement tools", "Multimedia recommendations", "Accessibility improvements", "Multilingual support"]
    },
    {
      id: 7,
      title: "Learning Analytics Dashboard",
      description: "Gain deep understanding of learning effectiveness with advanced analytics, customizable reports, and actionable insights for improvement.",
      icon: <AnalyticsIcon />,
      category: 3,
      color: "from-teal-500 to-green-500",
      bgColor: "bg-gradient-to-br from-teal-50 to-green-50",
      details: ["Engagement heatmaps", "Knowledge retention tracking", "Skill gap analysis", "ROI measurement tools", "Custom report builder", "Predictive analytics"]
    },
    {
      id: 8,
      title: "Interactive Assessments Engine",
      description: "Move beyond multiple-choice with our advanced assessment system featuring AI-powered evaluation and detailed feedback mechanisms.",
      icon: <AssessmentIcon />,
      category: 3,
      color: "from-teal-500 to-green-500",
      bgColor: "bg-gradient-to-br from-teal-50 to-green-50",
      details: ["Interactive question types", "Auto-grading system", "Plagiarism detection", "Performance analytics", "Competency mapping", "Real-time feedback"]
    }
  ];

  const filteredFeatures = features.filter(feature => feature.category === activeCategory);

  // FIXED: Explicitly typed array of Feature arrays
  const featurePairs: Feature[][] = [];
  for (let i = 0; i < filteredFeatures.length; i += 2) {
    featurePairs.push(filteredFeatures.slice(i, i + 2));
  }

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isAutoRotating && featurePairs.length > 1) {
      interval = setInterval(() => {
        setActiveFeature(prev => (prev + 1) % featurePairs.length);
      }, 5000);
    }
    return () => interval && clearInterval(interval);
  }, [isAutoRotating, activeCategory, featurePairs.length]);

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);
    setActiveFeature(0);
    setIsAutoRotating(true);
  };
  const handleFeatureChange = (index: number) => {
    setActiveFeature(index);
    setIsAutoRotating(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };
  const featureImageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-200/40"
            style={{
              width: Math.random() * 80 + 30,
              height: Math.random() * 80 + 30,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
              scale: [1, 1 + Math.random() * 0.3],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
          }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl font-bold text-slate-800 sm:text-5xl sm:tracking-tight lg:text-6xl mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
              Athena LMS Features
            </span>
          </motion.h1>
          <motion.p 
            className="mt-5 max-w-3xl mx-auto text-xl text-slate-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            The next-generation learning ecosystem designed to transform education through innovation, intelligence, and immersive experiences.
          </motion.p>
        </motion.div>
        {/* Category Selector */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${activeCategory === index ? `bg-gradient-to-r ${category.color} text-white shadow-md` : 'bg-white text-slate-700 hover:bg-blue-50 shadow-sm'}`}
              onClick={() => handleCategoryChange(index)}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Feature List */}
          <div className="space-y-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="space-y-8"
            >
              {featurePairs.map((pair, pairIndex) => (
                <motion.div
                  key={pairIndex}
                  variants={itemVariants}
                  className={`p-1 rounded-xl cursor-pointer transition-all duration-300 ${activeFeature === pairIndex ? 'ring-4 ring-blue-400 ring-opacity-30 transform scale-105' : 'opacity-80 hover:opacity-100 hover:ring-2 hover:ring-blue-200'}`}
                  onClick={() => handleFeatureChange(pairIndex)}
                >
                  <div className="grid grid-cols-1 gap-6">
                    {pair.map((feature, featureIndex) => (
                      <motion.div
                        key={feature.id}
                        whileHover={{ scale: 1.02, y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-6 rounded-xl border transition-all ${activeFeature === pairIndex ? 'bg-white shadow-xl border-blue-300' : 'bg-white/90 border-gray-200 shadow-md'}`}
                      >
                        <div className="flex items-start">
                          <motion.div 
                            className={`p-3 rounded-lg mr-5 ${activeFeature === pairIndex ? `bg-gradient-to-r ${feature.color} text-white` : 'bg-blue-100 text-blue-600'}`}
                            animate={{ 
                              scale: activeFeature === pairIndex ? [1, 1.1, 1] : 1
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            {feature.icon}
                          </motion.div>
                          <div className="flex-1">
                            <h3 className={`text-xl font-bold mb-3 ${activeFeature === pairIndex ? 'text-blue-800' : 'text-slate-800'}`}>
                              {feature.title}
                            </h3>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                              {feature.description}
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                              {feature.details.slice(0, 4).map((detail, i) => (
                                <div key={i} className="flex items-center text-sm text-slate-600">
                                  <div className={`w-2 h-2 rounded-full mr-2 ${activeFeature === pairIndex ? `bg-gradient-to-r ${feature.color}` : 'bg-blue-300'}`}></div>
                                  <span>{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            {/* Feature navigation dots */}
            {featurePairs.length > 1 && (
              <div className="flex justify-center mt-8 space-x-3">
                {featurePairs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleFeatureChange(index)}
                    className={`w-4 h-4 rounded-full transition-all ${activeFeature === index ? 'bg-blue-500 scale-110' : 'bg-gray-300 hover:bg-gray-400'}`}
                    aria-label={`Go to feature set ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
          {/* Feature Visualization */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={featureImageVariants}
                className={`h-full rounded-2xl p-8 flex flex-col justify-center ${categories[activeCategory].bgColor} border border-blue-100 shadow-xl`}
              >
                <div className="text-center mb-8">
                  <motion.div 
                    className="mb-4 text-blue-600 flex justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    {featurePairs[activeFeature]?.[0]?.icon}
                  </motion.div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">
                    {featurePairs[activeFeature]?.[0]?.title} {featurePairs[activeFeature]?.[1] && `& ${featurePairs[activeFeature][1].title}`}
                  </h2>
                  <div className={`h-1 w-20 bg-gradient-to-r ${categories[activeCategory].color} rounded-full mx-auto mb-4`}></div>
                  <p className="text-slate-600 max-w-md mx-auto">
                    {featurePairs[activeFeature]?.[0]?.description} {featurePairs[activeFeature]?.[1]?.description}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-slate-800 text-center mb-2">
                      {featurePairs[activeFeature]?.[0]?.title}
                    </h3>
                    {featurePairs[activeFeature]?.[0]?.details.slice(0, 4).map((detail, i) => (
                      <motion.div
                        key={`0-${i}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                        className="bg-white/90 p-3 rounded-lg border border-blue-100 shadow-sm"
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      >
                        <div className="flex items-center">
                          <motion.div 
                            className={`w-3 h-3 rounded-full mr-2 bg-gradient-to-r ${featurePairs[activeFeature]?.[0]?.color}`}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                          ></motion.div>
                          <span className="text-slate-700 text-sm">{detail}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-slate-800 text-center mb-2">
                      {featurePairs[activeFeature]?.[1]?.title}
                    </h3>
                    {featurePairs[activeFeature]?.[1]?.details && featurePairs[activeFeature][1].details.slice(0, 4).map((detail, i) => (
                      <motion.div
                        key={`1-${i}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.3 + 0.15 }}
                        className="bg-white/90 p-3 rounded-lg border border-blue-100 shadow-sm"
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      >
                        <div className="flex items-center">
                          <motion.div 
                            className={`w-3 h-3 rounded-full mr-2 bg-gradient-to-r ${featurePairs[activeFeature]?.[1]?.color}`}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                          ></motion.div>
                          <span className="text-slate-700 text-sm">{detail}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <motion.div 
                  className="mt-4 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.button 
                    className={`px-6 py-3 bg-gradient-to-r ${categories[activeCategory].color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 shadow-md`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore These Features
                  </motion.button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-2xl blur-xl opacity-50"></div>
          <div className="relative bg-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-lg border border-blue-100">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Ready to revolutionize your learning experience?
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Join forward-thinking educators and organizations using Athena LMS to create transformative learning journeys.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 shadow-md"
              >
                Get Started Free
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300"
              >
                Schedule a Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AthenaFeatures;
