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

const categories = [
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

const Chatbot = ({ onClose, className = "" }) => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I'm Athena, your LMS assistant. How can I help you today?",
      timestamp: new Date(),
      id: "1",
    },
  ]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current && !collapsed) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages, collapsed]);

  const simulateTyping = (callback, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      callback();
      setIsTyping(false);
    }, delay);
  };

  const selectCategory = (category) => {
    setCurrentCategory(category);
    const userMessage = {
      sender: "user",
      text: `I want to know about ${category.name}`,
      timestamp: new Date(),
      id: Date.now().toString(),
    };

    setMessages((prev) => [...prev, userMessage]);

    simulateTyping(() => {
      const botMessage = {
        sender: "bot",
        text: `You selected "${category.name}". Which question can I help you with?`,
        timestamp: new Date(),
        id: (Date.now() + 1).toString(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  const selectQuestion = (faq) => {
    const userMessage = {
      sender: "user",
      text: faq.question,
      timestamp: new Date(),
      id: Date.now().toString(),
    };

    setMessages((prev) => [...prev, userMessage]);

    simulateTyping(() => {
      const botMessage = {
        sender: "bot",
        text: faq.answer,
        timestamp: new Date(),
        id: (Date.now() + 1).toString(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  };

  const goBack = () => {
    const userMessage = {
      sender: "user",
      text: "Go back to categories",
      timestamp: new Date(),
      id: Date.now().toString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setCurrentCategory(null);

    simulateTyping(() => {
      const botMessage = {
        sender: "bot",
        text: "Please select a category below.",
        timestamp: new Date(),
        id: (Date.now() + 1).toString(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.faqs.length > 0);

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 w-full max-w-md shadow-2xl border border-blue-300 rounded-xl transition-all duration-300 ${
        collapsed ? "h-16" : "h-[600px]"
      } bg-white flex flex-col ${className}`}
    >
      <div className="flex items-center justify-between p-4 bg-blue-100 border-b rounded-t-xl">
        <div className="flex items-center space-x-2">
          <FaRobot className="text-xl text-blue-500" />
          <span className="font-bold text-blue-800">Athena Chat</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-blue-600 hover:text-blue-800"
          >
            {collapsed ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          <button onClick={onClose} className="text-blue-600 hover:text-red-600">
            <FaTimes />
          </button>
        </div>
      </div>

      {!collapsed && (
        <div className="flex-1 flex flex-col">
          <div ref={chatBoxRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`p-3 rounded-lg text-sm shadow ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  }`}
                >
                  <div>{msg.text}</div>
                  <div className="text-xs mt-1 text-right opacity-60">{formatTime(msg.timestamp)}</div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="text-gray-500 italic text-sm">Athena is typing...</div>
            )}
          </div>

          {!currentCategory && (
            <div className="p-4 border-t">
              <div className="flex items-center mb-2">
                <FaSearch className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border rounded p-2 text-sm"
                />
              </div>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {filteredCategories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => selectCategory(cat)}
                    className="w-full flex items-center p-2 bg-blue-50 hover:bg-blue-100 rounded shadow-sm"
                  >
                    {cat.icon}
                    <span className="ml-2 text-sm font-medium">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentCategory && (
            <div className="p-4 border-t">
              <div className="flex items-center justify-between mb-2">
                <button
                  onClick={goBack}
                  className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                >
                  <FaArrowLeft className="mr-1" /> Back
                </button>
              </div>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {currentCategory.faqs.map((faq, index) => (
                  <button
                    key={index}
                    onClick={() => selectQuestion(faq)}
                    className="w-full flex items-center p-2 bg-blue-50 hover:bg-blue-100 rounded shadow-sm"
                  >
                    {faq.icon}
                    <span className="ml-2 text-sm">{faq.question}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
