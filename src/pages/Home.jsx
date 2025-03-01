
import Navbar from '../component/fragments/navbar'
import { Home } from '../component/fragments/home'

function HomePage() {

  return (
      <div className="">
        <Navbar type = 'home'/>
        <Home header = 'Kelola Keuangan dengan' isi = 'Cerdas Bersama Financial Tracker' deskripsi = 'Smart Financial Tracker membantu Anda mencatat transaksi, menganalisis pola keuangan, dan memprediksi keuangan dengan Al. Aman, mudah, dan otomatis!'/>
      </div>
  )
}

export default HomePage