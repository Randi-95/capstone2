import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowDownLeft, ArrowUpRight, Filter } from "react-feather";
import { Link } from 'react-router';
import { getProfil } from '../services/auth';
import { useNavigate } from 'react-router';

const url = "https://capstone-be-production.up.railway.app"
// const url = "http://localhost:9000"


const Riwayat = () => {
  const [summaryTransactions, setSummaryTransactions] = useState([])

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

    if(token) {
      handlerSummary()
    } else {
      navigate("/login")
    }
  })

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto max-w-md">
        <div className="mb-6 flex items-center justify-between">
        <Link to= "/Dashboard"><ArrowLeft className="text-primary size-8"/></Link>
          <h1 className="text-2xl font-bold text-primary">Riwayat Transaksi</h1>
          <button className="text-primary hover:bg-gray-100 p-2 rounded-full">
            <Filter className="w-6 h-6" />
          </button>
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
          <div className="bg-white shadow-md rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <ArrowDownLeft className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Gaji Bulanan</h3>
                  <p className="text-sm font-medium text-green-600">Pemasukan</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 mb-1">20 Maret 2025</p>
                <p className="text-xl font-bold text-green-700">Rp 1.000.000</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <ArrowUpRight className="text-red-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Pengeluaran</h3>
                  <p className="text-sm font-medium text-red-600">Pengeluaran</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 mb-1">20 Maret 2025</p>
                <p className="text-xl font-bold text-red-700">Rp 100.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Riwayat;