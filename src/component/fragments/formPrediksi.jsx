import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import { getProfil } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import url from "../../services/api_key";
import { Delete, XCircle } from "react-feather";

function FormPrediksi() {
  const token = localStorage.getItem("token");
  const userData = getProfil(token);
  const navigate = useNavigate();

  const [summaryTransactions, setSummaryTransaction] = useState({});
  const [prediksi, setPrediksi] = useState(0);

  useEffect(() => {
    const handlerSummary = async () => {
      try {
        const res = await axios.get(`${url}/transactions/${userData.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data.status === "Sukses") {
          setSummaryTransaction(res.data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (token) {
      handlerSummary();
    } else {
      navigate("/login");
    }
  }, []);


  const handleNumberClick = (number) => {
    setPrediksi((prevValue) => {
      const prevValueStr = prevValue.toString();
      
      if (prevValueStr.length >= 2) {
        return prevValue;
      }

      if (prevValue === 0) {
        return number;
      }

      return Number(`${prevValue}${number}`);
    });
  };

  const handleDelete = () => {
    setPrediksi((prevValue) => {
      const valueStr = prevValue.toString();
      if (valueStr.length <= 1) {
        return 0;
      }
      return Number(valueStr.slice(0, -1));
    });
  };

  const handleClear = () => {
    setPrediksi(0);
  };

  return (
    <div className="p-4 dark:bg-slate-800">
      <div className="flex items-center p-5 w-[100%] m-auto h-[20vh] bg-gray-50 dark:bg-slate-900 shadow-sm rounded-xl">
        <div className="flex items-center justify-center w-full rounded-xl h-[15vh] bg-gradient-to-b from-gray-200 to-gray-10 dark:from-gray-700 dark:to-gray-800">
          <h1 className="font-semibold text-4xl dark:text-white">{prediksi} Bulan</h1>
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-4 gap-6 py-6">
        <div 
          className="bg-gray-100 dark:bg-gray-900 cursor-pointer font-bold text-xl text-center rounded-xl text-black dark:text-white py-4"
          onClick={() => handleNumberClick(1)}
        >1</div>
        <div 
          className="bg-gray-100 dark:bg-gray-900 cursor-pointer font-bold text-xl text-center rounded-xl text-black dark:text-white py-4"
          onClick={() => handleNumberClick(2)}
        >2</div>
        <div 
          className="bg-gray-100 dark:bg-gray-900 cursor-pointer font-bold text-xl text-center rounded-xl text-black dark:text-white py-4"
          onClick={() => handleNumberClick(3)}
        >3</div>
        <div 
          className="bg-gray-100 dark:bg-gray-900 cursor-pointer font-bold text-xl text-center rounded-xl text-black dark:text-white py-4"
          onClick={() => handleNumberClick(4)}
        >4</div>
        <div 
          className="bg-gray-100 dark:bg-gray-900 cursor-pointer font-bold text-xl text-center rounded-xl text-black dark:text-white py-4"
          onClick={() => handleNumberClick(5)}
        >5</div>
        <div 
          className="bg-gray-100 dark:bg-gray-900 cursor-pointer font-bold text-xl text-center rounded-xl text-black dark:text-white py-4"
          onClick={() => handleNumberClick(6)}
        >6</div>
        <div 
          className="bg-gray-100 dark:bg-gray-900 cursor-pointer font-bold text-xl text-center rounded-xl text-black dark:text-white py-4"
          onClick={() => handleNumberClick(7)}
        >7</div>
        <div 
          className="bg-gray-100 dark:bg-gray-900 cursor-pointer font-bold text-xl text-center rounded-xl text-black dark:text-white py-4"
          onClick={() => handleNumberClick(8)}
        >8</div>
        <div 
          className="bg-gray-100 dark:bg-gray-900 cursor-pointer font-bold text-xl text-center rounded-xl text-black dark:text-white py-4"
          onClick={() => handleNumberClick(9)}
        >9</div>
        <div 
          className="bg-gray-100 dark:bg-gray-900 cursor-pointer font-bold text-xl text-center rounded-xl text-black dark:text-white py-4 flex justify-center"
          onClick={handleClear}
        ><XCircle className="dark:text-white" /></div>
        <div 
          className="bg-gray-100 dark:bg-gray-900 cursor-pointer font-bold text-xl text-center rounded-xl text-black dark:text-white py-4"
          onClick={() => handleNumberClick(0)}
        >0</div>
        <div 
          className="bg-gray-100 dark:bg-gray-900 cursor-pointer font-bold text-xl text-center rounded-xl text-black dark:text-white py-4 flex justify-center"
          onClick={handleDelete}
        ><Delete className="dark:text-white" /></div>
      </div>
      <div className="bg-violet-500 dark:bg-violet-600 hover:bg-violet-600 dark:hover:bg-violet-700 rounded-xl py-3 mb-20 cursor-pointer">
        <h1 className="text-center font-semibold text-xl text-white cursor-pointer">Prediksi</h1>
      </div>
    </div>
  );
}

export default FormPrediksi;