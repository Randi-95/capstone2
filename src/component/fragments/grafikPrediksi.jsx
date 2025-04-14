import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getProfil } from "../../services/auth";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import url from "../../services/api_key";
import { LoaderGrafik } from "../elements/loader";

function GrafikPrediksi() {
  const [tanggalPrediksi, setTanggalPrediksi] = useState("");
  const [prediksiData, setPrediksiData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userData = getProfil(token);

  const formatCurrency = (value) => {
    const cleanValue = value
      .replace("Rp ", "")
      .replace(/\./g, "")
      .replace(",", ".");
    return parseFloat(cleanValue);
  };

  const fetchPrediksi = async () => {
    if (!tanggalPrediksi) {
      alert("Tanggal prediksi wajib diisi!");
      return;
    }
    try {
      setIsLoading(true);
      setIsError(false);

      const res = await axios.post(
        `${url}/predict`,
        {
          tanggal_prediksi: tanggalPrediksi,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.status === "success") {
        const { tanggal, prediksi_saldo, batas_atas, batas_bawah } =
          res.data.data;

        console.log(res.data.data);

        setPrediksiData([
          {
            tanggal,
            "Saldo Prediksi": formatCurrency(prediksi_saldo),
            "Batas Atas": formatCurrency(batas_atas),
            "Batas Bawah": formatCurrency(batas_bawah),
          },
        ]);

        console.log(prediksiData);
      }
    } catch (err) {
      console.error("Gagal memuat prediksi:", err);
      setIsError(true);

      let finalMessage = "";

      if (err.response?.data) {
        const errorData = err.response.data;

        if (errorData.status === "Error" && errorData.message?.detail) {
          finalMessage = errorData.message.detail;
        } else if (errorData.status === "fail" && errorData.message) {
          finalMessage = errorData.message;
        } else if (errorData.detail) {
          finalMessage = errorData.detail;
        } else if (typeof errorData.message === "string") {
          finalMessage = errorData.message;
        } else {
          finalMessage =
            typeof errorData === "object"
              ? JSON.stringify(errorData)
              : String(errorData);
        }
      } else if (err.message) {
        finalMessage = err.message;
      } else {
        finalMessage = "Terjadi kesalahan tidak diketahui.";
      }

      setErrorMessage(finalMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-700 rounded shadow-md">
          <p className="text-gray-700 dark:text-gray-200">{`Tanggal: ${label}`}</p>
          {payload.map((entry, index) => (
            <p key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name}: Rp ${entry.value.toLocaleString("id-ID")}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  if (!token) {
    navigate("/login");
    return null;
  }

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center gap-2">
        <input
          type="date"
          value={tanggalPrediksi}
          onChange={(e) => setTanggalPrediksi(e.target.value)}
          className="border px-3 py-2 rounded-lg dark:bg-gray-800 dark:text-white"
        />
        <button
          onClick={fetchPrediksi}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Prediksi
        </button>
      </div>
      {isLoading ? (
        <LoaderGrafik />
      ) : isError ? (
        <div className="bg-red-200 dark:bg-red-900 border border-red-200 dark:border-red-700 text-red-600 dark:text-red-300 rounded-xl p-4 text-center shadow-sm">
          <p className="font-medium text-sm">
            {typeof errorMessage === "object"
              ? JSON.stringify(errorMessage)
              : errorMessage}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-3 text-sm text-white bg-red-500 hover:bg-red-600 transition px-4 py-1.5 rounded-lg"
          >
            Coba Lagi
          </button>
        </div>
      ) : prediksiData ? (
        <>
          <ResponsiveContainer height={300}>
            <BarChart data={prediksiData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="tanggal" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="Batas Atas" fill="#4ade80" />
              <Bar dataKey="Batas Bawah" fill="#f87171" />
              <Bar dataKey="Saldo Prediksi" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
          <h2 className="text-center mt-6 text-gray-800 dark:text-white font-medium text-lg">
            Prediksi Saldo:{" "}
            <span className="text-blue-500 dark:text-blue-400 font-semibold">
              Rp{" "}
              {prediksiData?.[0]?.["Saldo Prediksi"]?.toLocaleString("id-ID")}
            </span>
          </h2>
        </>
      ) : null}

      <div className="mt-3 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
        <h3 className="font-medium text-xl text-blue-800 dark:text-blue-300 mb-2">
          Catatan Penting!!
        </h3>
        <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">
        Sebelum melakukan prediksi, pastikan memenuhi syarat berikut:
        </h3>
        <ul className="list-disc list-inside text-sm text-blue-700 dark:text-blue-300 space-y-1">
          <li>Data Transaksi Lengkap: Sistem membutuhkan data pemasukan dan pengeluaran untuk melakukan prediksi yang akurat.</li>
          <li>Minimal Dua Tanggal: Harus terdapat transaksi pada minimal dua tanggal berbeda untuk melakukan analisis tren.</li>
          <li>Tanggal Prediksi Valid: Tanggal prediksi yang dipilih harus lebih besar (setelah) dari tanggal data terakhir yang tersedia di sistem.
          Contoh: Jika data terakhir tersedia hingga 15 April 2025, maka tanggal prediksi harus setelah tanggal tersebut.</li>
        </ul>
      </div>

    </div>
  );
}

export default GrafikPrediksi;
