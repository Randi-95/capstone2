import Navbar from "../component/fragments/navbar";
import { Home } from "../component/fragments/home";
import { CheckSquare } from "react-feather";
import { Footer } from "../component/fragments/footer";

function IsiFitur() {
  return (
    <div className="container">
      <div className="-mb-10 mx-auto p-6 dark:bg-black">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="deskripsi-fitur order-2 md:order-1 flex flex-col  md:items-baseline">
            <h2 className="text-3xl md:text-4xl mt-8 mb-4 md:mt-0 text-primary font-[700]">
            Fitur Andalan
            </h2>
            <p className="text-lg md:text-xl mb-4 md:w-[80%] dark:text-gray-300">
            Tingkatkan pengalaman mengelola keuangan Anda dengan alat-alat khusus yang dirancang untuk mempermudah pencapaian tujuan finansial.
            </p>
            <ul className="mt-2">
              <li className="flex gap-2 font-[600] text-[#374151] dark:text-gray-300 text-sm md:text-lg">
                <CheckSquare className="text-primary"/>
                Lihat keuangan dalam satu tampilan
              </li>
              <li className="flex gap-2 font-[600] text-[#374151] dark:text-gray-300 text-sm md:text-lg">
              <CheckSquare className="text-primary"/>
                Monitor pemasukan dan pengeluaran dengan mudah
              </li>
              <li className="flex gap-2 font-[600] text-[#374151] dark:text-gray-300 text-sm md:text-lg">
              <CheckSquare className="text-primary"/>
                Visualisasi data yang informatif
              </li>
            </ul>
          </div>
          <div className="foto-fitur order-1 md:order-2">
            <img
              className="m-auto rounded-2xl shadow-lg"
              src="img/homeFitur.png"
              alt=""
              width="600px"
            />
          </div>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 mt-4 gap-8">
          <div className="deskripsi-fitur order-2 flex flex-col md:items-baseline">
            <h2 className="text-3xl md:text-4xl mt-8 mb-4 md:mt-0 text-primary font-[700]">
            Kalender Keuangan
            </h2>
            <p className="text-lg md:text-xl mb-4 md:w-[80%] dark:text-gray-300">
            Pantau dan kelola aliran keuangan Anda dengan tampilan kalender yang intuitif. Semua pemasukan dan pengeluaran tercatat dengan jelas berdasarkan tanggal, memudahkan Anda melacak aktivitas finansial."
            </p>
            <ul className="mt-2">
              <li className="flex gap-2 font-[600] text-[#374151] dark:text-gray-300 text-sm md:text-lg">
                <CheckSquare className="text-primary"/>
                Tampilan Visual Aliran Kas
              </li>
              <li className="flex gap-2 font-[600] text-[#374151] dark:text-gray-300 text-sm md:text-lg">
              <CheckSquare className="text-primary"/>
              Navigasi Tanggal Fleksibel
              </li>
              <li className="flex gap-2 font-[600] text-[#374151] dark:text-gray-300 text-sm md:text-lg">
              <CheckSquare className="text-primary"/>
              Perencanaan Keuangan Terjadwal
              </li>
            </ul>
          </div>
          <div className="foto-fitur order-1">
            <img
              className="m-auto rounded-2xl shadow-lg"
              src="img/KalenderFitur.png"
              alt=""
              width="500px"
            />
          </div>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
        <div className="deskripsi-fitur order-2 md:order-1 flex flex-col md:items-baseline">
            <h2 className="text-3xl md:text-4xl mt-8 mb-4 md:mt-0 text-primary font-[700]">
            Grafik Keuangan Interaktif
            </h2>
            <p className="text-lg md:text-xl mb-4 md:w-[80%] dark:text-gray-300">
            Fitur grafik ini menampilkan pergerakan pemasukan, pengeluaran, dan saldo kamu dalam bentuk garis visual yang dinamis, sehingga kamu bisa langsung tahu kondisi keuangan tanpa perlu menghitung manual.
            </p>
            <ul className="mt-2">
              <li className="flex gap-2 font-[600] text-[#374151] dark:text-gray-300 text-sm md:text-lg">
               <CheckSquare className="text-primary"/>
               Visualisasi Pemasukan & Pengeluaran
              </li>
              <li className="flex gap-2 font-[600] text-[#374151] dark:text-gray-300 text-sm md:text-lg">
              <CheckSquare className="text-primary"/>
               Data Berdasarkan Tanggal
              </li>
              <li className="flex gap-2 font-[600] text-[#374151] dark:text-gray-300 text-sm md:text-lg">
              <CheckSquare className="text-primary"/>
               Tooltip Interaktif
              </li>
            </ul>
          </div>
          <div className="foto-fitur order-1 md:order-2">
            <img
              className="m-auto rounded-2xl shadow-lg"
              src="img/grafikFitur.png"
              alt=""
              width="500px"
            />
          </div>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
          <div className="deskripsi-fitur order-2 md:order-2 flex flex-col  md:items-baseline">
            <h2 className="text-3xl md:text-4xl mt-8 mb-4 md:mt-0 text-primary font-[700]">
            Chatbot Pintar Keuangan
            </h2>
            <p className="text-lg md:text-xl mb-4 md:w-[80%] dark:text-gray-300">
            Fitur chatbot ini hadir untuk membantumu memahami istilah keuangan, memberikan edukasi finansial, hingga menjadi teman diskusi saat kamu butuh insight cepat. Didukung AI responsif dengan bahasa yang santai namun informatif.
            </p>
            <ul className="mt-2">
              <li className="flex gap-2 font-[600] text-[#374151] dark:text-gray-300 text-sm md:text-lg">
               <CheckSquare className="text-primary"/>
               Respon Cepat & Informatif
              </li>
              <li className="flex gap-2 font-[600] text-[#374151] dark:text-gray-300 text-sm md:text-lg">
              <CheckSquare className="text-primary"/>
              Pemahaman Topik Finansial
              </li>
              <li className="flex gap-2 font-[600] text-[#374151] dark:text-gray-300 text-sm md:text-lg">
              <CheckSquare className="text-primary"/>
              Format Jawaban Terstruktur
              </li>
            </ul>
          </div>
          <div className="foto-fitur order-1 md:order-1">
            <img
              className="m-auto rounded-2xl shadow-lg"
              src="img/chatbotFitur.png"
              alt=""
              width="500px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Fitur(){
    return(
        <div className="container">
            <Navbar/>
            <Home header='Fitur Unggulan Financial Tracker' isi='Solusi Lengkap dalam Satu Aplikai' deskripsi='Nikmati berbagai kemampuan canggih yang memudahkan pengelolaan keuangan Anda sehari-hari, dari pencatatan otomatis hingga analisis mendalam.'/>
            <IsiFitur/>
            <Footer/>
        </div>
    )
}
export default Fitur;
