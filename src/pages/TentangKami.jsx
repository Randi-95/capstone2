
import Navbar from '../component/fragments/navbar'
import { Home } from '../component/fragments/home'

function TentangKamiPage() {

  return (
      <div className="">
        <Navbar/>
        <Home header = 'Mengenal Financial Tracker' isi = 'Solusi Keuangan Pintar' deskripsi = 'Financial Tracker hadir untuk membantu Anda mengelola keuangan dengan lebih baik.'/>
      </div>
  )
}

export default TentangKamiPage