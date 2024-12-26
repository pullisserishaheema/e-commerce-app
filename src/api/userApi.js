// import axiosInstance from './axiosInstance';

// export const fetchUsers = async () => {
//   const response = await axiosInstance.get('/users');
//   return response.data;
// };

// export const deleteUser = async (userId) => {
//   const response = await axiosInstance.delete(`/users/${userId}`);
//   return response.data;
// };
import axios from "axios";

const UserURL = "https://server-dmtg.onrender.com/users";
const OrderURL = "https://server-dmtg.onrender.com/orders";

export const getAllUsers = () =>{
    return axios.get(UserURL);
}

export const userCheck = async (email,password) => {
    const res = await axios.get(`${UserURL}?email=${email}&password=${password}`);
    console.log(res.data);
    return res.data;
}

export const emailCheck = async (email) => {
    const res = await axios.get(`${UserURL}?email=${email}`);
    return res.data.length>0;
}

export const addUser = async (userData) => {
    const res = await axios.post(UserURL,userData);
    return res.data;
}

export const getUserbyId = async (userId) => {
    const res = await axios.get(`${UserURL}/${userId}`)
    return res.data;
}

export const OrdersByUserId = async (userId) => {
    const res = await axios.get(`${OrderURL}?userId=${userId}`);
    return res.data;
}

export const addOrder = async (orderData) => {
    const res = await axios.post(OrderURL,orderData);
    return res.data;
}