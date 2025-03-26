import axios from "axios";
import { jwtDecode } from "jwt-decode";
const url = "https://capstone-be-production.up.railway.app"
// const url = "http://localhost:9000"

export const register = async (data, callback) => {
    try {        
        const res = await axios.post(`${url}/register`, data)
        callback(true, res.data.pesan)
        
    } catch(err){
        callback(false, err.response.data.pesan)
    }
}

export const login = async (data, callback) => {
    try {
        const res = await axios.post(`${url}/login`, data)
        callback(true, res.data.token)
    } catch(err) {
        callback(false, err.response.data.pesan)
    }
}

export const getProfil = (token) => {
    const decoded = jwtDecode(token)
    console.log(decoded)
    return decoded
}