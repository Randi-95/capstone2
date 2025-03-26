import { User,Book, CreditCard,AtSign, LogOut, Headphones ,Calendar, BarChart, Grid, MessageCircle,Menu, DollarSign, Clock, Activity, Plus, ArrowDown, ArrowUp, ArrowLeft } from "react-feather"
import { Link } from "react-router-dom";

function FormKeuangan() {
    return(
        <div className="">
            <div className="max-w-md mx-auto bg-white rounded-2xl p-6">
                <div className="mb-10 flex items-center justify-between">
                    <Link to= "/Dashboard"><ArrowLeft className="text-primary size-8"/></Link>
                    <h2 className="text-2xl font-bold text-primary">
                        Tambah Transaksi
                    </h2>
                    <span></span>
                </div>
                <form className="space-y-4">
                    
                    <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                        Deskripsi
                    </label>
                    <div className="relative">
                        <input
                        type="text"
                        placeholder="Deskripsi Transaksi"
                        className="w-full pl-4 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <label className="block text-gray-700 font-semibold mb-2">
                        Jumlah
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                        Rp
                        </span>
                        <input
                        type="number"
                        placeholder="Masukkan Jumlah"
                        className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    </div>

                    <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                        Kategori
                    </label>
                    <select
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option className="text-xs">Pilih Kategori</option>
                        <option className="text-green-500 text-xs">Pemasukan</option>
                        <option className="text-red-500 text-xs">Pengeluaran</option>
                    </select>
                    </div>

                    <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#7f5efd] to-[#4f9efd] font-bold text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 mt-4"
                    >
                    Simpan Transaksi
                    </button>
                </form>
            </div>
       </div>
    )
}

export default FormKeuangan;