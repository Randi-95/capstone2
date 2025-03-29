import { useRef } from "react";
import { Send } from "react-feather";

function FormChatbot({ chatHistory, setChatHistory, generateBotResponse }) {
    const inputRef = useRef();

    const handleKeyDown = (event) => {
        const isMobile = /Mobi|Android/i.test(navigator.userAgent); // Deteksi perangkat mobile

        if (event.key === "Enter") {
            if (isMobile || event.shiftKey) {
                // Jika di HP atau Shift + Enter ditekan, buat baris baru
                event.preventDefault();
                inputRef.current.value += "\n";
            } else {
                // Jika di laptop dan hanya Enter, kirim pesan
                event.preventDefault();
                handleFormSubmit(event);
            }
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;

        inputRef.current.value = "";

        setChatHistory((history) => [...history, { role: "user", text: userMessage }]);

        setTimeout(() => setChatHistory((history) => [...history, { role: "model", text: "Berpikir..." }]), 600);

        generateBotResponse([...chatHistory, { role: "user", text: userMessage }]);
    };

    return (
        <form className="chat-form rounded-xl bg-gray-200 py-4 mx-2" onSubmit={handleFormSubmit}>
            <div className="flex px-10 w-full">
                <textarea
                    ref={inputRef}
                    placeholder="Tanya..."
                    className="message-input w-full mr-4 outline-0 text-md font-semibold"
                    required
                    rows={2}
                    onKeyDown={handleKeyDown}
                />
                <button type="submit">
                    <Send className="text-gray-600" />
                </button>
            </div>
        </form>
    );
}

export default FormChatbot;
