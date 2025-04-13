import Navbar from '../component/fragments/navbar'
import { Home } from '../component/fragments/home'
import CardAbout from '../component/elements/cardAbout'
import {Shield, Zap, CheckCircle, TrendingUp} from 'react-feather'
import { Footer } from '../component/fragments/footer'


const Deskripsi = () => {
  return (
        <div className='flex justify-around gap-6 flex-wrap items-center px-4 lg:h-screen dark:bg-black'>
          <div className='m-auto xl:m-0'>
            <CardAbout shadow="shadow-2xl">
              <img className='m-auto' src="img/contoh1.png" alt="" width="300px"/>
            </CardAbout>
          </div>
          <div className="w-[700px] mt-10 md:mt-0 px-8 md:w-[900px] lg:w-[700px]">
            <h1 className='text-2xl md:text-5xl font-bold text-[#374151] dark:text-white'>Mulai Perjalanan Keuangan Cerdas Anda dengan <span className='text-primary'> Smart Financial Tracker </span></h1>
            <p className='mt-6 text-lg text-gray-600 dark:text-gray-300'>Banyak generasi muda kesulitan mengelola keuangan karena kurangnya kesadaran terhadap pola finansial pribadi. Dengan tim yang terdiri dari Machine Learning Engineer serta Front-End & Back-End Developer, kami mengembangkan aplikasi fintech berbasis AI. Aplikasi ini menawarkan financial dashboard, time series forecasting, dan chatbot interaktif untuk membantu pengguna mengontrol keuangan mereka dengan lebih baik.</p>
          </div>
      </div>
  )
}

const NilaiInti = () => {
    return (
      <div className='mt-[90px] px-8 dark:bg-black'>
          <div className='md:px-[120px] mb-10'>
            <h1 className='text-2xl md:text-5xl font-bold text-center text-[#374151] dark:text-white'><span className='text-primary'>Fondasi</span> Kepercayaan, Inovasi, Kemudahan, dan Pertumbuhan Finansial</h1>
          </div>
          <div className="flex items-center justify-center">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-full max-w-6xl'>
              <CardAbout>
                <div className="flex gap-4 flex-col md:flex-row md:h-[300px] lg:h-auto">
                  <div>
                  <div className="icon bg-primary rounded-full p-4 w-fit">
                    <Shield color='white' size={50}/>
                  </div>
                  </div>
                  <div className=''>
                      <h1 className='text-2xl font-bold text-[#374151] dark:text-white'>Keamanan Tanpa Kompromi</h1>
                      <p className='dark:text-gray-300'>Kami menjaga data Anda seperti aset berharga. Dengan enkripsi, informasi keuangan Anda selalu aman di tangan kami.</p>
                  </div>
                </div>
              </CardAbout>
              <CardAbout>
                <div className="flex gap-4 flex-col md:flex-row md:h-[300px] lg:h-auto">
                  <div>
                  <div className="icon bg-primary rounded-full p-4 w-fit">
                    <Zap color='white' size={50}/>
                  </div>
                  </div>
                  <div className=''>
                      <h1 className='text-2xl font-bold text-[#374151] dark:text-white'>Inovasi yang Membantu Maju</h1>
                      <p className='dark:text-gray-300'>Teknologi AI kami dirancang untuk memahami pola keuangan Anda, dan membantu Anda membuat keputusan yang lebih baik setiap hari.</p>
                  </div>
                </div>
              </CardAbout>
              <CardAbout>
                <div className="flex gap-4 flex-col md:flex-row md:h-[300px] lg:h-auto">
                  <div>
                  <div className="icon bg-primary rounded-full p-4 w-fit">
                    <CheckCircle color='white' size={50}/>
                  </div>
                  </div>
                  <div className=''>
                      <h1 className='text-2xl font-bold text-[#374151] dark:text-white'>Kemudahan di Setiap Langkah</h1>
                      <p className='dark:text-gray-300'>Dengan desain intuitif dan fitur otomatisasi, kami memastikan pengalaman finansial Anda lebih lancar dan menyenangkan</p>
                  </div>
                </div>
              </CardAbout>
              <CardAbout>
                <div className="flex gap-4 flex-col md:flex-row md:h-[300px] lg:h-auto">
                  <div>
                  <div className="icon bg-primary rounded-full p-4 w-fit">
                    <TrendingUp color='white' size={50}/>
                  </div>
                  </div>
                  <div className=''>
                      <h1 className='text-2xl font-bold text-[#374151] dark:text-white'>Pertumbuhan Finansial</h1>
                      <p className='dark:text-gray-300'>Dengan analisis cerdas dan blog artikel yang bermanfaat, kami membantu Anda membangun masa depan keuangan yang lebih stabil dan sejahtera.</p>
                  </div>
                </div>
              </CardAbout>
            </div>
          </div>
      </div>
    )
}


export function TentangKamiPage() {

  return (
      <div className="dark:bg-black">
        <Navbar/>
        <Home header = 'Mengenal Financial Tracker' isi = 'Solusi Keuangan Pintar' deskripsi = 'Financial Tracker hadir untuk membantu Anda mengelola keuangan dengan lebih baik.'/>
        <Deskripsi />
        <NilaiInti />
        <Footer/>
      </div>
  )
}