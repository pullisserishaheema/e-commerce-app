
// import React, { useState} from 'react';
// import { useCart } from '../../contexts/CartContext';
// import { useNavigate } from 'react-router-dom';

// const Checkout = () => {
//   const { cartItems = [], clearCart } = useCart(); // Default to an empty array
//   const [address, setAddress] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!cartItems.length) {
//       alert('Your cart is empty!');
//       return;
//     }

//     // Create the order object
//     const order = {
//       id: new Date().getTime(), // Generate a unique order ID
//       date: new Date().toLocaleDateString(),
//       status: 'Pending', // Default status
//       address,
//       paymentMethod,
//       products: cartItems,
//       total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
//     };

//     // Mock order processing
//     console.log('Order Details:', order);

//     // Save the order to localStorage (or use your API here)
//     const orders = JSON.parse(localStorage.getItem('orders')) || [];
//     orders.push(order);
//     localStorage.setItem('orders', JSON.stringify(orders));

//     // Clear the cart after the order is placed
//     clearCart(); 

//     // Show a success alert
//     alert('Order placed successfully!');
    
//     // Navigate to the orders page
//     navigate('/orders'); // Navigate to the orders page
//   };

//   return (
//     <div className="checkout-container" style={{ padding: "20px" }}>
//       <div className="checkout-box" style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
//         <h1>Checkout</h1>
//         <form onSubmit={handleSubmit}>
//           <h3>Shipping Address</h3>
//           <input
//             type="text"
//             placeholder="Enter your address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             required
//             style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ddd' }}
//           />

//           <h3>Payment Method</h3>
//           <select
//             value={paymentMethod}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             required
//             style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ddd' }}
//           >
//             <option value="">Select Payment Method</option>
//             <option value="credit">Credit/Debit Card</option>
//             <option value="paypal">PayPal</option>
//             <option value="cod">Cash on Delivery</option>
//           </select>

//           <h3>Order Summary</h3>
//           {cartItems && cartItems.length > 0 ? (
//             <ul style={{ listStyleType: 'none', padding: '0' }}>
//               {cartItems.map((item) => (
//                 <li key={item.id} style={{ padding: '5px 0', borderBottom: '1px solid #ddd' }}>
//                   {item.name} - ${item.price} x {item.quantity}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>Your cart is empty.</p>
//           )}
//           <p>
//             <strong>
//               Total: ₹
//               {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
//             </strong>
//           </p>

//           <button
//             type="submit"
//             style={{
//               width: '100%',
//               padding: '10px 20px',
//               backgroundColor: '#4CAF50',
//               color: '#fff',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               fontSize: '16px',
//             }}
//           >
//             Place Order
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Checkout;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { useUser } from "../../contexts/UserContext";

const Checkout = () => {
  const { cart , clearCart } = useCart();
  const { user } = useUser()
  const getTotalPrice = () =>  cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("");

  const [address, setAddress] = useState({ street: "", city: "", state: "", pin: "", country: ""})


  const handleOrderConfirmation = async () => {
    if (!selectedPayment) {
      alert("Please select a payment method to proceed.");
      return;
    }
    if (!address.street || !address.city || !address.state || !address.pin|| !address.country) { 
        alert("Please fill out all address fields."); 
        return; 
    }
    const orderDetails = {
      user, // Get from UserContext
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      total: getTotalPrice(),
      paymentMethod: selectedPayment,
      address: address,
      date: new Date().toISOString(),
    };

    try {
      const response = await fetch("http://localhost:5001/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });

      if (response.ok) {
        alert(`Order placed successfully with ${selectedPayment}!`);
        clearCart(); // Clear the cart after placing the order
        navigate("/order");
      } else {
        alert("Failed to place the order. Please try again.");
      }
    } catch (error) {
      console.error("Order Error:", error);
      alert("An error occurred while placing the order.");
    }

  };
  const handleAddressChange = (e) => { 
    const { name, value } = e.target; 
    setAddress((prevAddress) => 
        ({ ...prevAddress, [name]: value, }));
    }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Checkout Page</h2>

      {cart.length > 0 ? (
        <>
          {/* Cart Summary Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Cart Summary:</h3>
            <div className="border p-4 rounded">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between mb-2 last:mb-0"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-contain"
                    />
                    <div>
                      <h4 className="font-semibold">{product.name}</h4>
                      <p>₹{product.price} x {product.quantity}</p>
                    </div>
                  </div>
                  <div className="text-lg font-semibold">
                    ₹{product.price * product.quantity}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total Amount Section */}
          <div className="mt-4 text-lg font-semibold">
            <p className="mb-2">Total Amount: ₹{getTotalPrice()}</p>
          </div>

          {/* Address Input Section */} 
          <div className="mt-4"> 
            <h3 className="text-lg font-semibold mb-2">Shipping Address:</h3> 
            <div className="space-y-2"> 
                <input type="text" name="street" placeholder="Street Address" value={address.street} 
                    onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
                <input type="text" name="city" placeholder="City" value={address.city} 
                    onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
                <input type="text" name="state" placeholder="State" value={address.state} 
                    onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
                <input type="text" name="pin" placeholder="PIN Code" value={address.pin} 
                    onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
                <input type="text" name="country" placeholder="Country" value={address.country} 
                    onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
            </div> 
            </div>

          {/* Payment Methods Section */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Select Payment Method:</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Credit Card"
                  checked={selectedPayment === "Credit Card"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  className="w-4 h-4"
                />
                <span>Credit Card</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Debit Card"
                  checked={selectedPayment === "Debit Card"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  className="w-4 h-4"
                />
                <span>Debit Card</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="PayPal"
                  checked={selectedPayment === "PayPal"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  className="w-4 h-4"
                />
                <span>PayPal</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Cash on Delivery"
                  checked={selectedPayment === "Cash on Delivery"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  className="w-4 h-4"
                />
                <span>Cash on Delivery</span>
              </label>
            </div>
          </div>

          {/* Confirm Order Button */}
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={handleOrderConfirmation}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Confirm Order
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
            >
              Back to Cart
            </button>
          </div>
        </>
      ) : (
        <p>Your cart is empty. Add some items to checkout.</p>
      )}
    </div>
  );
};

export default Checkout;