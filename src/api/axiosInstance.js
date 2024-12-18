import axios from 'axios';

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000', // Replace with your API URL
  timeout: 5000, // Set a timeout for requests
  headers: {
    'Content-Type': 'application/json', // Default content type for JSON APIs
  },
});

// Add a request interceptor (optional)
axiosInstance.interceptors.request.use(
  (config) => {
    // Add authentication token if required
    const token = localStorage.getItem('authToken'); // Assume token is stored in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor (optional)
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API call error:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
