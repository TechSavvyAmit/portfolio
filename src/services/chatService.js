const API_URL = "https://portfolio-3z86.onrender.com/chat";

export const sendChatMessage = async (message) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
        });

        if (!response.ok) {
            throw new Error("Server Error");
        }

        const data = await response.json();

        return data.reply;
    } catch (error) {
        console.error(error);
        return "Unable to connect to Amit AI Assistant.";
    }
};