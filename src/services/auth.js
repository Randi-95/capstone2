import axios from "axios";

const url = "https://capstone-be-production.up.railway.app"
// const url = "http://localhost:9000"

export const register = async (data, callback) => {
    try {        
        const res = await axios.post(`${url}/register`, data)
        callback(true, res.data.pesan)

    } catch(err){
        callback(false, err)
    }
}

export const login = async (data, callback) => {
    try {
        const res = await axios.post(`${url}/login`, data)
        callback(true, res.data.token)
    } catch(err) {
        callback(false, err)
    }
}