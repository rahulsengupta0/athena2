import React, { useState, useRef, useEffect } from "react";
import {
  FaRobot,
  FaBook,
  FaGraduationCap,
  FaComments,
  FaTools,
  FaArrowLeft,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
} from "react-icons/fa";

type FAQItem = {
  question: string;
  answer: string;
  icon: JSX.Element;
};

type Category = {
  name: string;
  icon: JSX.Element;
  faqs: FAQItem[];
};

const categories: Category[] = [
  {
    name: "Basic LMS",
    icon: <FaRobot className="text-blue-400" />,
    faqs: [
      {
        question: "What is an LMS?",
        answer:
          "An LMS, or Learning Management System, is a platform that helps you access, manage, and track online courses, assignments, and educational resources.",
        icon: <FaRobot className="text-blue-400" />,
      },
      {
        question: "How do I log in to the LMS?",
        answer:
          "Click the 'Login' button on the homepage and enter your registered email and password. If you're new, click 'Sign Up' first.",
        icon: <FaRobot className="text-blue-400" />,
      },
      {
        question: "I forgot my password. What should I do?",
        answer:
          "Click 'Forgot Password' on the login page and follow the instructions to reset via email.",
        icon: <FaRobot className="text-blue-400" />,
      },
    ],
  },
  {
    name: "Courses",
    icon: <FaBook className="text-blue-400" />,
    faqs: [
      {
        question: "How do I enroll in a course?",
        answer:
          "Go to 'Courses', choose your desired course, and click 'Enroll' or 'Start Course'.",
        icon: <FaBook className="text-blue-400" />,
      },
      {
        question: "Are the courses self-paced?",
        answer:
          "Yes! Most of our courses are self-paced so you can learn at your convenience.",
        icon: <FaBook className="text-blue-400" />,
      },
      {
        question: "Can I retake a course or quiz?",
        answer:
          "Yes, you can retake quizzes and review materials anytime unless restricted.",
        icon: <FaBook className="text-blue-400" />,
      },
    ],
  },
  {
    name: "Progress & Certification",
    icon: <FaGraduationCap className="text-blue-400" />,
    faqs: [
      {
        question: "How can I track my progress?",
        answer:
          "Open your dashboard to view progress bars or status for each course.",
        icon: <FaGraduationCap className="text-blue-400" />,
      },
      {
        question: "Will I get a certificate after completing a course?",
        answer:
          "Yes! A downloadable certificate will be available after completing requirements.",
        icon: <FaGraduationCap className="text-blue-400" />,
      },
    ],
  },
  {
    name: "Support & Communication",
    icon: <FaComments className="text-blue-400" />,
    faqs: [
      {
        question: "How can I contact my instructor?",
        answer:
          "Use the 'Ask Instructor' button or message them through the course page.",
        icon: <FaComments className="text-blue-400" />,
      },
      {
        question: "Where do I go for technical support?",
        answer:
          "Use the 'Help/Support' section in the LMS menu or live chat for assistance.",
        icon: <FaComments className="text-blue-400" />,
      },
    ],
  },
  {
    name: "Technical & Payment",
    icon: <FaTools className="text-blue-400" />,
    faqs: [
      {
        question: "What devices are supported?",
        answer:
          "Our LMS works on desktop, tablet, and mobile. Best experience on Chrome or Safari.",
        icon: <FaTools className="text-blue-400" />,
      },
      {
        question: "Is there a cost to use the LMS?",
        answer:
          "Some courses are free, while others may require payment (shown on course page).",
        icon: <FaTools className="text-blue-400" />,
      },
      {
        question: "How do I make a payment for a course?",
        answer:
          "You can pay securely using debit/credit cards through our payment gateway.",
        icon: <FaTools className="text-blue-400" />,
      },
    ],
  },
];

type Message = {
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
  id: string;
};

type ChatbotProps = {
  onClose?: () => void;
  className?: string;
};

