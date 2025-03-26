import { User, CreditCard,AtSign, LogOut } from "react-feather";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProfil } from "../../services/auth"


function NavDashboard () {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [profil, setProfil] = useState("")
    const navigate = useNavigate()

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    const [isHovered, setIsHovered] = useState(false); 

    const clickUser = () => {
        if(isHovered){
            setIsHovered(false)
        } else {
            setIsHovered(true)
        }
    }

    const handlerLogout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token){
            setProfil(getProfil(token))
        } else {
            navigate("/login");
        }
    }, [])

    return(
        <div className="bg-gray-100 w-full ">
                <div className="p-4 bg-gray-100">    
                    <div className="bg-white w-full fixed left-0 right-0 top-0 md:relative gap-2 items-center rounded-t-xl md:rounded-xl shadow-lg p-4 py-6 flex justify-between z-30">
                        <h2 className="text-lg font-bold pl-5">
                            Dashboard <span className="text-primary">FinancialTracker</span>
                        </h2>
            
                        <div
                            className="relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={clickUser}
                        >
                        <User className="text-gray-500 cursor-pointer" size={24} />
            
                        <div
                            className={`bg-white shadow-lg w-fit p-4 rounded-xl fixed top-15 right-6 z-50 h-50 transition-opacity duration-300 ${
                                isHovered ? "opacity-100 visible" : "opacity-0 invisible"
                            }`}
                        >
                            <div className="flex flex-col gap-4">
                                <h2 className="text-sm font-semibold flex items-center gap-2">
                                <User className="text-primary" /> {profil.username}
                                </h2>
                                <h2 className="text-sm font-semibold flex items-center gap-2">
                                <CreditCard className="text-primary" /> {profil.id}
                                </h2>
                                <p className="text-sm font-semibold flex items-center gap-2">
                                <AtSign className="text-primary" /> {profil.email}
                                </p>
                                <button onClick={handlerLogout} className="flex justify-center text-sm font-bold rounded-lg mt-4 text-white bg-primary p-2">
                                <LogOut /> Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )

}

export default NavDashboard