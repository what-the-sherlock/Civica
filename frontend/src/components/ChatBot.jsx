import React, { useState } from "react";

function ChatBot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;
    
    const userMessage = { sender: "You", text: message };
    setChat([...chat, userMessage]);

    try {
      const res = await fetch("http://localhost:5000/search-case-law", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, sessionId: "123456" }),
      });
      
      const data = await res.json();
      const botMessage = { sender: "Bot", text: data.reply || "No response" };
      setChat([...chat, userMessage, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
    setMessage("");
  };

  return (
    <div style={{ width: "100%", height: "100%", margin: "auto", padding: "20px", borderRadius: "10px", backgroundColor: "#EFDCAB", display: "flex", flexDirection: "column", alignItems: "center", marginTop:"80px" }}>
      <div style={{ width: "100%", height: "500px", overflowY: "auto", padding: "10px", borderBottom: "2px solid #D98324", backgroundColor: "#443627", color: "#D98324", borderRadius: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {chat.map((msg, index) => (
          <div key={index} style={{
            alignSelf: msg.sender === "You" ? "flex-end" : "flex-start",
            backgroundColor: msg.sender === "You" ? "#D98324" : "#665040",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            maxWidth: "70%",
            textAlign: "left"
          }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", width: "100%", marginTop: "10px" }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me anything..."
          style={{ flex: 1, padding: "10px", border: "2px solid #443627", backgroundColor: "#D98324", color: "white", borderRadius: "5px" }}
        />
        <button onClick={sendMessage} style={{ marginLeft: "10px", padding: "10px 15px", backgroundColor: "#443627", color: "#D98324", border: "none", borderRadius: "5px", cursor: "pointer" }}>Send</button>
      </div>
    </div>
  );
}

export default ChatBot;
