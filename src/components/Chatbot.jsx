import React, { useState } from "react";
import { motion } from "framer-motion";
import { marked } from "marked";
import DOMPurify from "dompurify";
import "./Chatbot.css";

export default function Chatbot({ prakriti, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: `Hi! I'm your Ayurveda assistant. Your prakriti is **${prakriti}**. Ask me anything!`,
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const userMsg = { sender: "user", text: userInput };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setLoading(true);
    console.log(userInput)

    try {
      const fullPrompt = `User's prakriti is ${prakriti}. ${userInput}`;

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: "Bearer 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",
          "HTTP-Referer": "<YOUR_SITE_URL>",
          "X-Title": "SiteName",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1:free",
          messages: [{ role: "user", content: fullPrompt }],
        }),
      });

      const data = await response.json();
      console.log(data)
      const markdown = data.choices?.[0]?.message?.content || "No response received.";
      const botMsg = { sender: "bot", text: markdown };
      console.log(markdown)
      console.log(botMsg)

      setMessages([...updatedMessages, botMsg]);
    } catch (err) {
      setMessages([
        ...updatedMessages,
        { sender: "bot", text: "⚠ Sorry, something went wrong." },
      ]);
    } finally {
      setUserInput("");
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <motion.div 
      className="chat-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <div className="chat-header">
        <h3 className="text-xl font-semibold text-white">Ayurveda Assistant</h3>
        <button 
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors"
          aria-label="Close chatbot"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender}`}>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(marked.parse(msg.text)),
              }}
            />
          </div>
        ))}
        {loading && <div className="message bot">Typing...</div>}
      </div>

      <div className="input-container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder={`Ask me something about your ${prakriti} prakriti...`}
          disabled={loading}
          className="w-full px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-dark-300 dark:text-white"
        />
        <button 
          onClick={sendMessage} 
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-lg font-medium transition-colors duration-200 disabled:opacity-50"
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </motion.div>
  );
} 