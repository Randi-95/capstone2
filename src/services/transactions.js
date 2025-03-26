import axios from "axios";
import { getProfil } from "./auth";

const url = "https://capstone-be-production.up.railway.app"
// const url = "http://localhost:9000"
const token = localStorage.getItem('token')

const userData = getProfil(token)
export const addTransaction = async (data, callback) => {
    try{
        const res = await axios.post(`${url}/transactions/${userData.id}`, data, {
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
