import {
  User,
  Book,
  CreditCard,
  AtSign,
  LogOut,
  Headphones,
  Calendar,
  BarChart,
  Grid,
  MessageCircle,
  Menu,
  DollarSign,
  Clock,
  Activity,
  Plus,
  ArrowDown,
  ArrowUp,
  ArrowLeft,
} from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { addTransaction } from "../services/transactions";

function FormKeuangan() {
  const deskripsiRef = useRef(null);
  const jumlahRef = useRef(null);
  const typeRef = useRef(null);
  const tanggalRef = useRef(null);
  const [errorMessage, setError] = useState("");
  const [succesMessage, setSucces] = useState("");

  const navigate = useNavigate();

  const handlerTransaksi = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    const data = {
      deskripsi: deskripsiRef.current.value,
      jumlah: jumlahRef.current.value,
      type: typeRef.current.value,
      tanggal: tanggalRef.current.value,
    };

    deskripsiRef.current.value = "";
    jumlahRef.current.value = "";
    typeRef.current.value = "";
    tanggalRef.current.value = "";

    console.log(data);

    if (token) {
      addTransaction(data, (status, res) => {
        if (status) {
          setSucces(res);
        } else {
          setError(res);
        }
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="">
      <div className="max-w-md mx-auto bg-white rounded-2xl p-6">
        <div className="mb-10 flex items-center justify-between">
          <Link to="/Dashboard">
            <ArrowLeft className="text-primary size-8" />
          </Link>
          <h2 className="text-2xl font-bold text-primary">Tambah Transaksi</h2>
          <span></span>
        </div>
        <form className="space-y-4" onSubmit={handlerTransaksi}>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Deskripsi
            </label>
            <div className="relative">
              <input
                required
                ref={deskripsiRef}
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
                required
                ref={jumlahRef}
                type="number"
                placeholder="10000"
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Kategori
            </label>
            <select
              required
              ref={typeRef}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled selected className="text-xs">
                Pilih Kategori
              </option>
              <option value="pemasukan" className="text-green-500 text-xs">
                Pemasukan
              </option>
              <option value="pengeluaran" className="text-red-500 text-xs">
                Pengeluaran
              </option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Tanggal Transaksi
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="text-gray-400 size-5" />
              </div>
              <input
                required
                type="date"
                ref={tanggalRef}
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                placeholder="Pilih Tanggal"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#7f5efd] to-[#4f9efd] font-bold text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 mt-4"
          >
            Simpan Transaksi
          </button>
        </form>
        {succesMessage && (
          <div
            role="alert"
            className="border-s-4 border-green-700 bg-green-50 p-4 mt-4"
          >
            <div className="flex items-center gap-2 text-green-700 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>

              <strong className="font-medium text-center">
                {succesMessage}
              </strong>
            </div>
          </div>
        )}
        {errorMessage && (
          <div
            role="alert"
            className="border-s-4 border-red-700 bg-red-50 p-4 mt-4"
          >
            <div className="flex items-center gap-2 text-red-700 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>

              <strong className="font-medium text-center">
                {errorMessage}
              </strong>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormKeuangan;
