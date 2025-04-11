import React, { useState, useEffect } from "react";
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
} from "recharts";
import url from "../../services/api_key";
import { LoaderGrafik} from "../elements/loader";

const Grafik = () => {
  const [summaryTransactions, setSummaryTransactions] = useState({});
  const [historyTransactions, setHistoryTransactions] = useState([]);
  const [dataKeuangan, setDataKeuangan] = useState([]);
  const [saldoAkhir, setSaldoAkhir] = useState(0);
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const navigate = useNavigate();
  
  const token = localStorage.getItem("token");  
  const userData = getProfil(token);

  useEffect(() => {
    const handlerSummary = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(`${url}/transactions/summary`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.data.status === "Sukses") {
          setSummaryTransactions(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching summary:", err);
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    };

    const handlerHistory = async () => {
      try {
        const res = await axios.get(`${url}/transactions/detail`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data.status === "Sukses") {
          setHistoryTransactions(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching history:", err);
      }
    };

    if (token) {
      handlerSummary();
      handlerHistory();
    } else {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (historyTransactions.length > 0) {
      let saldo = 0; 
      const processedData = [];

      historyTransactions
        .sort((a, b) => new Date(a.transaction_date) - new Date(b.transaction_date))
        .forEach((trx) => {
          const tanggal = trx.transaction_date;
          const jumlah = parseInt(trx.amount.replace(/\D/g, ""), 10);

          let existing = processedData.find((item) => item.tanggal === tanggal);
          if (!existing) {
            existing = { tanggal, pemasukan: 0, pengeluaran: 0, saldo: 0 };
            processedData.push(existing);
          }

          if (trx.type === "pemasukan") {
            existing.pemasukan += jumlah;
            saldo += jumlah;
          } else {
            existing.pengeluaran += jumlah;
            saldo -= jumlah;
          }

          existing.saldo = saldo; 
        });

      setDataKeuangan(processedData);
      setSaldoAkhir(saldo);
    }
  }, [historyTransactions]);

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

  return (
    <div>
      {isLoading ? (
        <LoaderGrafik />
      ) : isError ? (
        <div className="bg-red-200 dark:bg-red-900 border border-red-200 dark:border-red-700 text-red-600 dark:text-red-300 rounded-xl p-4 text-center shadow-sm">
        <p className="font-medium text-sm">
          Gagal memuat data. Periksa koneksi internet kamu.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-3 text-sm text-white bg-red-500 hover:bg-red-600 transition px-4 py-1.5 rounded-lg"
        >
          Coba Lagi
        </button>
      </div>
      ) : (
        <>
      <ResponsiveContainer  height={300}>
        <LineChart data={dataKeuangan}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="tanggal" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ color: 'var(--color-text, #333)' }} className="dark:text-gray-300" />
          <Line type="monotone" dataKey="pemasukan" stroke="#4ade80" strokeWidth={2} dot={{ stroke: '#4ade80', strokeWidth: 2 }} />
          <Line type="monotone" dataKey="pengeluaran" stroke="#f87171" strokeWidth={2} dot={{ stroke: '#f87171', strokeWidth: 2 }} />
          <Line type="monotone" dataKey="saldo" stroke="#60a5fa" strokeWidth={2} dot={{ stroke: '#60a5fa', strokeWidth: 2 }} />
        </LineChart>
      </ResponsiveContainer>

      <h2 className="text-center mt-6 text-gray-800 dark:text-white font-medium text-lg">
        Saldo Sekarang: <span className="text-blue-500 dark:text-blue-400 font-semibold">Rp {saldoAkhir.toLocaleString("id-ID")}</span>
      </h2>      
        </>
      )}
    </div>
  );
};

export default Grafik;
