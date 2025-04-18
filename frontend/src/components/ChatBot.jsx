import React, { useState, useEffect, useRef } from "react";

function ChatBot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { sender: "You", text: message };
    setChat((prevChat) => [...prevChat, userMessage]);
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.URL}/legal-expert`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      const botMessage = {
        sender: "Bot",
        text: formatReply(data.reply) || "No response",
      };

      setChat((prevChat) => [...prevChat, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      setChat((prevChat) => [
        ...prevChat,
        { sender: "Bot", text: <p>Error: Unable to get a response.</p> },
      ]);
    }

    setMessage("");
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  // Scroll to bottom when new message added
  useEffect(() => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chat]);

  const formatReply = (reply) => {
    const lines = reply.split("\n");
    const elements = [];
  
    lines.forEach((line, index) => {
      const trimmed = line.trim();
  
      // Bold section headers like: **Header:**
      if (/^\*\*(.+?)\*\*$/.test(trimmed)) {
        elements.push(
          <h3 key={index} className="text-xl font-bold mt-4 mb-2 text-[#D98324]">
            {trimmed.replace(/\*\*/g, "")}
          </h3>
        );
      }
      // Bullet points
      else if (trimmed.startsWith("*")) {
        elements.push(
          <li
            key={index}
            className="text-lg ml-5 list-disc"
            dangerouslySetInnerHTML={{
              __html: trimmed
                .replace(/^\*\s*/, "") // remove leading *
                .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), // make bold
            }}
          />
        );
      }
      // Paragraphs
      else if (trimmed) {
        elements.push(
          <p
            key={index}
            className="mb-2 text-lg"
            dangerouslySetInnerHTML={{
              __html: trimmed.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"),
            }}
          />
        );
      }
    });
  
    return <ul className="mb-4">{elements}</ul>;
  };
  

  return (
    <div className="w-full h-full pt-25 flex flex-col items-center p-5 bg-[#EFDCAB]">
      <div
        ref={chatContainerRef}
        className="w-full h-[500px] overflow-y-auto p-5 bg-[#443627] text-[#D98324] rounded-lg flex flex-col gap-3 shadow-inner border border-[#D98324]"
      >
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`${
              msg.sender === "You"
                ? "self-end bg-[#D98324] text-[#443627]"
                : "self-start bg-[#5C4B3C] text-[#EFDCAB]"
            } p-3 rounded-xl max-w-[75%] shadow-md transition-all`}
          >
            <strong>{msg.sender}:</strong>{" "}
            <div className="mt-1">{msg.text}</div>
          </div>
        ))}
        {loading && <div className="text-center text-[#D98324] italic">Thinking...</div>}
      </div>

      <div className="flex w-full mt-3">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask a legal question..."
          className="flex-1 p-3  bg-[#D98324] text-[#443627] rounded-xl shadow-inner placeholder:text-[#443627] focus:outline-none focus:ring-2 focus:ring-[#D98324]"
        />
        <button
          onClick={sendMessage}
          className="ml-3 p-3 bg-[#D98324] text-white rounded-xl shadow-md hover:bg-[#b46516] transition-colors"
        >
          Send
        </button>
      </div>

    </div>
  );
}

export default ChatBot;
