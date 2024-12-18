import axiosInstance from './axiosInstance';

export const fetchUsers = async () => {
  const response = await axiosInstance.get('/users');
  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await axiosInstance.delete(`/users/${userId}`);
  return response.data;
};
