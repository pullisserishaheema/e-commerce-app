import axios from "axios";

const UserURL = "https://server-dmtg.onrender.com/users";
const ProductURL = "https://server-dmtg.onrender.com/mobiles";

export const getAllProduct = () =>{
    return axios.get(ProductURL);
}

export const getProductbyId = (ProductId) =>{
    return axios.get(`${ProductURL}/${ProductId}`);
}

export const updateCart = async (userId,cartData) => {
    return axios.put(`${UserURL}/${userId}`,cartData);
}