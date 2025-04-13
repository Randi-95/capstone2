import axios from "axios";
import { getProfil } from "./auth";
import url from "./api_key";


export const addPredict = async (data, callback) => {
    try{
        const token = localStorage.getItem('token')
        const userData = getProfil(token)
        const res = await axios.post(`${url}/predict`, data, {
            headers: {
                 Authorization: `Bearer ${token}`
            }
        })

        callback(true, res.data)
    } catch(err) {
        callback(false, err.response.data.status)
        console.log(err)
    }
}
