import axios from "axios";
import { delCookies, getCookies } from "./cookies";
import { configs } from "eslint-plugin-prettier";
//endpoint
const hostname = import.meta.env.VITE_BASE_API_URL;

//Restful API config

axios.defaults.headers['Content-type'] = 'aplication/json'

//instance Creation
const baseApi = axios.create({
    baseURL: hostname,
});


//request config

baseApi.interceptors.request.use((config) => {
    (config) => {
        const token = getCookies('CERT');
        if (token) config.headers['Authorization'] = `bearer ${token}`;
        else {
            delCookies('CERT');
            delete config.headers['Authorization'];
        }
        return config;

    }
    (error) => {
        throw error;

    }
    return config;
});
baseApi.interceptors.response.use(
    (response) => response.data,


    (error) => {
        switch (error.response.status) {
            case 401:
                delCookies('CERT')
                break;
            default:
                break;

        }
        throw error?.response?.error ??
        error?.response?.message ?? error
    },
)

export { baseApi };