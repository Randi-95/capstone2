import {
    User,
    CreditCard,
    AtSign,
    LogOut,
    Headphones,
    Calendar,
    BarChart,
    Grid,
    MessageCircle,
    Menu,
    DollarSign,
    Clock,
    Activity,
    Plus,
    ArrowDown,
    ArrowUp,
    Mail,
    ChevronRight,
    HelpCircle,
    Repeat
  } from "react-feather";
import DarkModeToggle from "../component/elements/darkMode";



function Profile() {
    return(
      <div className="h-[9999px]">
        <div className="dashboard-mobile w-full h-50 bg-[url('/img/foto-mobile.png')] bg-cover bg-center ">
            
        </div>
        <div className="border-[1.4px] shadow-xl border-[#d9d7d7] bg-white h-40 w-[90%] lg:w-[50%] mx-auto -mt-20 rounded-xl flex  p-2">
            <div className="flex flex-col items-center justify-center w-full">
                <div className="bg-primary h-16 w-16 flex justify-center items-center rounded-full">
                    <h2 className="text-white font-semibold text-2xl">RA</h2>
                </div>
                <div className="ml-2 flex flex-col items-center">
                    <h2 className="text-gray-800 font-bold lg:text-xl">Randi Permana</h2>
                    <p className="text-xs lg:text-xl font-semibold text-gray-600">randi@mail.com | user-XmmOgjtm3N</p>
                </div>
            </div>
        </div>

        <div className="m-6 mt-10">
            <div className="flex justify-between border-b-1 border-gray-400 pb-4">
                <div className="flex gap-2 ">
                    <Clock className="text-gray-700"/>
                    <h2 className="font-semibold text-gray-700">Riwayat Transaksi</h2>
                </div>

                <ChevronRight className="text-gray-700"/>
            </div>
        </div>

        <div className="m-6">
            <div className="flex justify-between border-b-1 border-gray-400 pb-4">
                <div className="flex gap-2 ">
                    <HelpCircle className="text-gray-700"/>
                    <h2 className="font-semibold text-gray-700">Tetang Financial Tracker</h2>
                </div>

                <ChevronRight className="text-gray-700"/>
            </div>
        </div>

        <div className="m-6">
            <div className="flex justify-between border-b-1 border-gray-400 pb-4">
                <div className="flex gap-2 ">
                    <Repeat className="text-gray-700"/>
                    <h2 className="font-semibold text-gray-700">Tema</h2>
                </div>

                <DarkModeToggle/>

        
            </div>
        </div>

        <div className="m-6">
            <div className="flex justify-between border-b-1 border-gray-400 pb-4">
                <div className="flex gap-2 ">
                    <LogOut className="text-gray-700"/>
                    <h2 className="font-semibold text-gray-700">Keluar</h2>
                </div>

                <ChevronRight className="text-gray-700"/>
            </div>
        </div>
      </div>

    )
}

export default Profile
