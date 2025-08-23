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
  FiThumbsUp,
  FiThumbsDown,
} from "react-icons/fi";

// Sample FAQ data (unchanged)
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
      { id: "4-1", title: "Billing &amp; Payments", href: "/billing" },
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

// Difficulty badges with colors and icons (unchanged)
const difficultyLevels = {
  beginner: { label: "Beginner", color: "bg-green-100 text-green-800", icon: "🌱" },
  intermediate: { label: "Intermediate", color: "bg-blue-100 text-blue-800", icon: "🚀" },
  advanced: { label: "Advanced", color: "bg-purple-100 text-purple-500", icon: "🏆" },
};

// Category colors for pills (unchanged)
const categoryColors: Record<string, string> = {
  account: "bg-pink-100 text-pink-700",
  courses: "bg-green-100 text-green-700",
  technical: "bg-blue-100 text-blue-700",
  billing: "bg-yellow-100 text-yellow-700",
  security: "bg-purple-100 text-purple-700",
};

export default function Hero() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
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

  // Voice search state controls
  const [isListening, setIsListening] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0); // 0 to 1

  const placeholders = [
    "Try: 'How to reset my password?'",
    "Try: 'What are system requirements?'",
    "Try: 'How to create a course?'",
  ];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Toggle category multi-select
  const toggleCategory = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  // Filter categories and FAQs (unchanged)
  const allCategories = Array.from(new Set(FaqItems.map((item) => item.category)));
  const availableCategories = [
    { id: "all", title: "All FAQs", icon: <FiBookOpen />, count: FaqItems.length },
    ...allCategories.map((category) => {
      const categoryIcon =
        category === "account"
          ? <FiUsers />
          : category === "courses"
          ? <FiBookOpen />
          : category === "technical"
          ? <FiGlobe />
          : category === "billing"
          ? <FiCreditCard />
          : category === "security"
          ? <FiLock />
          : <FiHelpCircle />;
      return {
        id: category,
        title: category.charAt(0).toUpperCase() + category.slice(1),
        icon: categoryIcon,
        count: FaqItems.filter((item) => item.category === category).length,
      };
    }),
  ];

  const filteredFaqs = FaqItems.filter(
    (item) =>
      (selectedCategories.length === 0 || selectedCategories.includes(item.category)) &&
      (searchQuery === "" ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const handleHelpfulFeedback = (id: string, isHelpful: boolean) => {
    setHelpfulFeedback((prev) => ({ ...prev, [id]: isHelpful }));
  };

  // Voice search with recording animation using Web Audio API for volume
  const handleVoiceSearch = () => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      alert("Your browser does not support voice search.");
      return;
    }
    const SpeechRecognition =
      // @ts-ignore
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    let audioContext: AudioContext | null = null;
    let analyser: AnalyserNode | null = null;
    let microphone: MediaStreamAudioSourceNode | null = null;
    let animationId: number | null = null;

    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => {
      setIsListening(true);
      // Setup AudioContext for volume analysis
      audioContext = new AudioContext();
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        microphone = audioContext!.createMediaStreamSource(stream);
        analyser = audioContext!.createAnalyser();
        analyser.fftSize = 256;
        microphone.connect(analyser);

        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        const updateVolume = () => {
          if (analyser) {
            analyser.getByteFrequencyData(dataArray);
            let values = 0;
            for (let i = 0; i < dataArray.length; i++) {
              values += dataArray[i];
            }
            let average = values / dataArray.length;
            setVolumeLevel(Math.min(average / 128, 1)); // normalize 0-1
          }
          animationId = requestAnimationFrame(updateVolume);
        };
        updateVolume();
      });
    };

    recognition.onresult = (event: any) => {
      setSearchQuery(event.results[0][0].transcript);
    };

    recognition.onerror = () => {
      setIsListening(false);
      setVolumeLevel(0);
      if (audioContext) audioContext.close();
      if (animationId) cancelAnimationFrame(animationId);
    };

    recognition.onend = () => {
      setIsListening(false);
      setVolumeLevel(0);
      if (audioContext) audioContext.close();
      if (animationId) cancelAnimationFrame(animationId);
    };

    recognition.start();
  };

  // Animation variants (unchanged)
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
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    if (searchQuery) {
      setActiveFaq(null);
    }
  }, [searchQuery]);

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 relative overflow-hidden">
      {/* Upper section with background video and overlay */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/herofaq.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Light blue overlay */}
          <div className="absolute inset-0 bg-blue-400 bg-opacity-30"></div>

          {/* Content container with padding */}
          <div className="relative z-10 py-20 px-6 sm:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0">
            {/* Left side: Heading and subheading*/}
            <div className="text-white max-w-lg md:max-w-xl lg:max-w-2xl text-left flex-shrink-0">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-lg"
              >
                How can we help?
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-4 text-lg sm:text-xl md:text-2xl max-w-md drop-shadow-md"
              >
                Find answers to common questions about Athena LMS. Our knowledge base is here to help you make the most of your learning experience.
              </motion.p>
            </div>

            {/* Center: Search bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-grow max-w-xl mx-auto md:mx-0"
            >
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-xl" />
                <input
                  type="text"
                  placeholder={placeholders[placeholderIndex]}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-16 py-4 text-lg rounded-2xl focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent shadow-lg text-gray-900"
                  aria-label="Search FAQs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-12 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200"
                    aria-label="Clear search"
                  >
                    <FiX size={20} />
                  </button>
                )}

                {/* Voice Search Button with Recording Animation */}
                <button
                  onClick={handleVoiceSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center text-white hover:text-red-400 transition-colors"
                  aria-label={isListening ? "Stop voice search" : "Start voice search"}
                  type="button"
                >
                  <motion.div
                    className={`rounded-full p-2`}
                    animate={{
                      scale: isListening ? 1 + volumeLevel * 0.6 : 1,
                      boxShadow: isListening
                        ? `0 0 12px ${volumeLevel * 15}px rgba(220,38,38,${volumeLevel.toFixed(2)})`
                        : "none",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 ${isListening ? "fill-red-600" : "stroke-current"}`}
                      fill={isListening ? "red" : "none"}
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 1v11m0 0a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v3a3 3" />
                      <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
                      <line x1="12" y1="19" x2="12" y2="23" />
                      <line x1="8" y1="23" x2="16" y2="23" />
                    </svg>
                  </motion.div>
                </button>
              </div>

              {/* Search suggestions */}
              {searchQuery && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 right-0 bg-white mt-2 rounded-2xl shadow-lg border border-slate-200 overflow-hidden z-20 text-gray-900"
                >
                  {FaqItems.filter(
                    (item) =>
                      item.question.toLowerCase().includes(searchQuery.toLowerCase()) &&
                      !filteredFaqs.includes(item)
                  )
                    .slice(0, 3)
                    .map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setSearchQuery(item.question);
                          setSelectedCategories([item.category]);
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
          </div>
        </div>
      </div>

      {/* Rest of the content unchanged */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Category Filter Pills with Multi-select and FAQ Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {availableCategories.map((category) => (
            <div key={category.id} className="relative group">
              <motion.button
                onClick={() => {
                  if (category.id === "all") {
                    setSelectedCategories([]); // Clear all on clicking "All FAQs"
                  } else {
                    toggleCategory(category.id);
                  }
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all select-none ${
                  (category.id === "all"
                    ? selectedCategories.length === 0
                    : selectedCategories.includes(category.id))
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-sm"
                }`}
                aria-pressed={category.id === "all" ? selectedCategories.length === 0 : selectedCategories.includes(category.id)}
                aria-label={`Filter by ${category.title}`}
                type="button"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring" }}
                  className="flex-shrink-0"
                >
                  {category.icon}
                </motion.div>
                <span
                  className={`font-medium px-3 py-1 rounded-full text-sm font-medium ${
                    category.id === "all"
                      ? ""
                      : categoryColors[category.id] || "bg-gray-100 text-gray-700"
                  }`}
                >
                  {category.title}
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    (category.id === "all"
                      ? selectedCategories.length === 0
                      : selectedCategories.includes(category.id))
                      ? "bg-white/20"
                      : "bg-slate-100"
                  }`}
                >
                  {category.count}
                </span>
              </motion.button>

              {/* FAQ Preview Cards on hover (except All) */}
              {category.id !== "all" && (
                <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-xl p-4 rounded-xl w-72 z-30 pointer-events-none">
                  {FaqItems.filter((f) => f.category === category.id)
                    .slice(0, 2)
                    .map((faq) => (
                      <p key={faq.id} className="text-sm text-slate-700 mb-2 truncate">
                        • {faq.question}
                      </p>
                    ))}
                  <Link
                    href={`#`}
                    className="text-blue-600 text-sm select-text cursor-pointer"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    View More →
                  </Link>
                </div>
              )}
            </div>
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
                      aria-expanded={activeFaq === faq.id}
                      aria-controls={`faq-content-${faq.id}`}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`text-xs font-medium px-2 py-1 rounded-full ${
                              difficultyLevels[faq.difficulty as keyof typeof difficultyLevels]?.color
                            }`}
                          >
                            {
                              difficultyLevels[faq.difficulty as keyof typeof difficultyLevels]
                                ?.icon
                            }{" "}
                            {
                              difficultyLevels[faq.difficulty as keyof typeof difficultyLevels]
                                ?.label
                            }
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
                          id={`faq-content-${faq.id}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="px-6 pb-6 bg-slate-50"
                        >
                          <p className="text-slate-700 mb-4">{faq.answer}</p>
                          {/* Helpful feedback section */}
                          <div className="mt-6 pt-4 border-t border-slate-200">
                            <p className="text-sm font-medium text-slate-700 mb-3">
                              Was this helpful?
                            </p>
                            <div className="flex gap-3">
                              {helpfulFeedback[faq.id] === undefined ? (
                                <>
                                  <button
                                    onClick={() => handleHelpfulFeedback(faq.id, true)}
                                    className="flex items-center gap-1 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm hover:bg-green-50 hover:text-green-700 transition-colors"
                                    aria-label="Yes, this was helpful"
                                  >
                                    <FiThumbsUp className="text-sm" /> Yes
                                  </button>
                                  <button
                                    onClick={() => handleHelpfulFeedback(faq.id, false)}
                                    className="flex items-center gap-1 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm hover:bg-red-50 hover:text-red-700 transition-colors"
                                    aria-label="No, this was not helpful"
                                  >
                                    <FiThumbsDown className="text-sm" /> No
                                  </button>
                                </>
                              ) : (
                                <div className="text-sm text-slate-600">
                                  {helpfulFeedback[faq.id]
                                    ? "Thank you for your feedback! 👍"
                                    : "We're sorry to hear that. Consider contacting our support for more help."}
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
                                      target="_blank"
                                      rel="noopener noreferrer"
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
                      setSelectedCategories([]);
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear Search
                  </button>
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
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Need more help?</h3>
              <p className="mb-6 opacity-90">Our support team is ready to assist you with any questions.</p>

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
                  {[
                    "Getting Started Guide",
                    "Instructor Handbook",
                    "System Requirements",
                    "Video Tutorials",
                  ].map((item, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
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
                    aria-label="Close contact form"
                  >
                    <FiX size={24} />
                  </button>
                </div>

                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Contact form submitted:", contactFormData);
                    setShowContactForm(false);
                    setContactFormData({ name: "", email: "", message: "", category: "general" });
                    alert("Thank you for your message! We'll get back to you soon.");
                  }}
                >
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                    <input
                      type="text"
                      required
                      value={contactFormData.name}
                      onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={contactFormData.email}
                      onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                    <select
                      value={contactFormData.category}
                      onChange={(e) => setContactFormData({ ...contactFormData, category: e.target.value })}
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
                      onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
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

        {/* Additional Help Section - unchanged */}
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
              ease: "easeInOut",
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
              ease: "easeInOut",
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

      {/* Floating Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 z-50"
        aria-label="Live chat support"
      >
        <FiMessageSquare size={24} />
      </motion.button>
    </section>
  );
}
