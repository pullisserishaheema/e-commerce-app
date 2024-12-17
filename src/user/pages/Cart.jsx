import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-container" style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>
                    <button onClick={() => decreaseQuantity(product.id)}>-</button>
                    {product.quantity}
                    <button onClick={() => increaseQuantity(product.id)}>+</button>
                  </td>
                  <td>${product.price}</td>
                  <td>${product.price * product.quantity}</td>
                  <td>
                    <button onClick={() => removeFromCart(product.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary" style={{ marginTop: "20px" }}>
            <h3>Total: ${getTotalPrice()}</h3>
            <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
    