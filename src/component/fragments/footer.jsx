export const Footer = () => {
    return(
        <div className="w-full  bg-primary dark:bg-primary h-[60vh] mt-10 ">
            <div className="container mx-auto py-12 px-4">
                <div className="flex items-center mb-2 gap-2">
                    <img src="/img/logo-capstonewhite.png" alt="" className="w-[45px]"/>
                    <div className="text-2xl font-semibold text-white">Financial Tracker</div>
                </div>
                <p className="text-xl font-extralight text-white mb-6">Smart Financial Tracker membantu Anda mencatat transaksi,<br /> menganalisis pola keuangan, dan memprediksi keuangan dengan Al. Aman, mudah, dan otomatis! </p>
                <div className="container-2 flex justify-between">
                    <div className="contact flex flex-col">
                        <div className="text-2xl font-medium text-white mb-5">Hubungi Kami</div>
                        <div className="flex items-center mb-6 gap-2 ml-10">
                            <img src="/img/corner-down-right.svg" alt="" className="w-[25px]"/>
                            <img src="/img/mail.svg" alt="" className="w-[20px]"/>
                            <p className="text-xl  text-white">aleganteng@gmail.com</p>
                        </div>
                        <div className="flex items-center mb-6 gap-2 ml-10">
                            <img src="/img/corner-down-right.svg" alt="" className="w-[25px]"/>
                            <img src="/img/map-pin.svg" alt="" className="w-[20px]"/>
                            <p className="text-xl  text-white">banyorep</p>
                        </div>
                        <div className="flex items-center mb-6 gap-2 ml-10">
                            <img src="/img/corner-down-right.svg" alt="" className="w-[25px]"/>
                            <img src="/img/phone.svg" alt="" className="w-[20px]"/>
                            <p className="text-xl  text-white">0869696969</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-2xl font-medium text-white mb-5">Links</div>
                        <div className="flex items-center mb-4 gap-2 ml-1">
                            <a href="#" className="text-white text-xl"><li className="list-none">FAQs</li></a>
                        </div>
                        <div className="flex items-center mb-4 gap-2 ml-1">
                            <a href="#" className="text-white text-xl"><li className="list-none">FAQs</li></a>
                        </div>
                        <div className="flex items-center mb-4 gap-2 ml-1">
                            <a href="#" className="text-white text-xl"><li className="list-none">FAQs</li></a>
                        </div>
                        <div className="flex items-center mb-4 gap-2 ml-1">
                            <a href="#" className="text-white text-xl"><li className="list-none">FAQs</li></a>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-2xl font-medium text-white mb-5">Sosial Media</div>
                        <div className="flex items-center mb-4 gap-2 mr-10">
                            <img src="/img/github.svg" alt="" className="w-[25px]"/>
                            <p className="text-xl  text-white">aleganteng@gmail.com</p>
                        </div>
                        <div className="flex items-center mb-4 gap-2 mr-10">
                            <img src="/img/instagram.svg" alt="" className="w-[25px]"/>
                            <p className="text-xl  text-white">banyorep</p>
                        </div>
                        <div className="flex items-center mb-4 gap-2 mr-10">
                            <img src="/img/twitter.svg" alt="" className="w-[25px]"/>
                            <p className="text-xl  text-white">0869696969</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <hr className="text-white opacity-40 mb-5 "/>
                    <div className="flex justify-between">
                        <p className="text-xl  text-white">Copyright 1945 Financial Tracker. All rights reserved.</p>
                        <p className="text-xl  text-white">User Terms & Condition | Privacy Policy</p>
                    </div>

                </div>
            </div>
        </div>
    )
}