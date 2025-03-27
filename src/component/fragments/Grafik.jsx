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

const Grafik = () => {
  const [summaryTransactions, setSummaryTransactions] = useState({});
  const [historyTransactions, setHistoryTransactions] = useState([]);
  const [dataKeuangan, setDataKeuangan] = useState([]);
  const [saldoAkhir, setSaldoAkhir] = useState(0);

  const navigate = useNavigate();
  
  const token = localStorage.getItem("token");  
  const userData = getProfil(token);

  useEffect(() => {
    const handlerSummary = async () => {
      try {
        const res = await axios.get(`${url}/transactions/${userData.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.data.status === "Sukses") {
          setSummaryTransactions(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching summary:", err);
      }
    };

    const handlerHistory = async () => {
      try {
        const res = await axios.get(`${url}/transactions/detail/${userData.id}`, {
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
      let saldo = 0; // Saldo awal
      const processedData = [];

      // **Proses data transaksi**
      historyTransactions
        .sort((a, b) => new Date(a.transaction_date) - new Date(b.transaction_date)) // Urutkan berdasarkan tanggal
        .forEach((trx) => {
          const tanggal = trx.transaction_date;
          const jumlah = parseInt(trx.amount.replace(/\D/g, ""), 10); // Hapus Rp dan titik

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

          existing.saldo = saldo; // Set saldo kumulatif
        });

      setDataKeuangan(processedData);
      setSaldoAkhir(saldo);
    }
  }, [historyTransactions]);

  return (
    <div>
      <ResponsiveContainer  height={300}>
        <LineChart data={dataKeuangan}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="tanggal" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pemasukan" stroke="green" />
          <Line type="monotone" dataKey="pengeluaran" stroke="red" />
          <Line type="monotone" dataKey="saldo" stroke="blue" />
        </LineChart>
      </ResponsiveContainer>

      <h2 style={{ textAlign: "center", marginTop: "10px" }}>
        Saldo Sekarang: <span style={{ color: "blue" }}>Rp {saldoAkhir.toLocaleString("id-ID")}</span>
      </h2>
    </div>
  );
};

export default Grafik;
