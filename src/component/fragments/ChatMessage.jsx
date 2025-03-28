function ChatMessage({ chat }) {
    return (
        <div className={`message flex items-center gap-2 ${chat.role === "model" ? "bot-message justify-start" : "user-message justify-end"}`}>
            {chat.role === "model" && (
                <div className="bg-primary mt-4 flex items-center justify-center w-10 h-10 p-1 rounded-full">
                    <img src="/img/robot.svg" alt="bot" className="w-10" />
                </div>
            )}
            <p className={`text-sm font-semibold leading-5 p-2 rounded-xl 
                ${chat.role === "model" ? "bg-gray-100 text-gray-600 mt-4" : "mt-4 bg-primary text-white"}`}>
                {chat.text}
            </p>
        </div>
    );
}

export default ChatMessage;
