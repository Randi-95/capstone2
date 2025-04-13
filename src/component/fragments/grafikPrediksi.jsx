import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getProfil } from "../../services/auth";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
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

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userData = getProfil(token);

  const fetchPrediksi = async () => {
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

        setPrediksiData([
          {
            tanggal,
            "Saldo Prediksi": parseInt(prediksi_saldo?.replace(/\D/g, ""), 10),
            "Batas Atas": parseInt(batas_atas?.replace(/\D/g, ""), 10),
            "Batas Bawah": parseInt(batas_bawah?.replace(/\D/g, ""), 10),
          },
        ]);
      }
    } catch (err) {
      console.error("Gagal memuat prediksi:", err);
      setIsError(true);
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
          <p className="font-medium text-sm">Gagal Memprediksi Data Keuangan</p>
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
    </div>
  );
}

export default GrafikPrediksi;
