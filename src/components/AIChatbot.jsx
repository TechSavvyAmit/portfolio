import { useState } from "react";
import { sendChatMessage } from "../services/chatService";

function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [messages, setMessages] = useState([
        {
            role: "assistant",
            text: "Hi 👋 I'm Amit's AI Assistant. Ask me anything about Amit.",
        },
    ]);

    const handleSend = async () => {
        if (!message.trim()) return;

        const userMessage = message;

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                text: userMessage,
            },
        ]);

        setMessage("");
        setLoading(true);

        const reply = await sendChatMessage(userMessage);

        setMessages((prev) => [
            ...prev,
            {
                role: "assistant",
                text: reply,
            },
        ]);

        setLoading(false);
    };

    return (
        <>
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        border: "none",
                        cursor: "pointer",
                        background:
                            "linear-gradient(135deg,#7c3aed,#2563eb)",
                        color: "white",
                        fontSize: "30px",
                        zIndex: 9999,
                    }}
                >
                    🤖
                </button>
            )}

            {isOpen && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        width: "380px",
                        height: "550px",

                        background: "rgba(17,24,39,0.95)",
                        backdropFilter: "blur(15px)",

                        borderRadius: "20px",
                        border: "1px solid rgba(255,255,255,0.1)",

                        display: "flex",
                        flexDirection: "column",

                        overflow: "hidden",
                        zIndex: 9999,
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            padding: "15px",
                            background:
                                "linear-gradient(135deg,#7c3aed,#2563eb)",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            color: "white",
                        }}
                    >
                        <h3 style={{ margin: 0 }}>
                            🤖 Ask Virtual Assistant
                        </h3>

                        <button
                            onClick={() => setIsOpen(false)}
                            style={{
                                background: "transparent",
                                border: "none",
                                color: "white",
                                cursor: "pointer",
                                fontSize: "18px",
                            }}
                        >
                            ✖
                        </button>
                    </div>

                    {/* Messages */}
                    <div
                        style={{
                            flex: 1,
                            overflowY: "auto",
                            padding: "15px",
                        }}
                    >
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                style={{
                                    marginBottom: "12px",
                                    display: "flex",
                                    justifyContent:
                                        msg.role === "user"
                                            ? "flex-end"
                                            : "flex-start",
                                }}
                            >
                                <div
                                    style={{
                                        maxWidth: "80%",
                                        padding: "10px 14px",
                                        borderRadius: "12px",
                                        color: "white",

                                        background:
                                            msg.role === "user"
                                                ? "#2563eb"
                                                : "#374151",
                                    }}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {loading && (
                            <div
                                style={{
                                    color: "#d1d5db",
                                    fontSize: "14px",
                                }}
                            >
                                Querying Amit's knowledge base...
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div
                        style={{
                            padding: "15px",
                            borderTop:
                                "1px solid rgba(255,255,255,0.1)",
                            display: "flex",
                            gap: "10px",
                        }}
                    >
                        <input
                            value={message}
                            onChange={(e) =>
                                setMessage(e.target.value)
                            }
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSend();
                                }
                            }}
                            placeholder="Ask Me Anything..."
                            style={{
                                flex: 1,
                                padding: "12px",
                                borderRadius: "10px",
                                border: "none",
                                outline: "none",
                                color: "#ffffff",
                                background: "rgba(255,255,255,0.08)",
                            }}
                        />

                        <button
                            onClick={handleSend}
                            disabled={loading}
                            style={{
                                padding: "12px 16px",
                                border: "none",
                                borderRadius: "10px",
                                background:
                                    "linear-gradient(135deg,#7c3aed,#2563eb)",
                                color: "white",
                                cursor: "pointer",
                            }}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default AIChatbot;