import React, { useState, useEffect } from 'react';
import axios from '../../api/axiosInstance';

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from API or mock data
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/orders'); // Mocked API endpoint
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders-container" style={{ padding: "20px" }}>
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found!</p>
      ) : (
        <div>
          {orders.map((order) => (
            <div key={order.id} className="order-card" style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc" }}>
              <h3>Order ID: {order.id}</h3>
              <p>Order Date: {order.date}</p>
              <p>Status: {order.status}</p>
              <h4>Products:</h4>
              <ul>
                {order.products.map((product) => (
                  <li key={product.id}>
                    {product.name} - {product.quantity} x ${product.price}
                  </li>
                ))}
              </ul>
              <p><strong>Total: ${order.total}</strong></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;
