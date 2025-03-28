import { useRef } from "react";
import { ArrowLeft, User, Send } from "react-feather";

function FormChatbot({setChatHistory}) {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return
        inputRef.current.value = "";

        setChatHistory(history => [...history, { role: "user", text: userMessage}])

        setTimeout(() => setChatHistory((history) => [...history, { role: "model", text: "Berpikir..."}]),
        600)
    }
    return(
        <form action="#" className="chat-form  rounded-xl bg-gray-200 py-4  mx-2" onSubmit={handleFormSubmit}>
            <div className="flex px-10 w-full">
                <input ref={inputRef} type="text" placeholder="Tanya..." className="message-input w-full mr-4 outline-0 text-md font-semibold" required/>
                <button className="">
                    <Send className="text-gray-600"/>
                </button>
            </div>
        </form>
    )
}

export default FormChatbot