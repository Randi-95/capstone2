import NavMobile from "../component/fragments/navMobile";
import { ArrowLeft, User, Send } from "react-feather";
import { Link } from "react-router-dom";
import FormChatbot from "../component/fragments/formChatbot";
import { useEffect, useRef, useState } from "react";
import ChatMessage from "../component/fragments/ChatMessage";
import url from "../services/api_key";
import axios from "axios";
import { getProfil } from "../services/auth";

function Chatbot() {
  const [chatHistory, setChatHistory] = useState([]);
  const chatBodyRef = useRef()

  const token = localStorage.getItem("token");
  const user_data = getProfil(token);

  const generateBotResponse = async (history) => {

    const updateHistory = (text) => {
        setChatHistory(prev => [...prev.filter(msg => msg.text !== "Berpikir..."), {role: "model", text}])
    }
    console.log(history);

    const Messages = history
      .filter((chat) => chat.role === "user") // Hanya ambil yang role-nya "user"
      .map((chat) => chat.text); // Ambil text saja

    console.log(Messages);

    const userMessage = Messages.pop(); // Ambil pesan terakhir
    console.log(userMessage);

    const data = {
      text: userMessage,
    };
    try {
      const res = await axios.post(
        `${url}/chatbot/${user_data.id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const apiResponseText = res.data.pesan
      updateHistory(apiResponseText)
      console.log(res.data.pesan);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behavior: "smooth"})
  }, [chatHistory])
  return (
    <div className="lg:w-[70vw] pb-6 lg:absolute lg:right-10 dark:bg-black lg:mt-10 lg:shadow-2xl dark:shadow-gray-900">
      <div className="chatbot px-2">
        <div className="">
          <div className="mb-6 flex items-center justify-between p-4">
            <Link to="/Dashboard">
            <ArrowLeft className="text-primary size-8" />
            </Link>
            <h1 className="text-2xl font-bold text-primary">Chatbot</h1>
            <img src="/img/robot2.svg" alt="" className="w-10" />
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div ref={chatBodyRef} className="chat-body h-[80vh] pb-30 overflow-y-auto p-5">
            <div className="message bot-message flex flex-col gap-2">
              <div className="bg-primary flex items-center justify-center w-10 h-10 p-1 rounded-full">
                <img src="/img/robot.svg" alt="" className="w-10" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-semibold text-sm leading-5 ml-10 -mt-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-xl">
                Hello {user_data.username} 🙌 <br /> Bagaimana saya dapat membantu Anda hari
                ini?
              </p>
            </div>

            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
          </div>

          <div className="chatbot-form  w-full  lg:relative fixed bottom-0 right-0 left-0 py-4 bg-white dark:bg-black border-1 border-gray-50 dark:border-gray-800 shadow-lg">
            <FormChatbot
              chatHistory={chatHistory}
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <NavMobile />
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
