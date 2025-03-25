import NavDashboard from "../component/fragments/navDashboard";
import Sidebar from "../component/fragments/sidebar";





function Keuangan() {

    return(
        <div className="flex h-screen bg-gray-100">
            <Sidebar></Sidebar>
            <div className="bg-gray-100 lg:ml-[300px] w-full ">
                <div className="p-4 bg-gray-100"> 
                    <NavDashboard/>
                    <div className="mt-10 lg:mt-0 flex justify-center flex-col items-center">
                        <h2 className="text-primary text-4xl font-bold">Atur Keuangan Sekarang</h2>
                        <p className="w-80 text-center font-semibold text-gray-800 leading-5">Kelola pemasukan & pengeluaran dengan mudah.</p>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Keuangan;