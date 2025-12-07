import React, { useState, useRef, useEffect } from "react";
import chatbotResponses from "./chatbotResponses";
import "./Chatbot.css";
import avatar from "../Assets/avatar.png";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm Sree's AI. How can I help? 🤖" }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startVoice = () => {
    if (recognitionRef.current) recognitionRef.current.start();
  };

  // --- Handle Replies ---
  const getReply = (text) => {
    const lower = text.toLowerCase();

    if (["hi", "hello", "hey"].some((w) => lower.includes(w))) return chatbotResponses.greeting;
    if (lower.includes("name") || lower.includes("who")) return chatbotResponses.about;
    if (lower.includes("email") || lower.includes("contact")) return chatbotResponses.email;
    if (lower.includes("resume") || lower.includes("cv")) return chatbotResponses.resume;
    if (lower.includes("github")) return chatbotResponses.github;
    if (lower.includes("linkedin")) return chatbotResponses.linkedin;
    if (lower.includes("skill") || lower.includes("stack")) return chatbotResponses.skills;
    if (lower.includes("project") || lower.includes("work")) return chatbotResponses.projects;

    // Project specifics
    if (lower.includes("skill connect")) return chatbotResponses.skillConnect;
    if (lower.includes("fashionista")) return chatbotResponses.fashionista;
    if (lower.includes("routemate")) return chatbotResponses.routeMate;
    if (lower.includes("healon")) return chatbotResponses.healon;
    if (lower.includes("nostra")) return chatbotResponses.nostra;
    if (lower.includes("portfolio")) return chatbotResponses.portfolio;

    // Achievements
    if (lower.includes("achievement") || lower.includes("certif")) return chatbotResponses.achievements;
    if (lower.includes("aws")) return chatbotResponses.aws;
    if (lower.includes("python")) return chatbotResponses.python;
    if (lower.includes("ai") || lower.includes("ml")) return chatbotResponses.aiml;
    if (lower.includes("web")) return chatbotResponses.webdev;

    // Education
    if (lower.includes("education") || lower.includes("college") || lower.includes("school") || lower.includes("study")) return chatbotResponses.education;

    if (lower.includes("interest")) return chatbotResponses.interest;
    if (lower.includes("joke")) return chatbotResponses.joke;
    if (lower.includes("thank")) return chatbotResponses.thanks;
    if (lower.includes("bye")) return chatbotResponses.bye;

    return chatbotResponses.confusedResponses[
      Math.floor(Math.random() * chatbotResponses.confusedResponses.length)
    ];
  };

  const typeMessage = (text) => {
    if (!text) return; // Safety check
    let index = -1;
    setMessages((prev) => [...prev, { sender: "bot", text: "" }]);

    const interval = setInterval(() => {
      index++;
      if (index === text.length) {
        clearInterval(interval);
        setIsTyping(false);
        return;
      }

      setMessages((prev) => {
        const newMessages = [...prev];
        const lastMsg = newMessages[newMessages.length - 1];
        lastMsg.text = text.substring(0, index + 1);
        return newMessages;
      });
    }, 30); // Typing speed
  };

  const sendMessage = (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = getReply(text);
      typeMessage(reply);
    }, 600);
  };

  return (
    <>
      {/* Floating Chat Icon */}
      {!isOpen && (
        <div className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          <img src={avatar} alt="Chatbot" className="chatbot-avatar" />
          <span>Chat with me</span>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatWindow">
          <div className="chatHeader">
            <div className="chatHeaderTitle">
              <span className="botAvatar">
                <img src={avatar} alt="Bot" className="header-avatar" />
              </span>
              <div>
                <strong>Sree's Assistant</strong>
                <div className="onlineStatus">Online</div>
              </div>
            </div>
            <button className="closeBtn" onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div className="chatBody">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="typing-indicator">
                <span></span><span></span><span></span>
              </div>
            )}

            <div ref={messagesEndRef}></div>
          </div>

          <div className="chatInput">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            />

            <button className="iconBtn" onClick={() => sendMessage(input)}>➤</button>
            <button className="iconBtn voiceBtn" onClick={startVoice}>🎤</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
