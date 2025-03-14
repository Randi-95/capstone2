import Button from "../elements/Button";

export const Home = (props) => {
    const {header, isi, deskripsi} = props;

    return (
        <div className="home w-full h-screen flex flex-col items-center justify-center dark:bg-black">
            <div className="title">
                <button className="dark:bg-transparent bg-white py-1 px-2 border border-primary rounded-[20px]"><p className="dark:bg-gray-800 dark:text-primary text-primary font-[600] py-1 px-3 bg-gray-100 rounded-[20px]">Best Financial Tracker</p></button>
            </div>   
            <div className="content flex flex-col justify-center">
                <p className="dark:text-gray-300 lg:text-[60px] md:text-[50px] text-[30px] sm:text-[40px] leading-[40px] md:leading-[65px]  text-center  font-[600] text-[#374151]"><span className="text-primary dark:text-primary">{header}</span> <br /> {isi} </p>
                <span className="flex justify-center mt-[10px]">
                    <p className="w-[80%] font-[600] text-center text-[#7F7F7F]">{deskripsi}</p>
                </span>
            </div>
            <div className="mt-[10px]">
                <Button bgColor='bg-primary' border='border-primary' hover='hover:bg-transparent dark:hover:bg-transparent' hoverText = 'group-hover:text-primary ' >Bergabung Sekarang</Button>
            </div>

            
        </div>
    )
}