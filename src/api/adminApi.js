// import axios from "axios";

// const UserURL = "http://localhost:5000/users";
// const OrderURL = "http://localhost:5000/orders";

// export const getAllUsers = async () => {
//     return await axios.get(UserURL);
    
// }

// export const getAllOrders = async () => {
//     return await axios.get(OrderURL);
    
// }

import axios from "axios";

const UserURL = "https://server-dmtg.onrender.com/users";
const OrderURL = "https://server-dmtg.onrender.com/orders";
const ProductURL = "https://server-dmtg.onrender.com/mobiles";

export const getAllUsers = async () => {
    return await axios.get(UserURL);
    
}

export const getAllOrders = async () => {
    return await axios.get(OrderURL);
    
}

export const addProduct = async (product) => {
    return await axios.post(ProductURL,product);
}

export const editProduct = async (id,product) => {
    return await axios.put(`${ProductURL}/${id}`,product);
}
export const deleteProduct = async (id) => {
    return await axios.delete(`${ProductURL}/${id}`);
}
export const updateUser = async (id, data) => {
    return await axios.put(`${UserURL}/${id}`, data);
};
