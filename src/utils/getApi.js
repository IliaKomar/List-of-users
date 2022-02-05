import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || 'https://api.github.com/'

export const getApi = async (endpointName, params) => {
    return await axios.get(`${API_URL}${endpointName}`, params)
}