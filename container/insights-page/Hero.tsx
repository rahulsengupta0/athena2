"use client";
import Link from "next/link";
import { useState } from "react";
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
  FiExternalLink
} from "react-icons/fi";

// Sample FAQ data
const FaqItems = [
  {
    id: "1",
    question: "How do I create a course in Athena LMS?",
    answer:
      "To create a course, navigate to your instructor dashboard and click the 'Create New Course' button. You'll be guided through a step-by-step process to add content, set up assessments, and configure course settings.",
    category: "courses",
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
    links: [{ id: "3-1", title: "Account Recovery", href: "/account/recovery" }],
  },
  {
    id: "4",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers for annual plans. For enterprise customers, we also offer invoice-based billing with net-30 terms.",
    category: "billing",
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
    links: [
      { id: "6-1", title: "Integrations", href: "/integrations" },
      { id: "6-2", title: "API Documentation", href: "/api-docs" },
    ],
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const categories = [
    { id: "all", title: "All FAQs", icon: <FiBookOpen /> },
    { id: "getting-started", title: "Getting Started", icon: <FiGlobe /> },
    { id: "account", title: "Account & Access", icon: <FiUsers /> },
    { id: "courses", title: "Courses & Content", icon: <FiBookOpen /> },
    { id: "technical", title: "Technical Support", icon: <FiMessageSquare /> },
    { id: "billing", title: "Billing & Plans", icon: <FiCreditCard /> },
    { id: "security", title: "Security & Privacy", icon: <FiLock /> },
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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-10 left-10 w-72 h-72 bg-blue-200/10 rounded-full -z-10"
        animate={{
          x: [0, 20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200/10 rounded-full -z-10"
        animate={{
          x: [0, -25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 bg-blue-300/30 rounded-full -z-10 ${i % 2 === 0 ? 'animate-pulse' : ''}`}
          style={{
            top: `${20 + i * 15}%`,
            left: `${5 + i * 10}%`,
          }}
          variants={floatingVariants}
          animate="animate"
        />
      ))}
      
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i + 5}
          className={`absolute w-3 h-3 bg-indigo-300/20 rounded-full -z-10 ${i % 2 === 0 ? 'animate-pulse' : ''}`}
          style={{
            top: `${10 + i * 12}%`,
            right: `${5 + i * 8}%`,
          }}
          variants={floatingVariants}
          animate="animate"
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
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
            className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-3xl mb-6"
          >
            <FiHelpCircle className="text-4xl text-blue-600" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6"
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

        {/* Search Bar */}
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
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
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
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ List */}
          <div className="lg:col-span-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl font-bold text-slate-900 mb-6"
            >
              {filteredFaqs.length} {filteredFaqs.length === 1 ? "result" : "results"}{" "}
              {searchQuery && `for "${searchQuery}"`}
            </motion.h2>

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
                    className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <motion.button
                      onClick={() => toggleFaq(faq.id)}
                      whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                      className="w-full flex justify-between items-center p-6 text-left transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                      {activeFaq === faq.id ? (
                        <FiChevronUp className="text-blue-500 flex-shrink-0" />
                      ) : (
                        <FiChevronDown className="text-slate-400 flex-shrink-0" />
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
                          {faq.links && faq.links.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-slate-200">
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
                  <p className="text-slate-600">Try different keywords or browse all categories</p>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Support Sidebar */}
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
                  {["Getting Started Guide", "Instructor Handbook", "System Requirements"].map((item, index) => (
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
            </div>
          </motion.div>
        </div>

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
