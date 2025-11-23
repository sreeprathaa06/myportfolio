import React, { useState, useRef, useEffect } from "react";
import chatbotResponses from "./chatbotResponses";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi, I'm Sree's AI assistant 🤖 How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  // --- Auto Scroll ---
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // --- Voice Recognition Setup ---
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recog = new SpeechRecognition();
      recog.lang = "en-US";

      recog.onresult = (event) => {
        const voiceInput = event.results[0][0].transcript;
        sendMessage(voiceInput);
      };

      recognitionRef.current = recog;
    }
  }, []);

  const startVoice = () => {
    if (recognitionRef.current) recognitionRef.current.start();
  };

  // --- Handle Replies ---
  const getReply = (text) => {
    const lower = text.toLowerCase();

    if (["hi", "hello", "hey"].some((w) => lower.includes(w)))
      return chatbotResponses.greeting;

    if (lower.includes("your name") || lower.includes("who are you"))
      return chatbotResponses.about;

    if (lower.includes("email")) return chatbotResponses.email;

    if (lower.includes("resume")) return chatbotResponses.resume;

    if (lower.includes("linkedin")) return chatbotResponses.linkedin;

    if (lower.includes("github")) return chatbotResponses.github;

    if (lower.includes("skill")) return chatbotResponses.skills;

    if (lower.includes("project")) return chatbotResponses.projects;

    if (lower.includes("domain") || lower.includes("interest"))
      return chatbotResponses.interest;

    if (lower.includes("joke")) return chatbotResponses.joke;

    if (lower.includes("thank")) return chatbotResponses.thanks;

    if (lower.includes("career"))
      return chatbotResponses.careerAdvice;

    if (lower.includes("bye")) return chatbotResponses.goodbye;

    return chatbotResponses.confusedResponses[
      Math.floor(Math.random() * chatbotResponses.confusedResponses.length)
    ];
  };

  const sendMessage = (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInput("");

    setIsTyping(true);

    setTimeout(() => {
      const reply = getReply(text);
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Floating Chat Icon */}
      {!isOpen && (
        <div className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          💬 <span className="chatbot-label">Chat with Sree</span>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatWindow">
          <div className="chatHeader">
            <strong>💬 Chat with Sree</strong>
            <button className="closeBtn" onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>

          <div className="chatBody">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}

            {isTyping && <div className="typing">Sree is typing...</div>}

            <div ref={messagesEndRef}></div>
          </div>

          <div className="chatInput">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            />

            <button className="sendBtn" onClick={() => sendMessage(input)}>
              ➤
            </button>

            <button className="voiceBtn" onClick={startVoice}>
              🎤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
