import Button from "../elements/Button";

export const Home = (props) => {
    const {} = props;

    return (
        <div className="home w-full h-screen flex flex-col items-center justify-center">
            <div className="title">
                <button className="bg-white py-1 px-2 border border-[#7f5efd] rounded-[20px]"><p className="text-[#7f5efd] font-[600] py-1 px-3 bg-gray-100 rounded-[20px]">Best Financial Tracker</p></button>
            </div>   
            <div className="content flex flex-col justify-center ">
                <p className="text-[60px] leading-[65px]  text-center  font-[600] text-[#374151]"><span className="text-[#7f5efd]">Kelola Keuangan dengan</span> <br /> Cerdas Bersama Financial Tracker </p>
                <span className="flex justify-center mt-[10px]">
                    <p className="w-[70%] font-[600] text-center text-[#7F7F7F]">Smart Financial Tracker membantu Anda mencatat transaksi, menganalisis pola keuangan, dan memprediksi keuangan dengan Al. 
                    Aman, mudah, dan otomatis!</p>
                </span>
            </div>
            <div className="mt-[10px]">
                <Button bgColor='bg-[#7f5efd]' border='border-[#7f5efd]' hover='hover:bg-transparent' hoverText = 'group-hover:text-[#4CB92D] ' >Bergabung Sekarang</Button>
            </div>
        </div>
    )
}