const Chatbot: React.FC<ChatbotProps> = ({ onClose, className = "" }) => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      sender: "bot", 
      text: "Hello! I'm Athena, your LMS assistant. How can I help you today?", 
      timestamp: new Date(),
      id: "1"
    },
  ]);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new message if expanded
  useEffect(() => {
    if (chatBoxRef.current && !collapsed) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages, collapsed]);

  const simulateTyping = (callback: () => void, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      callback();
      setIsTyping(false);
    }, delay);
  };

  const selectCategory = (category: Category) => {
    setCurrentCategory(category);
    const userMessage: Message = {
      sender: "user",
      text: `I want to know about ${category.name}`,
      timestamp: new Date(),
      id: Date.now().toString()
    };
    
    setMessages((prev) => [...prev, userMessage]);
    
    simulateTyping(() => {
      const botMessage: Message = {
        sender: "bot",
        text: `You selected "${category.name}". Which question can I help you with?`,
        timestamp: new Date(),
        id: (Date.now() + 1).toString()
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  const selectQuestion = (faq: FAQItem) => {
    const userMessage: Message = {
      sender: "user",
      text: faq.question,
      timestamp: new Date(),
      id: Date.now().toString()
    };
    
    setMessages((prev) => [...prev, userMessage]);
    
    simulateTyping(() => {
      const botMessage: Message = {
        sender: "bot",
        text: faq.answer,
        timestamp: new Date(),
        id: (Date.now() + 1).toString()
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  };

  const goBack = () => {
    const userMessage: Message = {
      sender: "user",
      text: "Go back to categories",
      timestamp: new Date(),
      id: Date.now().toString()
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setCurrentCategory(null);
    
    simulateTyping(() => {
      const botMessage: Message = {
        sender: "bot",
        text: "Please select a category below.",
        timestamp: new Date(),
        id: (Date.now() + 1).toString()
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Filter FAQs based on search query
  const filteredCategories = categories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className={`flex flex-col bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden max-w-md w-full h-[600px] md:h-[520px] ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-full">
            <FaRobot className="text-xl" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Athena Assistant</h3>
            <p className="text-xs opacity-80">Online • Ready to help</p>
          </div>
        </div>
        
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Close Chatbot"
            className="text-white hover:bg-white/20 p-1 rounded-full transition-colors duration-200"
            title="Close Chatbot"
          >
            <FaTimes className="text-lg" />
          </button>
        )}
      </div>

      {/* Chat messages container */}
      <div
        ref={chatBoxRef}
        className={`flex-1 p-4 bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col gap-3 overflow-y-auto transition-all duration-300 ${
          collapsed ? "h-20" : "h-64 md:h-72"
        }`}
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex flex-col max-w-xs lg:max-w-md ${
              m.sender === "user" ? "self-end items-end" : "self-start items-start"
            } animate-fadeIn`}
          >
            <div
              className={`rounded-2xl px-4 py-3 shadow-sm ${
                m.sender === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none border border-blue-100"
              }`}
            >
              {m.text}
            </div>
            <span className={`text-xs mt-1 text-blue-700 opacity-70 ${m.sender === "user" ? "text-right" : "text-left"}`}>
              {formatTime(m.timestamp)}
            </span>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex self-start items-center gap-1 bg-white rounded-2xl px-4 py-3 shadow-sm border border-blue-100 animate-fadeIn">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        )}
      </div>

      {/* Collapse/expand toggle */}
      <div className="border-t border-blue-200 bg-white flex justify-center py-1">
        <button
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand chat" : "Collapse chat"}
          className="p-1 text-blue-600 hover:text-blue-800 transition-colors duration-200"
          title={collapsed ? "Expand chat" : "Collapse chat"}
        >
          {collapsed ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {/* Search box */}
      <div className="px-4 pt-3 bg-white border-t border-blue-200">
        <div className="relative mb-3">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-blue-400" />
          </div>
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-blue-800 placeholder-blue-400"
          />
        </div>
      </div>

      {/* Category/questions section */}
      <div className="p-4 bg-white border-t border-blue-200 overflow-y-auto">
        {currentCategory ? (
          <>
            <button
              onClick={goBack}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-3 transition-colors duration-200 font-medium text-sm"
              aria-label="Back to categories"
            >
              <FaArrowLeft /> Back to categories
            </button>
            <div className="space-y-2">
              {currentCategory.faqs.map((faq, idx) => (
                <button
                  key={idx}
                  onClick={() => selectQuestion(faq)}
                  className="w-full text-left p-3 rounded-lg border border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 flex items-start gap-3 group"
                  aria-label={faq.question}
                >
                  <span className="text-blue-500 mt-0.5 group-hover:scale-110 transition-transform">{faq.icon}</span>
                  <span className="font-medium text-blue-800 group-hover:text-blue-900">{faq.question}</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {filteredCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => selectCategory(cat)}
                className="p-3 rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center gap-2 bg-white hover:bg-blue-50 group"
                aria-label={cat.name}
              >
                <span className="text-2xl text-blue-500 group-hover:scale-110 transition-transform">{cat.icon}</span>
                <span className="font-medium text-blue-800 text-sm">{cat.name}</span>
                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">{cat.faqs.length} FAQs</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;