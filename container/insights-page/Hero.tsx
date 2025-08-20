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
  FiFileText 
} from "react-icons/fi";

// Sample FAQ data (replace with your actual data)
const FaqItems = [
  {
    id: "1",
    question: "How do I create a course in Athena LMS?",
    answer: "To create a course, navigate to your instructor dashboard and click the 'Create New Course' button. You'll be guided through a step-by-step process to add content, set up assessments, and configure course settings.",
    category: "courses",
    links: [
      { id: "1-1", title: "Course Creation Guide", href: "/guides/course-creation" },
      { id: "1-2", title: "Video Tutorial", href: "/tutorials/course-setup" }
    ]
  },
  {
    id: "2",
    question: "What are the system requirements for Athena LMS?",
    answer: "Athena LMS works on all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using the latest browser versions. Mobile apps are available for iOS and Android devices.",
    category: "technical",
    links: [
      { id: "2-1", title: "System Requirements", href: "/system-requirements" },
      { id: "2-2", title: "Mobile App Download", href: "/mobile-app" }
    ]
  },
  {
    id: "3",
    question: "How do I reset my password?",
    answer: "Click on the 'Forgot Password' link on the login page. Enter your email address, and we'll send you a password reset link. If you're still having issues, contact our support team for assistance.",
    category: "account",
    links: [
      { id: "3-1", title: "Account Recovery", href: "/account/recovery" }
    ]
  },
  {
    id: "4",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. For enterprise customers, we also offer invoice-based billing with net-30 terms.",
    category: "billing",
    links: [
      { id: "4-1", title: "Billing & Payments", href: "/billing" },
      { id: "4-2", title: "Enterprise Pricing", href: "/enterprise" }
    ]
  },
  {
    id: "5",
    question: "How is my data secured?",
    answer: "We use industry-standard encryption, regular security audits, and comply with GDPR regulations. All data is stored on secure servers with 99.9% uptime guarantee and regular backups.",
    category: "security",
    links: [
      { id: "5-1", title: "Security Overview", href: "/security" },
      { id: "5-2", title: "Privacy Policy", href: "/privacy" }
    ]
  },
  {
    id: "6",
    question: "Can I integrate with other tools?",
    answer: "Yes, Athena LMS offers integrations with popular tools like Zoom, Google Drive, Microsoft Teams, and many others through our API and pre-built connectors.",
    category: "technical",
    links: [
      { id: "6-1", title: "Integrations", href: "/integrations" },
      { id: "6-2", title: "API Documentation", href: "/api-docs" }
    ]
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFaq, setActiveFaq] = useState(null);

  const categories = [
    { id: "all", title: "All FAQs", icon: <FiBookOpen /> },
    { id: "getting-started", title: "Getting Started", icon: <FiGlobe /> },
    { id: "account", title: "Account & Access", icon: <FiUsers /> },
    { id: "courses", title: "Courses & Content", icon: <FiBookOpen /> },
    { id: "technical", title: "Technical Support", icon: <FiMessageSquare /> },
    { id: "billing", title: "Billing & Plans", icon: <FiCreditCard /> },
    { id: "security", title: "Security & Privacy", icon: <FiLock /> },
  ];

  const filteredFaqs = FaqItems.filter(item => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 py-12">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-200/40 to-transparent -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full -translate-x-1/2 translate-y-1/2 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-8"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold font-FoundersGrotesk text-blue-900 mb-6"
          >
            How can we help?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-blue-700 max-w-3xl mx-auto font-NeueMontreal"
          >
            Find answers to common questions about Athena LMS. Our knowledge base is here to help you make the most of your learning experience.
          </motion.p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 text-xl" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 text-lg border border-blue-200 bg-white/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all ${activeCategory === category.id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-white/80 text-blue-700 border border-blue-200 hover:bg-blue-50 backdrop-blur-sm'}`}
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
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl font-bold text-blue-900 mb-6 font-FoundersGrotesk"
            >
              {filteredFaqs.length} {filteredFaqs.length === 1 ? 'result' : 'results'} {searchQuery && `for "${searchQuery}"`}
            </motion.h2>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <motion.div 
                    key={faq.id}
                    variants={itemVariants}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-blue-100 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <motion.button
                      onClick={() => toggleFaq(faq.id)}
                      whileHover={{ backgroundColor: "rgba(219, 234, 254, 0.3)" }}
                      className="w-full flex justify-between items-center p-6 text-left transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-blue-900 pr-4">{faq.question}</h3>
                      {activeFaq === faq.id ? (
                        <FiChevronUp className="text-blue-500 flex-shrink-0" />
                      ) : (
                        <FiChevronDown className="text-blue-500 flex-shrink-0" />
                      )}
                    </motion.button>
                    
                    <AnimatePresence>
                      {activeFaq === faq.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6 bg-blue-50/30"
                        >
                          <p className="text-blue-700">{faq.answer}</p>
                          {faq.links && faq.links.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-blue-200">
                              <h4 className="font-medium text-blue-900 mb-2">Related resources:</h4>
                              <div className="flex flex-wrap gap-2">
                                {faq.links.map((link) => (
                                  <motion.div
                                    key={link.id}
                                    whileHover={{ scale: 1.05 }}
                                  >
                                    <Link
                                      href={link.href}
                                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
                                    >
                                      {link.title}
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
                  className="text-center py-12 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200"
                >
                  <FiSearch className="text-4xl text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">No results found</h3>
                  <p className="text-blue-600">Try different keywords or browse all categories</p>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Support Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white h-fit sticky top-6 shadow-xl shadow-blue-500/30"
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Need more help?</h3>
              <p className="mb-6 opacity-90">Our support team is ready to assist you with any questions.</p>
              
              <div className="space-y-4">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-white text-blue-600 py-3 px-4 rounded-xl font-medium hover:bg-blue-50 transition-colors"
                >
                  <FiMail className="text-lg" />
                  Contact Support
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-blue-800 text-white py-3 px-4 rounded-xl font-medium hover:bg-blue-900 transition-colors"
                >
                  <FiCalendar className="text-lg" />
                  Schedule a Demo
                </motion.button>
              </div>
              
              <div className="mt-8 pt-6 border-t border-blue-500/30">
                <h4 className="font-medium mb-3">Popular resources</h4>
                <ul className="space-y-3">
                  <motion.li whileHover={{ x: 5 }}>
                    <Link href="#" className="opacity-90 hover:opacity-100 transition-opacity flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Getting Started Guide
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }}>
                    <Link href="#" className="opacity-90 hover:opacity-100 transition-opacity flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Instructor Handbook
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }}>
                    <Link href="#" className="opacity-90 hover:opacity-100 transition-opacity flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      System Requirements
                    </Link>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Help Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 md:p-12 text-white overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Still can't find what you're looking for?</h2>
            <p className="text-blue-100 mb-8">Explore our documentation or get in touch with our support team for personalized assistance.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-colors font-medium"
              >
                <FiFileText className="text-lg" />
                Browse Documentation
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-colors font-medium"
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