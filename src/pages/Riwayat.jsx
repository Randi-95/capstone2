import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowDownLeft, ArrowUpRight, Filter, Plus } from "react-feather";
import { Link } from 'react-router';
import { getProfil } from '../services/auth';
import { useNavigate } from 'react-router';
import url from '../services/api_key';


const Riwayat = () => {
  const [summaryTransactions, setSummaryTransactions] = useState([])
  const [historyTransactions, setHistoryTransactions] = useState([])

  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const userData = getProfil(token)
  
  useEffect(() => {
    const handlerSummary = async () => {
      try {
        const res = await axios.get(`${url}/transactions/${userData.id}`, {
          headers: {
              Authorization: `Bearer ${token}`
          }
        })
        if(res.data.status === "Sukses"){
          setSummaryTransactions(res.data.data)
          console.log(res.data.data)
        }
      } catch(err) {
        console.log(err)
      }
    }

    const handlerHistory = async () => {
      try {
        const res = await axios.get(`${url}/transactions/detail/${userData.id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        if(res.data.status === "Sukses"){
          setHistoryTransactions(res.data.data)
          console.log(res.data.data)
        }
      } catch(err) {
        console.log(err)
      }
    }

    if(token) {
      handlerSummary()
      handlerHistory()
    } else {
      navigate("/login")
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto max-w-md">
        <div className="mb-6 flex items-center justify-between">
        <Link to= "/Dashboard"><ArrowLeft className="text-primary size-8"/></Link>
          <h1 className="text-2xl font-bold text-primary">Riwayat Transaksi</h1>
        <Link to= "/Keuangan"><Plus className="text-primary size-8"/></Link>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-6 text-center">
          <h2 className="text-gray-500 text-sm mb-2">Total Balance</h2>
          <p className="text-3xl font-bold text-primary">{summaryTransactions.saldo_sekarang || "Rp. 0"}</p>
          
          <div className="flex justify-between mt-4 space-x-4">
            <div className="bg-green-100 rounded-lg p-3 flex-1 text-center">
              <p className="text-green-700 font-semibold">Pemasukan</p>
              <p className="text-xl font-bold text-green-900">{summaryTransactions.total_pemasukan || "Rp. 0"}</p>
            </div>
            <div className="bg-red-100 rounded-lg p-3 flex-1 text-center">
              <p className="text-red-700 font-semibold">Pengeluaran</p>
              <p className="text-xl font-bold text-red-900">{summaryTransactions.total_pengeluaran || "Rp. 0"}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {historyTransactions.map((history) => (
          <div className="bg-white shadow-md rounded-xl p-4" key={history.id}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`bg-${history.type === "pemasukan" ? "green" : "red"}-100 p-3 rounded-full`}>
                  {history.type === "pemasukan" ? <ArrowDownLeft className="text-green-600 w-6 h-6" /> : <ArrowUpRight className="text-red-600 w-6 h-6" />}
                 
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{history.description}</h3>
                  <p className={`text-sm font-medium text-${history.type === "pemasukan" ? "green" : "red"}-600`}>{history.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 mb-1">{history.transaction_date}</p>
                <p className={`text-xl font-bold text-${history.type === "pemasukan" ? "green" : "red"}-700`}>{history.amount}</p>
              </div>
            </div>
          </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Riwayat;