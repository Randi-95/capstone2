import { Link } from "react-router-dom";
import { ArrowLeft } from "react-feather";

function TentangFinancialTracker() {
  return (
    <div className="container">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="flex justify-between">
          <Link to="/Profile">
            <ArrowLeft className="text-primary size-8" />
          </Link>
          <h1 className="text-2xl font-bold text-center mb-4 text-primary">
            Financial Tracker
          </h1>
          <p></p>
        </div>

        <h4 className="text-base font-semibold mb-2  dark:text-gray-300">
          1. Tentang Financial Tracker
        </h4>

        <p className="text-justify text-sm mb-4 leading-relaxed dark:text-gray-300">
          Generasi muda saat ini sering menghadapi tantangan dalam mengelola
          keuangan secara efektif. Kurangnya pemahaman mengenai alur pemasukan
          dan pengeluaran dapat memicu permasalahan finansial di masa depan.
          Untuk menjawab kebutuhan tersebut, kami menghadirkan Smart Financial
          Tracker, sebuah aplikasi finansial berbasis teknologi yang dirancang
          untuk membantu pengguna mengelola keuangan mereka dengan lebih baik
          dan cerdas. Smart Financial Tracker menawarkan berbagai fitur unggulan
          seperti dasbor interaktif, analisis keuangan berbasis AI, serta
          chatbot pintar yang memberikan wawasan personal mengenai kondisi
          keuangan pengguna. Aplikasi ini dilengkapi tampilan kalender keuangan
          yang menyerupai Google Calendar, sehingga pengguna dapat melihat dan
          mengelola transaksi berdasarkan periode harian, mingguan, bulanan,
          hingga tahunan. Selain itu, aplikasi ini juga mengintegrasikan
          teknologi machine learning dengan metode time series forecasting untuk
          memprediksi kondisi keuangan di masa mendatang. Chatbot berbasis AI
          memungkinkan pengguna untuk berinteraksi langsung dengan data keuangan
          mereka, termasuk melakukan kueri ke database SQL secara praktis dan
          intuitif. Dengan kombinasi teknologi dan kemudahan penggunaan, Smart
          Financial Tracker hadir sebagai solusi komprehensif untuk mendukung
          generasi muda dalam membangun masa depan finansial yang lebih stabil
          dan terencana.
        </p>
      </div>
    </div>
  );
}

export default TentangFinancialTracker;
