import { Calendar, BarChart, Grid, MessageCircle,Menu, DollarSign, Clock, Activity, Home } from "react-feather"


function NavMobile() {
    return (
        <div className="nav-mobile fixed bottom-0 right-0 left-0">
            <div className=" shadow-[0_-8px_10px_-1px_rgba(0,0,0,0.1)] w-full py-4 flex justify-between p-2 px-4">
                <ul >
                    <li className="font-bold text-primary text-xs flex flex-col items-center"><Home className="text-primary"/>Beranda</li>
                </ul>
                <ul>
                    <li className=" text-xs flex flex-col items-center"><BarChart className=""/>Grafik</li>
                </ul>
                <ul>
                    <li className=" text-xs flex flex-col items-center"><Activity className=""/>Prediksi</li>
                </ul>
                <ul>
                    <li className=" text-xs flex flex-col items-center"><MessageCircle className=""/>Chatbot</li>
                </ul>
            </div>
        </div>
    )
}

export default NavMobile;