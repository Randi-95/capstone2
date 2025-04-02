import Navbar from '../component/fragments/navbar'
import { Home } from '../component/fragments/home'
import {User, CheckCircle} from 'react-feather'
import CardAbout from '../component/elements/cardAbout'
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Footer } from '../component/fragments/footer';

// halo

const faqs = [
  {
    question: "Apakah Smart Financial Tracker gratis?",
    answer: "Ya, Smart Financial Tracker tersedia dalam versi gratis dengan fitur utama yang bisa digunakan tanpa biaya. Namun, tersedia juga versi premium dengan fitur tambahan yang lebih lengkap."
  },
  {
    question: "Apakah data keuangan saya aman?",
    answer: "Tentu! Kami menggunakan enkripsi tingkat tinggi untuk melindungi data keuangan Anda dan memastikan keamanannya."
  },
  {
    question: "Bagaimana cara menghubungi tim support jika ada masalah?",
    answer: "Anda dapat menghubungi tim support kami melalui email atau fitur live chat yang tersedia di dalam aplikasi."
  }
];

// tes

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 dark:text-white">
      <h2 className="text-[20px] md:text-[40px] font-bold text-center mb-4 text-primary">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition dark:text-white"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <FaChevronDown
                className={`transform transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}
              />
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white dark:bg-gray-700 transition-all duration-300 ease-in-out dark:text-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function FiturUtama() {
  return (
    <div className="max-w-6xl mx-auto p-6 dark:bg-black">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="deskripsi-fitur order-2 md:order-1 flex flex-col justify-center items-center md:items-baseline">
            <h2 className='text-3xl md:text-4xl mt-8 mb-4 md:mt-0 text-primary font-[700]'>Kendalikan Keuangan Anda dengan Mudah</h2>
            <p className='text-lg md:text-xl mb-4 md:w-[80%] dark:text-gray-300'>Kelola keuangan Anda dengan dasbor interaktif yang memberikan tampilan jelas dan informatif. Pantau pemasukan dan pengeluaran dengan visualisasi data yang intuitif, sehingga Anda bisa mengambil keputusan finansial yang lebih baik.</p>
            <ul className='mt-2'>
              <li className='flex gap-2 font-[600] text-[#374151] dark:text-gray-300 text-sm md:text-lg'><img src="img/cheklist.png" alt="" width='20px'/>Lihat keuangan dalam satu tampilan</li>
              <li className='flex gap-2 font-[600] text-[#374151] dark:text-gray-300 text-sm md:text-lg'><img src="img/cheklist.png" alt="" width='20px'/>Monitor pemasukan dan pengeluaran dengan mudah</li>
              <li className='flex gap-2 font-[600] text-[#374151] dark:text-gray-300 text-sm md:text-lg'><img src="img/cheklist.png" alt="" width='20px'/>Visualisasi data yang informatif</li>
            </ul>
        </div>
        <div className="foto-fitur order-1 md:order-2">
           <img className='m-auto rounded-2xl shadow-lg' src="img/dashboard.webp" alt="" width="600px"/>
        </div>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 mt-4 gap-8">
        <div className="deskripsi-fitur order-2 flex flex-col justify-center items-center md:items-baseline">
            <h2 className='text-3xl md:text-4xl mt-8 mb-4 md:mt-0 text-primary font-[700]'>Optimalkan Keuangan dengan AI</h2>
            <p className='text-lg md:text-xl mb-4 md:w-[80%] dark:text-gray-300'>Dapatkan wawasan mendalam tentang kondisi keuangan Anda dengan analisis berbasis kecerdasan buatan. AI kami membantu Anda memahami kebiasaan finansial dan memberikan rekomendasi cerdas untuk pengelolaan yang lebih baik.</p>
            <ul className='mt-2'>
              <li className='flex gap-2 font-[600] text-[#374151] dark:text-gray-300 text-sm md:text-lg'><img src="img/cheklist.png" alt="" width='20px'/>Wawasan finansial yang personal</li>
              <li className='flex gap-2 font-[600] text-[#374151] dark:text-gray-300 text-sm md:text-lg'><img src="img/cheklist.png" alt="" width='20px'/>Analisis kebiasaan keuangan otomatis</li>
              <li className='flex gap-2 font-[600] text-[#374151] dark:text-gray-300 text-sm md:text-lg'><img src="img/cheklist.png" alt="" width='20px'/>Rekomendasi cerdas untuk keputusan yang lebih baik</li>
            </ul>
        </div>
        <div className="foto-fitur order-1">
           <img className='m-auto rounded-2xl shadow-lg' src="img/chatbot.webp" alt="" width="500px"/>
        </div>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
        <div className="deskripsi-fitur order-2 md:order-1 flex flex-col justify-center items-center md:items-baseline">
            <h2 className='text-3xl md:text-4xl mt-8 mb-4 md:mt-0 text-primary font-[700]'>Optimalkan Keuangan dengan AI</h2>
            <p className='text-lg md:text-xl mb-4 md:w-[80%] dark:text-gray-300'>Dapatkan wawasan mendalam tentang kondisi keuangan Anda dengan analisis berbasis kecerdasan buatan. AI kami membantu Anda memahami kebiasaan finansial dan memberikan rekomendasi cerdas untuk pengelolaan yang lebih baik.</p>
            <ul className='mt-2'>
              <li className='flex gap-2 font-[600] text-[#374151] dark:text-gray-300 text-sm md:text-lg'><img src="img/cheklist.png" alt="" width='20px'/>Wawasan finansial yang personal</li>
              <li className='flex gap-2 font-[600] text-[#374151] dark:text-gray-300 text-sm md:text-lg'><img src="img/cheklist.png" alt="" width='20px'/>Analisis kebiasaan keuangan otomatis</li>
              <li className='flex gap-2 font-[600] text-[#374151] dark:text-gray-300 text-sm md:text-lg'><img src="img/cheklist.png" alt="" width='20px'/>Rekomendasi cerdas untuk keputusan yang lebih baik</li>
            </ul>
        </div>
        <div className="foto-fitur order-1 md:order-2">
           <img className='m-auto rounded-2xl shadow-lg' src="img/kalender.png" alt="" width="500px"/>
        </div>
      </div>
    </div>
  )
}

function KenapaHarus(){
  return(
    <div className="kenapa-harus mt-10">
      <div className="container mx-auto bg-primary dark:bg-primary lg:h-screen rounded-2xl py-16 px-4 lg:px-20"> 
          <div className="flex flex-col items-center">
            <h1 className='text-white text-2xl text-center font-[700] md:text-3xl'>Kenapa Harus Financial Tracker?</h1>
          </div>

          <div className="content-kenapa mt-[40px] grid lg:grid-cols-2 gap-6 lg:gap-0">
            <div className="flex flex-col">
              <div className="isi-alasan flex items-center gap-2 border-b-1 border-[#bbbdc0] py-4">
                <div className="icon-alasan border-[2.5px] border-white p-2  rounded-[50px]">
                  <CheckCircle color='white' size={30}/>
                </div>
                <div className="alasan leading-[22px]">
                  <h2 className='text-white font-[600] text-[18px] md:text-[24px]'>Mudah Digunakan</h2>
                  <p className='text-[#e2e3e4] leading-[14px] md:leading-normal text-[14px] md:text-[16px]'>Antarmuka yang intuitif dan ramah pengguna memungkinkan siapa saja mengelola keuangan dengan mudah.</p>
                </div>
              </div>

              <div className="isi-alasan flex items-center gap-2 border-b-1 border-[#bbbdc0] py-4">
                <div className="icon-alasan border-[2.5px] border-white p-2 rounded-[50px]">
                  <CheckCircle color='white' size={30}/>
                </div>
                <div className="alasan leading-[22px]">
                  <h2 className='text-white font-[600] text-[18px] md:text-[24px]'>Akurat & Cerdas</h2>
                  <p className='text-[#e2e3e4] leading-[14px] md:leading-normal text-[14px] md:text-[16px]'> Didukung oleh AI dan machine learning untuk prediksi keuangan yang lebih baik.</p>
                </div>
              </div>

              <div className="isi-alasan flex items-center gap-2 border-b-1 border-[#bbbdc0] py-4">
                <div className="icon-alasan border-[2.5px] border-white p-2 rounded-[50px]">
                  <CheckCircle color='white' size={30}/>
                </div>
                <div className="alasan leading-[22px]">
                  <h2 className='text-white font-[600] text-[18px] md:text-[24px]'>Cocok untuk Semua</h2>
                  <p className='text-[#e2e3e4] leading-[14px] md:leading-normal text-[14px] md:text-[16px]'> Baik Anda pelajar, pekerja, atau pebisnis, aplikasi ini siap membantu mengelola keuangan Anda dengan lebih baik.</p>
                </div>
              </div>
            </div>
            <div className="">
              <img className='m-auto rounded-2xl' src="img/chatbot.webp" alt="" width="400px"/>
            </div>
          </div>
      </div>
    </div>  
  )
}

function CardTutor(){
  return(
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900 rounded-2xl p-6 space-y-3" >
            <div className="flex items-center space-x-3">
                <span className="w-10 h-10 flex items-center justify-center bg-primary text-white text-lg font-bold rounded-full">1</span>
                <h2 className="text-lg font-semibold dark:text-white">Buat Akun Anda</h2>
            </div>
            <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center">
                <span className="text-2xl dark:text-white"><User/></span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Daftar dengan email dan buat kata sandi yang kuat untuk keamanan akun Anda.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900 rounded-2xl p-6 space-y-3" >
            <div className="flex items-center space-x-3">
                <span className="w-10 h-10 flex items-center justify-center bg-primary text-white text-lg font-bold rounded-full">2</span>
                <h2 className="text-lg font-semibold dark:text-white">Lengkapi Profil</h2>
            </div>
            <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center">
                <img src="/img/address-card-solid.svg" alt="" className="w-[22px] dark:invert"/>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Isi informasi pribadi dan sesuaikan pengaturan profil Anda.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900 rounded-2xl p-6 space-y-3" >
            <div className="flex items-center space-x-3">
                <span className="w-10 h-10 flex items-center justify-center bg-primary text-white text-lg font-bold rounded-full">3</span>
                <h2 className="text-lg font-semibold dark:text-white">Jelajahi Fitur</h2>
            </div>
            <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center">
            <img src="/img/poo-storm-solid.svg" alt="" className="w-[22px] dark:invert"/>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Temukan berbagai fitur canggih untuk membantu mengelola keuangan Anda.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900 rounded-2xl p-6 space-y-3">
            <div className="flex items-center space-x-3">
                <span className="w-10 h-10 flex items-center justify-center bg-primary text-white text-lg font-bold rounded-full">4</span>
                <h2 className="text-lg font-semibold dark:text-white">Atur Kategori Keuangan</h2>
            </div>
            <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center">
                <img src="/img/hand-holding-dollar-solid.svg" alt="" className="w-[22px] dark:invert"/>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Buat kategori pemasukan dan pengeluaran sesuai kebutuhan Anda.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900 rounded-2xl p-6 space-y-3">
            <div className="flex items-center space-x-3">
                <span className="w-10 h-10 flex items-center justify-center bg-primary text-white text-lg font-bold rounded-full">5</span>
                <h2 className="text-lg font-semibold dark:text-white">Mulai Mencatat Transaksi</h2>
            </div>
            <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center">
                <img src="/img/clipboard-solid.svg" alt="" className="w-[22px] dark:invert"/>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Tambahkan pemasukan, pengeluaran, dan pantau kondisi finansial Anda.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900 rounded-2xl p-6 space-y-3" >
            <div className="flex items-center space-x-3">
                <span className="w-10 h-10 flex items-center justify-center bg-primary text-white text-lg font-bold rounded-full">6</span>
                <h2 className="text-lg font-semibold dark:text-white">Dapatkan Bantuan</h2>
            </div>
            <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center">
                <img src="/img/circle-question-solid.svg" alt="" className="w-[22px] dark:invert"/>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Hubungi tim dukungan jika Anda membutuhkan bantuan atau memiliki pertanyaan.</p>
        </div>
    </div>
  )
} 

function Tutorial(){
  return(
    <div className="tutorial dark:bg-black">
      <div className="container mx-auto">
        <div className="judul-tutor flex flex-col items-center justify-center px-2">
          <h1 className="text-[#374151] dark:text-white font-[700] text-3xl md:text-5xl mt-2 text-center"> Cara Menggunakan <span className="text-primary">Smart Financial Tracker</span></h1>
          {/* <p className='text-[#374151] mt-2 font-[500] text-sm text-center md:w-full md:text-xl'>Ikuti langkah-langkah ini untuk mulai mengelola keuangan Anda dengan Smart Financial Tracker.</p> */}
        </div>
        <CardTutor></CardTutor>
      </div>
    </div>
  )
}

function Benefit() {
    return (
        <div className="max-w-6xl mx-auto p-6 dark:bg-black">
        <div className="judul-tutor flex flex-col items-center justify-center">
          <h1 className="text-[#374151] dark:text-white font-[700] text-3xl md:text-5xl mt-2 text-center"> Benefit <span className="text-primary">Financial Tracker</span></h1>
          {/* <p className='text-[#374151] mt-2 font-[500] text-center text-sm md:text-xl'>Benefit Benefit yang didapatkan dalam menggunakan aplikasi ini.</p> */}
        </div>
        <div className="flex justify-center md:px-10 mt-[60px]">
            <div className="flex flex-col gap-8">
                <div className="border-l-2 border-primary pl-4" >
                    <h2 className="text-xl text-[#374151] dark:text-white font-bold">Kendali Penuh atas Keuangan</h2>
                    <p className="text-gray-400 md:w-[50%]">Pantau, analisis, dan kelola pengeluaran serta pemasukan dengan lebih baik.</p>
                </div>
                <div className="border-l-2 border-primary pl-4" >
                    <h2 className="text-xl text-[#374151] dark:text-white font-bold">Hemat Waktu & Efisien</h2>
                    <p className="text-gray-400 md:w-[50%]">Tidak perlu repot mencatat manual, semua data tercatat otomatis dalam aplikasi.</p>
                </div>
                <div className="border-l-2 border-primary pl-4" >
                    <h2 className="text-xl text-[#374151] dark:text-white font-bold">Bantu Capai Target Finansial</h2>
                    <p className="text-gray-400 md:w-[50%]">Perencanaan dan prediksi keuangan membantu Anda mencapai tujuan keuangan lebih cepat.</p>
                </div>
                <div className="border-l-2 border-primary pl-4" >
                    <h2 className="text-xl text-[#374151] dark:text-white font-bold">Pengambilan Keputusan Lebih Baik</h2>
                    <p className="text-gray-400 md:w-[50%]">Analisis berbasis AI memberikan wawasan cerdas untuk strategi keuangan yang lebih baik.</p>
                </div>
                <div className="border-l-2 border-primary pl-4" >
                    <h2 className="text-xl text-[#374151] dark:text-white font-bold"> Dukungan Chatbot AI</h2>
                    <p className="text-gray-400 md:w-[50%]">Dapatkan rekomendasi dan informasi finansial secara cepat hanya dengan percakapan singkat.</p>
                </div>
            </div>
            <div className="hidden md:flex md:flex-col md:gap-6">
                <CardAbout shadow="shadow-2xl">
                    <img className='m-auto' src="img/contoh1.png" alt="" width="200px"/>
                </CardAbout>
                <CardAbout shadow="shadow-2xl">
                    <img className='m-auto' src="img/contoh1.png" alt="" width="200px"/>
                </CardAbout>
            </div>
        </div>
      </div>
    )
}

function HomePage() {
  return (
      <div className="dark:bg-black">
        <Navbar type='home'/>
        <Home header='Kelola Keuangan dengan' isi='Cerdas Bersama Financial Tracker' deskripsi='Smart Financial Tracker membantu Anda mencatat transaksi, menganalisis pola keuangan, dan memprediksi keuangan dengan Al. Aman, mudah, dan otomatis!'/>
        <FiturUtama/>
        <KenapaHarus/>
        <Benefit/>
        <Tutorial/>
        <FAQ/>
        <Footer />
      </div>
  )
}

export default HomePage