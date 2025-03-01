
import Navbar from '../component/fragments/navbar'
import { Home } from '../component/fragments/home'

function TentangKamiPage() {

  return (
      <div className="">
        <Navbar type = 'tentangkami'/>
        <Home header = 'Kenali Lebih Dekat Financial Tracker' isi = 'Solusi Keuangan Pintar untuk Masa Depan Anda' deskripsi = 'Financial Tracker hadir untuk membantu Anda mengelola keuangan dengan lebih baik. Dengan teknologi AI, kami memberikan solusi pencatatan transaksi, analisis keuangan, dan prediksi keuangan yang aman dan otomatis. Bergabunglah dan kelola keuangan Anda dengan lebih cerdas!'/>
      </div>
  )
}

export default TentangKamiPage