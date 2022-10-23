import { baseApi } from "@/plugins/axios";

const api = '/api/todo';

const  list = () => baseApi.get(`${api}`);
const del = (id) => baseApi.delete(`${api}/${id}`);
const add = (body) => baseApi.post(`${api}`, body);
const update = (id, body) => baseApi.put(`${api}/${id}`, body);  

export { list, del, add, update }