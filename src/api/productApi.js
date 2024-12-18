import axiosInstance from './axiosInstance';

export const fetchProducts = async () => {
  const response = await axiosInstance.get('/products');
  return response.data; // Assuming the API returns products in the `data` field
};

export const deleteProduct = async (productId) => {
  const response = await axiosInstance.delete(`/products/${productId}`);
  return response.data;
};

export const addProduct = async (productData) => {
  const response = await axiosInstance.post('/products', productData);
  return response.data;
};
