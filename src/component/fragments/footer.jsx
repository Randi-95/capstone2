export const Footer = () => {
    return(
        <div className="w-full  bg-primary dark:bg-primary mt-10 ">
            <div className="container mx-auto py-4 px-4">
                <div className="flex items-center mb-2 gap-2">
                    <img src="/img/logo-capstonewhite.png" alt="" className="w-[45px]"/>
                    <div className="text-2xl font-semibold text-white">Financial Tracker</div>
                </div>
                <p className="text-md text-white mb-6">Smart Financial Tracker membantu Anda mencatat transaksi,<br /> menganalisis pola keuangan, dan memprediksi keuangan dengan Al. Aman, mudah, dan otomatis! </p>
                <div className="container-2 flex flex-col lg:flex-row justify-between">
                    <div className="contact flex flex-col">
                        <div className="text-2xl font-medium text-white mb-5">Hubungi Kami</div>
                        <div className="flex items-center mb-6 gap-2 lg:ml-10">
                            <img src="/img/corner-down-right.svg" alt="" className="w-[25px]"/>
                            <div className="bg-white/10 p-2 rounded-full">
                                <img src="/img/mail.svg" alt="" className="w-[20px]"/>
                            </div>
                            <p className="text-md text-white">financialtracker@gmail.com</p>
                        </div>
                        <div className="flex items-center mb-6 gap-2 lg:ml-10">
                            <img src="/img/corner-down-right.svg" alt="" className="w-[25px]"/>
                            <div className="bg-white/10 p-2 rounded-full">
                                <img src="/img/map-pin.svg" alt="" className="w-[20px]"/>
                            </div>
                            <p className="text-md  text-white">Kota Surabaya, Jawa Timur</p>
                        </div>
                        <div className="flex items-center mb-6 gap-2 lg:ml-10">
                            <img src="/img/corner-down-right.svg" alt="" className="w-[25px]"/>
                            <div className="bg-white/10 p-2 rounded-full">
                                <img src="/img/phone.svg" alt="" className="w-[20px]"/>
                            </div>
                            <p className="text-md  text-white">0878-5593-2641</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-2xl font-medium text-white mb-5">Links</div>
                        <div className="flex items-center mb-4 gap-2 ml-1">
                            <a href="/" className="text-white text-md"><li className="list-none">Beranda</li></a>
                        </div>
                        <div className="flex items-center mb-4 gap-2 ml-1">
                            <a href="/TentangKami" className="text-white text-md"><li className="list-none">Tentang Kami</li></a>
                        </div>
                        <div className="flex items-center mb-4 gap-2 ml-1">
                            <a href="/fitur" className="text-white text-md"><li className="list-none">Fitur</li></a>
                        </div>
                        <div className="flex items-center mb-4 gap-2 ml-1">
                            <a href="/blogs" className="text-white text-md"><li className="list-none">Blog</li></a>
                        </div>
                        <div className="flex items-center mb-4 gap-2 ml-1">
                            <a href="/login" className="text-white text-md"><li className="list-none">Login</li></a>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-2xl font-medium text-white mb-5">Sosial Media</div>
                        <div className="flex items-center mb-4 gap-2 mr-10">
                            <div className="bg-white/10 p-2 rounded-full">
                                <img src="/img/github.svg" alt="" className="w-[25px]"/>
                            </div>
                            <p className="text-md  text-white">Financial-Tracker</p>
                        </div>
                        <div className="flex items-center mb-4 gap-2 mr-10">
                            <div className="bg-white/10 p-2 rounded-full">
                                <img src="/img/instagram.svg" alt="" className="w-[25px]"/>
                                </div>
                            <p className="text-md  text-white">@financialtracker</p>
                        </div>
                        <div className="flex items-center mb-4 gap-2 mr-10">
                            <div className="bg-white/10 p-2 rounded-full">
                                <img src="/img/twitter.svg" alt="" className="w-[25px]"/>
                            </div>
                            <p className="text-md  text-white">Financial Tracker</p>
                        </div>
                    </div>
                </div>
                
                <div >
                    <hr className="text-white opacity-40 mb-5 "/>
                    <div className="flex justify-center items-center">
                        <p className="text-md  text-white">Copyright 2025 Financial Tracker. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}