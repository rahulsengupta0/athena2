import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import Chatbot from "./Chatbot";

const FloatingChatbot: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button Icon */}
      {!open && (
        <button
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            background: "#007bff",
            color: "#fff",
            borderRadius: "50%",
            border: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            width: "60px",
            height: "60px",
            cursor: "pointer",
            zIndex: 1000,
            fontSize: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setOpen(true)}
          aria-label="Open Chatbot"
        >
          <FaRobot />
        </button>
      )}

      {/* Chatbot Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 1001,
            transition: "all 0.3s",
          }}
        >
          <div style={{ position: "relative" }}>
            <Chatbot />
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                background: "transparent",
                color: "#007bff",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              aria-label="Close Chatbot"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatbot;
