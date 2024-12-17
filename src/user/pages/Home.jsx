import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:5000/products/')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.slice(0, 10).map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
          >

            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover rounded-md  mx-auto"
            />

            <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">₹{product.price}</p>
            <button
              className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;