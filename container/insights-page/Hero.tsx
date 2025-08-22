"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiSearch, 
  FiChevronDown, 
  FiChevronUp, 
  FiBookOpen, 
  FiMessageSquare, 
  FiUsers, 
  FiGlobe, 
  FiLock, 
  FiCreditCard, 
  FiMail, 
  FiCalendar, 
  FiFileText,
  FiHelpCircle,
  FiExternalLink,
  FiX,
  FiStar,
  FiThumbsUp,
  FiThumbsDown
} from "react-icons/fi";

// Sample FAQ data
const FaqItems = [
  {
    id: "1",
    question: "How do I create a course in Athena LMS?",
    answer:
      "To create a course, navigate to your instructor dashboard and click the 'Create New Course' button. You'll be guided through a step-by-step process to add content, set up assessments, and configure course settings.",
    category: "courses",
    difficulty: "beginner",
    lastUpdated: "2023-11-15",
    helpful: 42,
    notHelpful: 3,
    links: [
      { id: "1-1", title: "Course Creation Guide", href: "/guides/course-creation" },
      { id: "1-2", title: "Video Tutorial", href: "/tutorials/course-setup" },
    ],
  },
  {
    id: "2",
    question: "What are the system requirements for Athena LMS?",
    answer:
      "Athena LMS works on all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using the latest browser versions. Mobile apps are available for iOS and Android devices.",
    category: "technical",
    difficulty: "beginner",
    lastUpdated: "2023-10-28",
    helpful: 28,
    notHelpful: 2,
    links: [
      { id: "2-1", title: "System Requirements", href: "/system-requirements" },
      { id: "2-2", title: "Mobile App Download", href: "/mobile-app" },
    ],
  },
  {
    id: "3",
    question: "How do I reset my password?",
    answer:
      "Click on the 'Forgot Password' link on the login page. Enter your email address, and we'll send you a password reset link. If you're still having issues, contact our support team for assistance.",
    category: "account",
    difficulty: "beginner",
    lastUpdated: "2023-12-01",
    helpful: 67,
    notHelpful: 5,
    links: [{ id: "3-1", title: "Account Recovery", href: "/account/recovery" }],
  },
  {
    id: "4",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers for annual plans. For enterprise customers, we also offer invoice-based billing with net-30 terms.",
    category: "billing",
    difficulty: "intermediate",
    lastUpdated: "2023-11-20",
    helpful: 31,
    notHelpful: 4,
    links: [
      { id: "4-1", title: "Billing & Payments", href: "/billing" },
      { id: "4-2", title: "Enterprise Pricing", href: "/enterprise" },
    ],
  },
  {
    id: "5",
    question: "How is my data secured?",
    answer:
      "We use industry-standard encryption, regular security audits, and comply with GDPR regulations. All data is stored on secure servers with 99.9% uptime guarantee and regular backups.",
    category: "security",
    difficulty: "advanced",
    lastUpdated: "2023-12-05",
    helpful: 89,
    notHelpful: 1,
    links: [
      { id: "5-1", title: "Security Overview", href: "/security" },
      { id: "5-2", title: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    id: "6",
    question: "Can I integrate with other tools?",
    answer:
      "Yes, Athena LMS offers integrations with popular tools like Zoom, Google Drive, Microsoft Teams, and many others through our API and pre-built connectors.",
    category: "technical",
    difficulty: "intermediate",
    lastUpdated: "2023-11-10",
    helpful: 56,
    notHelpful: 7,
    links: [
      { id: "6-1", title: "Integrations", href: "/integrations" },
      { id: "6-2", title: "API Documentation", href: "/api-docs" },
    ],
  },
];

// Difficulty badges with colors and icons
const difficultyLevels = {
  beginner: { label: "Beginner", color: "bg-green-100 text-green-800", icon: "🌱" },
  intermediate: { label: "Intermediate", color: "bg-blue-100 text-blue-800", icon: "🚀" },
  advanced: { label: "Advanced", color: "bg-purple-100 text-purple-500", icon: "🏆" },
};

export default function Hero() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [helpfulFeedback, setHelpfulFeedback] = useState<Record<string, boolean>>({});
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: "",
    category: "general",
  });

  // Filter categories based on available FAQs
  const availableCategories = [
    { id: "all", title: "All FAQs", icon: <FiBookOpen />, count: FaqItems.length },
    ...Array.from(new Set(FaqItems.map(item => item.category))).map(category => {
      const categoryIcon = category === "account" ? <FiUsers /> : 
                          category === "courses" ? <FiBookOpen /> : 
                          category === "technical" ? <FiGlobe /> : 
                          category === "billing" ? <FiCreditCard /> : 
                          category === "security" ? <FiLock /> : <FiHelpCircle/>;
      
      return {
        id: category,
        title: `${category.charAt(0).toUpperCase() + category.slice(1)}`,
        icon: categoryIcon,
        count: FaqItems.filter(item => item.category === category).length
      };
    })
  ];

  const filteredFaqs = FaqItems.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const handleHelpfulFeedback = (id: string, isHelpful: boolean) => {
    setHelpfulFeedback(prev => ({ ...prev, [id]: isHelpful }));
    // In a real app, you would send this feedback to your backend
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Contact form submitted:", contactFormData);
    setShowContactForm(false);
    setContactFormData({ name: "", email: "", message: "", category: "general" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Effect to close FAQ when searching
  useEffect(() => {
    if (searchQuery) {
      setActiveFaq(null);
    }
  }, [searchQuery]);

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 relative overflow-hidden">
      {/* Enhanced Animated background elements */}
      <motion.div 
        className="absolute top-10 left-10 w-72 h-72 bg-blue-200/20 rounded-full -z-10 blur-xl"
        animate={{
          x: [0, 20, 0],
          y: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200/20 rounded-full -z-10 blur-xl"
        animate={{
          x: [0, -25, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating particles with more variety */}
     {[...Array(8)].map((_, i) => (
  <motion.div
    key={i}
    className={`absolute rounded-full -z-10 ${
      i % 3 === 0
        ? "bg-blue-300/30"
        : i % 3 === 1
        ? "bg-indigo-300/20"
        : "bg-cyan-300/25"
    } ${i % 2 === 0 ? "animate-pulse" : ""}`}
    style={{
      width: `${4 + (i % 3)}px`,
      height: `${4 + (i % 3)}px`,
      top: `${15 + i * 10}%`,
      left: `${5 + i * 8}%`,
    }}
    animate={{
      y: [0, -15 - i * 2, 0],
      x: [0, 5 + (i % 2) * 10, 0],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 8 + i * 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
))}

{[...Array(8)].map((_, i) => (
  <motion.div
    key={i + 8}
    className={`absolute rounded-full -z-10 ${
      i % 3 === 0
        ? "bg-purple-300/20"
        : i % 3 === 1
        ? "bg-pink-300/15"
        : "bg-teal-300/25"
    }`}
    style={{
      width: `${4 + (i % 4)}px`,
      height: `${4 + (i % 4)}px`,
      top: `${10 + i * 7}%`,
      right: `${5 + i * 6}%`,
    }}
    animate={{
      y: [0, -10 - i * 3, 0],
      x: [0, -5 - (i % 2) * 8, 0],
      rotate: [0, -180, -360],
    }}
    transition={{
      duration: 10 + i * 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
))}


      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section with more visual interest */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-8"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl mb-6 shadow-lg"
          >
            <FiHelpCircle className="text-4xl text-white" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            How can we help?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            Find answers to common questions about Athena LMS. Our knowledge base is here to help you make the most of your learning experience.
          </motion.p>
        </motion.div>

        {/* Enhanced Search Bar with suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 text-xl" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 text-lg border border-slate-200 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:shadow-md transition-shadow"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <FiX size={20} />
              </button>
            )}
          </div>
          
          {/* Search suggestions */}
          {searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-0 right-0 bg-white mt-2 rounded-2xl shadow-lg border border-slate-200 overflow-hidden z-20"
            >
              {FaqItems.filter(item => 
                item.question.toLowerCase().includes(searchQuery.toLowerCase()) && 
                !filteredFaqs.includes(item)
              ).slice(0, 3).map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSearchQuery(item.question);
                    setActiveCategory(item.category);
                  }}
                  className="w-full text-left p-4 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-b-0"
                >
                  <div className="font-medium text-slate-800">{item.question}</div>
                  <div className="text-sm text-slate-500 mt-1">{item.category}</div>
                </button>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Enhanced Category Filters with counts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {availableCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all ${activeCategory === category.id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-sm'}`}
            >
              {category.icon}
              <span className="font-medium">{category.title}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${activeCategory === category.id ? 'bg-white/20' : 'bg-slate-100'}`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ List */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-between items-center mb-6"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                {filteredFaqs.length} {filteredFaqs.length === 1 ? "result" : "results"}{" "}
                {searchQuery && `for "${searchQuery}"`}
              </h2>
              
              {filteredFaqs.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-500">Sort by:</span>
                  <select className="text-sm bg-slate-100 border border-slate-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Most relevant</option>
                    <option>Most helpful</option>
                    <option>Newest</option>
                    <option>Difficulty</option>
                  </select>
                </div>
              )}
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => (
                  <motion.div 
                    key={faq.id}
                    variants={itemVariants}
                    className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group"
                  >
                    <motion.button
                      onClick={() => toggleFaq(faq.id)}
                      whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                      className="w-full flex justify-between items-start p-6 text-left transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${difficultyLevels[faq.difficulty as keyof typeof difficultyLevels]?.color}`}>
                            {difficultyLevels[faq.difficulty as keyof typeof difficultyLevels]?.icon} {difficultyLevels[faq.difficulty as keyof typeof difficultyLevels]?.label}
                          </span>
                          <span className="text-xs text-slate-500">Updated: {faq.lastUpdated}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                      </div>
                      {activeFaq === faq.id ? (
                        <FiChevronUp className="text-blue-500 flex-shrink-0 mt-2" />
                      ) : (
                        <FiChevronDown className="text-slate-400 flex-shrink-0 mt-2 group-hover:text-slate-600" />
                      )}
                    </motion.button>

                    <AnimatePresence>
                      {activeFaq === faq.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="px-6 pb-6 bg-slate-50"
                        >
                          <p className="text-slate-700 mb-4">{faq.answer}</p>
                          
                          {/* Helpful feedback section */}
                          <div className="mt-6 pt-4 border-t border-slate-200">
                            <p className="text-sm font-medium text-slate-700 mb-3">Was this helpful?</p>
                            <div className="flex gap-3">
                              {helpfulFeedback[faq.id] === undefined ? (
                                <>
                                  <button 
                                    onClick={() => handleHelpfulFeedback(faq.id, true)}
                                    className="flex items-center gap-1 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm hover:bg-green-50 hover:text-green-700 transition-colors"
                                  >
                                    <FiThumbsUp className="text-sm" /> Yes
                                  </button>
                                  <button 
                                    onClick={() => handleHelpfulFeedback(faq.id, false)}
                                    className="flex items-center gap-1 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm hover:bg-red-50 hover:text-red-700 transition-colors"
                                  >
                                    <FiThumbsDown className="text-sm" /> No
                                  </button>
                                </>
                              ) : (
                                <div className="text-sm text-slate-600">
                                  {helpfulFeedback[faq.id] 
                                    ? "Thank you for your feedback! 👍" 
                                    : "We're sorry to hear that. Consider contacting our support for more help."
                                  }
                                </div>
                              )}
                              
                              <div className="ml-auto text-xs text-slate-500">
                                {faq.helpful} people found this helpful
                              </div>
                            </div>
                          </div>

                          {faq.links && faq.links.length > 0 && (
                            <div className="mt-6 pt-4 border-t border-slate-200">
                              <h4 className="font-medium text-slate-900 mb-3">Related resources:</h4>
                              <div className="flex flex-wrap gap-3">
                                {faq.links.map((link) => (
                                  <motion.div
                                    key={link.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <Link
                                      href={link.href}
                                      className="inline-flex items-center gap-1 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
                                    >
                                      {link.title}
                                      <FiExternalLink className="text-xs" />
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-16 bg-white rounded-2xl border border-slate-200"
                >
                  <FiSearch className="text-4xl text-slate-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">No results found</h3>
                  <p className="text-slate-600 mb-6">Try different keywords or browse all categories</p>
                  <button 
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("all");
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear Search
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Enhanced Support Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white h-fit sticky top-6 shadow-xl shadow-blue-500/30 overflow-hidden"
          >
            {/* Animated background elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Need more help?</h3>
              <p className="mb-6 opacity-90">
                Our support team is ready to assist you with any questions.
              </p>

              <div className="space-y-4">
                <motion.button 
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowContactForm(true)}
                  className="w-full flex items-center justify-center gap-2 bg-white text-blue-600 py-3 px-4 rounded-xl font-medium hover:bg-blue-50 transition-colors shadow-md"
                >
                  <FiMail className="text-lg" />
                  Contact Support
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-blue-800/90 text-white py-3 px-4 rounded-xl font-medium hover:bg-blue-900 transition-colors shadow-md"
                >
                  <FiCalendar className="text-lg" />
                  Schedule a Demo
                </motion.button>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-500/30">
                <h4 className="font-medium mb-3">Popular resources</h4>
                <ul className="space-y-3">
                  {["Getting Started Guide", "Instructor Handbook", "System Requirements", "Video Tutorials"].map((item, index) => (
                    <motion.li 
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link href="#" className="opacity-90 hover:opacity-100 transition-opacity flex items-center py-1">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-blue-500/30">
                <h4 className="font-medium mb-3">Quick stats</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/10 p-3 rounded-lg text-center">
                    <div className="text-lg font-bold">{FaqItems.length}+</div>
                    <div>Articles</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg text-center">
                    <div className="text-lg font-bold">24/7</div>
                    <div>Support</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form Modal */}
        <AnimatePresence>
          {showContactForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setShowContactForm(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl p-6 w-full max-w-md"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900">Contact Support</h3>
                  <button 
                    onClick={() => setShowContactForm(false)}
                    className="text-slate-500 hover:text-slate-700"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                    <input
                      type="text"
                      required
                      value={contactFormData.name}
                      onChange={(e) => setContactFormData({...contactFormData, name: e.target.value})}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={contactFormData.email}
                      onChange={(e) => setContactFormData({...contactFormData, email: e.target.value})}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                    <select
                      value={contactFormData.category}
                      onChange={(e) => setContactFormData({...contactFormData, category: e.target.value})}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={contactFormData.message}
                      onChange={(e) => setContactFormData({...contactFormData, message: e.target.value})}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Additional Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative"
        >
          <motion.div 
            className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"
            animate={{
              x: [0, 10, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full"
            animate={{
              x: [0, -15, 0],
              y: [0, 10, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Still can't find what you're looking for?</h2>
            <p className="text-blue-100 mb-8">
              Explore our documentation or get in touch with our support team for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-colors font-medium shadow-md"
              >
                <FiFileText className="text-lg" />
                Browse Documentation
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowContactForm(true)}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-colors font-medium shadow-md"
              >
                <FiMail className="text-lg" />
                Submit a Ticket
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}