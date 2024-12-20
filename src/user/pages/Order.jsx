// import React, { useState, useEffect } from 'react';
// import axios from '../../api/axiosInstance';

// const Order = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     // Fetch orders from API or mock data
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get('/orders'); // Mocked API endpoint
//         setOrders(response.data);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="orders-container" style={{ padding: "20px" }}>
//       <h2>My Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders found!</p>
//       ) : (
//         <div>
//           {orders.map((order) => (
//             <div key={order.id} className="order-card" style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc" }}>
//               <h3>Order ID: {order.id}</h3>
//               <p>Order Date: {order.date}</p>
//               <p>Status: {order.status}</p>
//               <h4>Products:</h4>
//               <ul>
//                 {order.products.map((product) => (
//                   <li key={product.id}>
//                     {product.name} - {product.quantity} x ${product.price}
//                   </li>
//                 ))}
//               </ul>
//               <p><strong>Total: ${order.total}</strong></p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Order;


import React, { useEffect, useState } from "react";
import { useUser } from "../../contexts/UserContext";

const Order = () => {
  const { user } = useUser();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5001/order?user=${user}`)
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setOrders(data);
          } else {
            console.error("Unexpected response format:", data);
            setOrders([]);
          }
        })
        .catch((err) => console.error("Error fetching orders:", err));
    }
  }, [user]);
  

  if (!user) return <p>Please log in to view orders</p>;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id} className="border p-4 mb-4 rounded shadow">
            <p><strong>Order ID:</strong> {order.id}</p>
            {Array.isArray(order.items) && order.items.map((item, index) => (
            <li key={index} className="list-none">
             <div>
                <strong>Item:</strong> {item.name}
            </div>
            <div>
                <strong>Quantity:</strong> {item.quantity}
            </div>
        </li>
        ))}
            <p><strong>Total:</strong> ₹{order.total}</p>
            <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
            <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default Order;
