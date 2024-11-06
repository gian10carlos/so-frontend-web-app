import axios from "axios";

const axiosIn = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

export default axiosIn;