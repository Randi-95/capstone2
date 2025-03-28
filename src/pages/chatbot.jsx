import NavMobile from "../component/fragments/navMobile";
import { ArrowLeft, User, Send } from "react-feather";
import { Link } from "react-router-dom";
import FormChatbot from "../component/fragments/formChatbot";
import { useState } from "react";
import ChatMessage from "../component/fragments/ChatMessage";

function Chatbot() {
    const [chatHistory, setChatHistory] = useState([]);
    return (
        <div className="lg:w-[70vw] pb-6 lg:absolute lg:right-10 lg:mt-10 lg:shadow-2xl">
            <div className="chatbot px-2">
                <div className="">
                    <div className="mb-6 flex items-center justify-between p-4">
                    <img src="/img/robot2.svg" alt="" className="w-10" />
                        <h1 className="text-2xl font-bold text-primary">Chatbot</h1>
                        <Link to= "/Profile"><User className="text-primary size-8"/></Link>
                    </div>
                </div>
                
                <div className="flex flex-col justify-between">
                    <div className="chat-body h-[60vh] overflow-y-auto">
                        <div className="message bot-message flex items-center gap-2">
                            <div className="bg-primary flex items-center justify-center w-10 h-10 p-1 rounded-full">
                                <img src="/img/robot.svg" alt="" className="w-10" />
                            </div>
                            <p className="text-gray-600 font-semibold text-sm leading-5 bg-gray-100 p-2 rounded-xl">Hello Randi🙌 <br /> Bagaimana saya dapat membantu Anda hari ini?</p>
                        </div>

                        {chatHistory.map((chat, index) => (
                            <ChatMessage key={index} chat={chat}/>
                        ))}
                        
                    </div>

                    <div className="chatbot-form  w-full ">
                        <FormChatbot setChatHistory={setChatHistory}/>
                    </div>
                </div>

                <NavMobile/>
            </div>
        </div>
        
    )
}

export default Chatbot;