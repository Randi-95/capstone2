import axios from "axios";
import { getProfil } from "./auth";
import url from "./api_key";


export const addTransaction = async (data, callback) => {
    try{
        const token = localStorage.getItem('token')
        const userData = getProfil(token)
        const res = await axios.post(`${url}/transactions`, data, {
            headers: {
                 Authorization: `Bearer ${token}`
            }
        })

        callback(true, res.data.pesan)
        console.log(res.data.pesan)
    } catch(err) {
        callback(false, err.response.data.pesan)
        console.log(err)
    }
}
