import Input from "../component/elements/input.jsx";
import DarkModeToggle from "../component/elements/darkMode.jsx";
import { Link } from "react-router-dom";


function Registrasi(){
    return(
        <div className="login h-screen dark:bg-[#0D1117]  flex flex-col justify-center lg:flex-row lg:items-center">
            <div className="container-login grid lg:grid-cols-2  items-center px-2 lg:px-10 ">
            <div className="login lg:px-15">
                <div className="absolute top-4 left-4 ">
                    <DarkModeToggle />
                </div>
                    <img src="/img/logo-capstone.png" alt="" className="w-[60px]"/>
                    <h1 className="font-bold text-primary text-4xl">Registrasi</h1>
                    <p className="text-[#434343] dark:text-white font-medium">Buat akun dan mulai menikmati fitur-fitur kami</p>
                    <form action="">
                        <Input nama="Nama" type= "text"></Input>
                        <Input nama="Email" type= "email"></Input>
                        <Input nama="Password" type= "password"></Input>
                        <Input nama="Konfirmasi Password" type= "password"></Input>
                        <button type="submit" className="bg-primary mt-4 w-full h-10 font-bold text-white rounded-lg">Masuk</button>
                    </form>
                    <p className="text-center font-normal mt-4  dark:text-white">Kamu sudah memiliki akun? <Link to='/login' className="font-bold text-primary">Masuk</Link></p>
                </div> 
                <div className="foto hidden lg:block">
                    <img src="/img/login-image.png" alt="" />
                </div>
            </div>        
        </div>

    )
}

export default Registrasi;