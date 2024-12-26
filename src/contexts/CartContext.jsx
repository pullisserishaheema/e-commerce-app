
// import React, { createContext, useContext, useEffect, useState } from "react";
// import { useUser } from "./UserContext";

// // Create CartContext
// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// // CartProvider
// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const { user } = useUser();


//    // Fetch cart items from the database on component mount or when email changes
//    useEffect(() => {
//     if (user) {
//       fetch(`http://localhost:5000/cart?user=${user}`)
//         .then((res) => res.json())
//         .then((data) => setCart(data || []))
//         .catch((err) => console.error("Error fetching cart data:", err));
//     } else {
//       setCart([]);
//     }
//   }, [user]);
//   const addToCart = (product) => {
//     if (!user) {
//       console.error("User not logged in");
//       return;
//     }
//     const existingProduct = cart.find((item) => item.id === product.id);

//     if (existingProduct) {
//       // If product exists, update quantity
//       fetch(`http://localhost:5000/cart/${existingProduct.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ quantity: existingProduct.quantity + 1 }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           setCart((prevCart) =>
//             prevCart.map((item) =>
//               item.id === product.id
//                 ? { ...item, quantity: item.quantity + 1 }
//                 : item
//             )
//           );
//         })
//         .catch((err) => console.error("Error updating cart:", err));
//     } else {

//     fetch(`http://localhost:5000/cart`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ ...product, user }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
//       })
//       .catch((err) => console.error("Error adding to cart:", err));
//   };
// }

//   const removeFromCart = (productId) => {
//     if (!user) {
//       console.error("User not logged in");
//       return;
//     }

//     fetch(`http://localhost:5000/cart/${productId}?user=${user}`, {
//       method: "DELETE",
//     })
//       .then(() => {
//         setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//       })
//       .catch((err) => console.error("Error removing from cart:", err));
//   };

//   const clearCart = () => {
//     if (!user) {
//       console.error("User not logged in");
//       return;
//     }

//     fetch(`http://localhost:5000/cart/clear?user=${user}`, {
//       method: "DELETE",
//     })
//       .then(() => setCart([]))
//       .catch((err) => console.error("Error clearing cart:", err));
//   };

//   const updateQuantity = (productId, amount) => {
//     if (!user) {
//       console.error("User not logged in");
//       return;
//     }

//     fetch(`http://localhost:5000/cart/${productId}?user=${user}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ quantity: amount }),
//     })
//       .then(() => {
//         setCart((prevCart) =>
//           prevCart.map((item) =>
//             item.id === productId
//               ? { ...item, quantity: item.quantity + amount }
//               : item
//           )
//         );
//       })
//       .catch((err) => console.error("Error updating quantity:", err));
//   };


//   const placeOrder = (orderDetails) => {
//     setOrders((prevOrders) => [...prevOrders, orderDetails]);
//     setCart([]); // Clear cart after placing order
//   }

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         clearCart,
//         updateQuantity,
//         orders,
//         placeOrder,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
//   }

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { getUserbyId } from "../api/userApi";
import { updateCart } from "../api/productApi";

// Create CartContext
const CartContext = createContext();

// CartProvider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [newuser,setNewuser] = useState(null);
//   const [orders, setOrders] = useState([]);
const [totalPrice, setTotalPrice] = useState(0);
  const { user } = useContext(UserContext);
  const userId = localStorage.getItem('userId')


const fetchUser = async (userId) => {
    try {
      const userData = await getUserbyId(userId);
      setNewuser(userData)
      setCart(userData.cart || [])
    } catch (error) {
      console.log("Error fetching user data:",error);
    }
  };

  useEffect(() => {
    if(userId){
        fetchUser(userId)
    }else{
        setCart([])
    }
  }, [user])

  const totalCartPrice =  useCallback(() =>{
    const total = cart.reduce((total, item) => total + item.price * item.qty, 0);
    setTotalPrice(total);
  },[cart]);

  useEffect(() => {
    totalCartPrice()
  }, [cart,totalCartPrice])

const updateServerCart = async (cartData) => {
    try {
      const updatedUser = {...newuser,cart:cartData}
      await updateCart(userId,updatedUser);
      setCart(cartData);
    } catch (error) {
      console.log("Error updating cart:",error);        
    }
}



const addToCart = async (product , qty = 1) => {
    const existingitem = cart.find(item => item.id === product.id);
    let cartData;
    if(existingitem){
        cartData = cart.map(item =>( item.id === product.id ? {...item,qty : item.qty + qty}:item))
    }else{
        cartData = [...cart, {...product, qty}];
    }
    updateServerCart(cartData);
}



const removeFromCart = async (productId) => {
  const cartData = cart.filter(item => item.id !== productId);
  updateServerCart(cartData);
};

const clearCart = () => {
  setTotalPrice(0);
  updateServerCart([]);
};

const updateQuantity = (productId, amount) => {
  const updatedCart = cart.map(item =>
    item.id === productId ? { ...item, qty:  Math.max(1, item.qty + amount) } : item
  )
  .filter(item => item.qty > 0);
  updateServerCart(updatedCart);
};

  return (
    <CartContext.Provider value={{cart,addToCart,removeFromCart,clearCart,updateQuantity,totalPrice}}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for ease of use
export const useCart = () => useContext(CartContext);