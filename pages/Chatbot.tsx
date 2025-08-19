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
    icon: <FaRobot />,
    faqs: [
      {
        question: "What is an LMS?",
        answer:
          "An LMS, or Learning Management System, is a platform that helps you access, manage, and track online courses, assignments, and educational resources.",
        icon: <FaRobot />,
      },
      {
        question: "How do I log in to the LMS?",
        answer:
          "Click the 'Login' button on the homepage and enter your registered email and password. If you’re new, click 'Sign Up' first.",
        icon: <FaRobot />,
      },
      {
        question: "I forgot my password. What should I do?",
        answer:
          "Click 'Forgot Password' on the login page and follow the instructions to reset via email.",
        icon: <FaRobot />,
      },
    ],
  },
  {
    name: "Courses",
    icon: <FaBook />,
    faqs: [
      {
        question: "How do I enroll in a course?",
        answer:
          "Go to 'Courses', choose your desired course, and click 'Enroll' or 'Start Course'.",
        icon: <FaBook />,
      },
      {
        question: "Are the courses self-paced?",
        answer:
          "Yes! Most of our courses are self-paced so you can learn at your convenience.",
        icon: <FaBook />,
      },
      {
        question: "Can I retake a course or quiz?",
        answer:
          "Yes, you can retake quizzes and review materials anytime unless restricted.",
        icon: <FaBook />,
      },
    ],
  },
  {
    name: "Progress & Certification",
    icon: <FaGraduationCap />,
    faqs: [
      {
        question: "How can I track my progress?",
        answer:
          "Open your dashboard to view progress bars or status for each course.",
        icon: <FaGraduationCap />,
      },
      {
        question: "Will I get a certificate after completing a course?",
        answer:
          "Yes! A downloadable certificate will be available after completing requirements.",
        icon: <FaGraduationCap />,
      },
    ],
  },
  {
    name: "Support & Communication",
    icon: <FaComments />,
    faqs: [
      {
        question: "How can I contact my instructor?",
        answer:
          "Use the 'Ask Instructor' button or message them through the course page.",
        icon: <FaComments />,
      },
      {
        question: "Where do I go for technical support?",
        answer:
          "Use the 'Help/Support' section in the LMS menu or live chat for assistance.",
        icon: <FaComments />,
      },
    ],
  },
  {
    name: "Technical & Payment",
    icon: <FaTools />,
    faqs: [
      {
        question: "What devices are supported?",
        answer:
          "Our LMS works on desktop, tablet, and mobile. Best experience on Chrome or Safari.",
        icon: <FaTools />,
      },
      {
        question: "Is there a cost to use the LMS?",
        answer:
          "Some courses are free, while others may require payment (shown on course page).",
        icon: <FaTools />,
      },
      {
        question: "How do I make a payment for a course?",
        answer:
          "You can pay securely using debit/credit cards through our payment gateway.",
        icon: <FaTools />,
      },
    ],
  },
];

type Message = {
  sender: "user" | "bot";
  text: string;
};

type ChatbotProps = {
  onClose?: () => void; // optional callback to close chatbot from parent
};

const Chatbot: React.FC<ChatbotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hello! Please select a category to get started." },
  ]);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new message if expanded
  useEffect(() => {
    if (chatBoxRef.current && !collapsed) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages, collapsed]);

  const selectCategory = (category: Category) => {
    setCurrentCategory(category);
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: `I want to know about ${category.name}` },
      {
        sender: "bot",
        text: `You selected "${category.name}". Which question can I help you with?`,
      },
    ]);
  };

  const selectQuestion = (faq: FAQItem) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: faq.question },
      { sender: "bot", text: faq.answer },
    ]);
  };

  const goBack = () => {
    setCurrentCategory(null);
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: "Go back to categories" },
      { sender: "bot", text: "Please select a category below." },
    ]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <FaRobot />
          <span style={{ fontSize: "1.25rem", fontWeight: "600" }}>
            LMS Assistant
          </span>
        </div>

        {/* Close button */}
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Close Chatbot"
            style={styles.closeButton}
            title="Close Chatbot"
          >
            <FaTimes />
          </button>
        )}
      </div>

      {/* Chat messages container */}
      <div
        style={{
          ...styles.chatBox,
          height: collapsed ? 80 : 360, // adjust heights as needed for effect
          transition: "height 0.4s ease",
          overflowY: collapsed ? "hidden" : "auto",
        }}
        ref={chatBoxRef}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              ...styles.message,
              alignSelf: m.sender === "user" ? "flex-end" : "flex-start",
              background: m.sender === "user" ? "#007bff" : "#f1f1f1",
              color: m.sender === "user" ? "#fff" : "#000",
            }}
          >
            {m.text}
          </div>
        ))}
      </div>

      {/* Collapse/expand toggle button */}
      <div style={styles.toggleContainer}>
        <button
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand chat" : "Collapse chat"}
          style={styles.toggleButton}
          title={collapsed ? "Expand chat" : "Collapse chat"}
        >
          {collapsed ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {/* Category/questions section */}
      <div style={styles.inputBox}>
        {currentCategory ? (
          <>
            <button
              style={styles.backButton}
              onClick={goBack}
              aria-label="Back to categories"
            >
              <FaArrowLeft /> Back
            </button>
            <div style={styles.questionsList}>
              {currentCategory.faqs.map((faq, idx) => (
                <button
                  key={idx}
                  style={styles.questionButton}
                  onClick={() => selectQuestion(faq)}
                  aria-label={faq.question}
                >
                  {faq.icon} {faq.question}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div style={styles.categoriesList}>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                style={styles.categoryButton}
                onClick={() => selectCategory(cat)}
                aria-label={cat.name}
              >
                {cat.icon}
                <span style={{ marginLeft: "6px" }}>{cat.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: "420px",
    height: "520px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#fff",
  },
  header: {
    height: 52,
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "0 12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    userSelect: "none",
    fontWeight: 600,
    fontSize: 18,
  },
  closeButton: {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: 24,
    cursor: "pointer",
  },
  chatBox: {
    flexShrink: 0,
    padding: 12,
    backgroundColor: "#fafafa",
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  message: {
    padding: "10px 14px",
    borderRadius: 16,
    maxWidth: "75%",
    fontSize: 16,
    wordBreak: "break-word",
  },
  toggleContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderTop: "1px solid #ccc",
  },
  toggleButton: {
    background: "transparent",
    border: "none",
    padding: "4px 8px",
    cursor: "pointer",
    fontSize: 22,
    color: "#007bff",
  },
  inputBox: {
    padding: 12,
    borderTop: "1px solid #ccc",
    backgroundColor: "#fff",
    flexGrow: 1,
    overflowY: "auto",
  },
  categoriesList: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: 12,
  },
  categoryButton: {
    flex: "1 1 45%",
    fontSize: 16,
    cursor: "pointer",
    padding: "10px 14px",
    borderRadius: 8,
    border: "1px solid #007bff",
    backgroundColor: "#eef6ff",
    color: "#007bff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    transition: "background-color 0.2s",
  },
  backButton: {
    marginBottom: 8,
    backgroundColor: "#eaeaea",
    border: "none",
    borderRadius: 6,
    padding: "6px 10px",
    fontSize: 14,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    userSelect: "none",
  },
  questionsList: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    maxHeight: 120,
    overflowY: "auto",
  },
  questionButton: {
    cursor: "pointer",
    padding: "10px 14px",
    borderRadius: 8,
    border: "1px solid #ccc",
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    gap: 10,
    userSelect: "none",
  },
};

export default Chatbot;
