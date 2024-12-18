// import React, { useState, useContext } from 'react';
// import { CartContext } from '../../contexts/CartContext';
// import { useNavigate } from 'react-router-dom';

// const Checkout = () => {
//   const { cartItems, clearCart } = useContext(CartContext);
//   const [address, setAddress] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Mock payment processing
//     console.log('Order Details:', { cartItems, address, paymentMethod });
//     clearCart(); // Clear the cart after order is placed
//     alert('Order placed successfully!');
//     navigate('/orders'); // Navigate to orders page
//   };

//   return (
//     <div className="checkout-container">
//       <h1>Checkout</h1>
//       <form onSubmit={handleSubmit}>
//         <h3>Shipping Address</h3>
//         <input
//           type="text"
//           placeholder="Enter your address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           required
//         />

//         <h3>Payment Method</h3>
//         <select
//           value={paymentMethod}
//           onChange={(e) => setPaymentMethod(e.target.value)}
//           required
//         >
//           <option value="">Select Payment Method</option>
//           <option value="credit">Credit/Debit Card</option>
//           <option value="paypal">PayPal</option>
//           <option value="cod">Cash on Delivery</option>
//         </select>

//         <h3>Order Summary</h3>
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.id}>
//               {item.name} - ${item.price} x {item.quantity}
//             </li>
//           ))}
//         </ul>
//         <p>
//           <strong>Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</strong>
//         </p>

//         <button type="submit">Place Order</button>
//       </form>
//     </div>
//   );
// };

// export default Checkout;


// import React, { useState, useContext } from 'react';
// import { CartContext } from '../../contexts/CartContext';
// import { useNavigate } from 'react-router-dom';

// const Checkout = () => {
//   const { cartItems = [], clearCart } = useContext(CartContext); // Default to an empty array
//   const [address, setAddress] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!cartItems.length) {
//       alert('Your cart is empty!');
//       return;
//     }
//     // Mock payment processing
//     console.log('Order Details:', { cartItems, address, paymentMethod });
//     clearCart(); // Clear the cart after order is placed
//     alert('Order placed successfully!');
//     navigate('/orders'); // Navigate to orders page
//   };

//   return (
//     <div className="checkout-container">
//       <h1>Checkout</h1>
//       <form onSubmit={handleSubmit}>
//         <h3>Shipping Address</h3>
//         <input
//           type="text"
//           placeholder="Enter your address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           required
//         />

//         <h3>Payment Method</h3>
//         <select
//           value={paymentMethod}
//           onChange={(e) => setPaymentMethod(e.target.value)}
//           required
//         >
//           <option value="">Select Payment Method</option>
//           <option value="credit">Credit/Debit Card</option>
//           <option value="paypal">PayPal</option>
//           <option value="cod">Cash on Delivery</option>
//         </select>

//         <h3>Order Summary</h3>
//         {cartItems && cartItems.length > 0 ? (
//           <ul>
//             {cartItems.map((item) => (
//               <li key={item.id}>
//                 {item.name} - ${item.price} x {item.quantity}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>Your cart is empty.</p>
//         )}
//         <p>
//           <strong>
//             Total: ₹
//             {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
//           </strong>
//         </p>

//         <button type="submit">Place Order</button>
        
//       </form>
//     </div>
//   );
// };

// export default Checkout;


import React, { useState, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems = [], clearCart } = useContext(CartContext); // Default to an empty array
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cartItems.length) {
      alert('Your cart is empty!');
      return;
    }

    // Create the order object
    const order = {
      id: new Date().getTime(), // Generate a unique order ID
      date: new Date().toLocaleDateString(),
      status: 'Pending', // Default status
      address,
      paymentMethod,
      products: cartItems,
      total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
    };

    // Mock order processing
    console.log('Order Details:', order);

    // Save the order to localStorage (or use your API here)
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Clear the cart after the order is placed
    clearCart(); 

    // Show a success alert
    alert('Order placed successfully!');
    
    // Navigate to the orders page
    navigate('/orders'); // Navigate to the orders page
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <h3>Shipping Address</h3>
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <h3>Payment Method</h3>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value="">Select Payment Method</option>
          <option value="credit">Credit/Debit Card</option>
          <option value="paypal">PayPal</option>
          <option value="cod">Cash on Delivery</option>
        </select>

        <h3>Order Summary</h3>
        {cartItems && cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <p>
          <strong>
            Total: ₹
            {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </strong>
        </p>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
