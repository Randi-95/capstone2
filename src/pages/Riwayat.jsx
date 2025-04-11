import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowDownLeft,
  ArrowUpRight,
  Filter,
  Plus,
  Loader,
} from "react-feather";
import { Link } from "react-router";
import { getProfil } from "../services/auth";
import { useNavigate } from "react-router";
import url from "../services/api_key";
import { LoaderSaldo, LoaderTransactionHistory } from "../component/elements/loader";

const Riwayat = () => {
  const [summaryTransactions, setSummaryTransactions] = useState([]);
  const [historyTransactions, setHistoryTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userData = getProfil(token);

  useEffect(() => {
    const handlerSummary = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${url}/transactions/summary`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.data.status === "Sukses") {
          setSummaryTransactions(res.data.data);
          console.log(res.data.data);
        }
      } catch (err) {
        console.log(err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    const handlerHistory = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `${url}/transactions/detail`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.data.status === "Sukses") {
          setHistoryTransactions(res.data.data);
          console.log(res.data.data);
        }
      } catch (err) {
        console.log(err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      handlerSummary();
      handlerHistory();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black p-4">
      <div className="container mx-auto max-w-md">
        <div className="mb-6 flex items-center justify-between">
          <Link to="/Dashboard">
            <ArrowLeft className="text-primary size-8" />
          </Link>
          <h1 className="text-2xl font-bold text-primary">Riwayat Transaksi</h1>
          <Link to="/Keuangan">
            <Plus className="text-primary size-8" />
          </Link>
        </div>

        {isLoading ? (
          <div className="bg-white rounded-xl dark:bg-gray-900 shadow-md dark:shadow-gray-900 p-6 mb-6 text-center">
            <h2 className="text-gray-500 dark:text-gray-300 text-sm mb-2">
              Total Balance
            </h2>
            <p className="text-3xl font-bold text-primary flex justify-center">
              <LoaderSaldo fontSize={"text-3xl"} />
            </p>

            <div className="flex justify-between mt-4 space-x-4">
              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3 flex-1 text-center">
                <p className="text-green-700 dark:text-green-400 font-semibold">
                  Pemasukan
                </p>
                <p className="text-xl font-bold text-green-900 dark:text-green-300 flex justify-center">
                  <LoaderSaldo fontSize={"text-xl"} />
                </p>
              </div>
              <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-3 flex-1 text-center">
                <p className="text-red-700 dark:text-red-400 font-semibold">
                  Pengeluaran
                </p>
                <p className="text-xl font-bold text-red-900 dark:text-red-300 flex justify-center">
                  <LoaderSaldo fontSize={"text-xl"} />
                </p>
              </div>
            </div>
          </div>
        ) : isError ? (
          <div className="bg-red-200 dark:bg-red-900 border border-red-200 dark:border-red-700 text-red-600 dark:text-red-300 rounded p-8 mb-2 text-center shadow-sm">
            <p className="font-medium text-sm">Gagal memuat data.</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl dark:bg-gray-900 shadow-md dark:shadow-gray-900 p-6 mb-6 text-center">
            <h2 className="text-gray-500 dark:text-gray-300 text-sm mb-2">
              Total Balance
            </h2>
            <p className="text-3xl font-bold text-primary">
              {summaryTransactions.saldo_sekarang || "Rp. 0"}
            </p>

            <div className="flex justify-between mt-4 space-x-4">
              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3 flex-1 text-center">
                <p className="text-green-700 dark:text-green-400 font-semibold">
                  Pemasukan
                </p>
                <p className="text-xl font-bold text-green-900 dark:text-green-300">
                  {summaryTransactions.total_pemasukan || "Rp. 0"}
                </p>
              </div>
              <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-3 flex-1 text-center">
                <p className="text-red-700 dark:text-red-400 font-semibold">
                  Pengeluaran
                </p>
                <p className="text-xl font-bold text-red-900 dark:text-red-300">
                  {summaryTransactions.total_pengeluaran || "Rp. 0"}
                </p>
              </div>
            </div>
          </div>
        )}

        {isLoading ? (
          <div className="space-y-4">
            <LoaderTransactionHistory />
            <LoaderTransactionHistory />
            <LoaderTransactionHistory />
          </div>
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
        <div className="space-y-4">
          {historyTransactions.map((history) => (
            <div
              className="bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-900 rounded-xl p-4"
              key={history.id}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className={
                      history.type === "pemasukan"
                        ? "bg-green-100 dark:bg-green-900/30 p-3 rounded-full"
                        : "bg-red-100 dark:bg-red-900/30 p-3 rounded-full"
                    }
                  >
                    {history.type === "pemasukan" ? (
                      <ArrowDownLeft className="text-green-600 dark:text-green-400 w-6 h-6" />
                    ) : (
                      <ArrowUpRight className="text-red-600 dark:text-red-400 w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {history.description}
                    </h3>
                    <p
                      className={
                        history.type === "pemasukan"
                          ? "text-sm font-medium text-green-600 dark:text-green-400"
                          : "text-sm font-medium text-red-600 dark:text-red-400"
                      }
                    >
                      {history.type}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {history.transaction_date}
                  </p>
                  <p
                    className={
                      history.type === "pemasukan"
                        ? "text-xl font-bold text-green-700 dark:text-green-400"
                        : "text-xl font-bold text-red-700 dark:text-red-400"
                    }
                  >
                    {history.amount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default Riwayat;
