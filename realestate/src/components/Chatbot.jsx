import { useState, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";

// Function to generate a response based on the user's message
const getResponse = (msg) => {
    const lowerMsg = msg.toLowerCase(); // Normalize to lowercase
  
    if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
      return "Hi there! How can I help you today?";
    }
    if (lowerMsg.includes("hours")) {
      return "We are open from 9 AM to 6 PM, Monday to Friday.";
    }
    if (lowerMsg.includes("location") || lowerMsg.includes("address")) {
      return "Swarnagiri, Naraganhalli, en route to Hirekolale Lake, Chikkamagaluru";
    }
    if (lowerMsg.includes("thank you") || lowerMsg.includes("thanks")) {
      return "You're welcome! Let me know if you need anything else.";
    }
    if (lowerMsg.includes("help") || lowerMsg.includes("support")) {
      return "Sure, I can help! What do you need assistance with?";
    }
    if (lowerMsg.includes("contact")) {
      return "You can contact us via email at info@leelaventures.com or call us at +91 9663366119.";
    }
    return "I'm not sure I understand. Can you please rephrase your question?";
  };
  

export default function Chatbot() {
  const [isVisible, setIsVisible] = useState(false); // Tracks chatbot window visibility
  const [iconVisible, setIconVisible] = useState(false); // Tracks visibility of the icon
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I help you today?", type: "bot" },
  ]);
  const [input, setInput] = useState("");

  // Detect scroll position and toggle visibility of the chat icon
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIconVisible(true); // Show the icon when scrolled down past 500px
      } else {
        setIconVisible(false); // Hide the icon when scrolled above 500px
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle sending a message
  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user message to the messages array
    setMessages([...messages, { text: input, type: "user" }]);
    setInput("");

    // Get bot's response using the getResponse function
    const botResponse = getResponse(input);

    // Add bot's response to the messages after a delay to simulate typing
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: botResponse, type: "bot" },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Icon */}
      {iconVisible && (
        <div className="fixed md:bottom-32 right-3 bottom-24 md:right-10 z-50">
          <button
            onClick={() => setIsVisible(!isVisible)} // Toggle the chatbot visibility on click
            className="bg-[#0D542B] cursor-pointer text-white p-3 rounded-full shadow-lg hover:bg-[#fb9906] transition"
          >
            <MessageSquare className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Chatbot Window */}
      {isVisible && (
        <div className="fixed md:bottom-6 bottom-40 right-10 md:right-6 z-50 w-full max-w-xs md:w-80 h-96 bg-white shadow-xl rounded-lg flex flex-col border border-gray-300">
          <div className="flex justify-between items-center p-3 bg-[#0D542B] text-white rounded-t-lg">
            <h2 className="font-semibold">Chat with us</h2>
            <button onClick={() => setIsVisible(false)}>
              <X className="w-5 h-5 cursor-pointer" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md max-w-xs ${
                  msg.type === "user"
                    ? "bg-blue-100 self-end ml-auto"
                    : "bg-gray-100 self-start mr-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none"
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-[#0D542B] text-white px-3 py-1 rounded hover:bg-[#0D542B] cursor-pointer"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
