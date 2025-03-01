import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-center">
      <h1 className="text-7xl font-bold text-primary">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-4">Oops! Halaman Tidak Ditemukan</h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2">Halaman yang Anda cari tidak tersedia atau telah dipindahkan.</p>
      
      <Link to="/" className="mt-6 px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-opacity-80 transition">
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;
