import Footer from '../components/Footer'
import { Routes, Route } from 'react-router-dom';
import Home from '../user/pages/Home';
import Signup from '../user/pages/Signup';
import Login from '../user/pages/Login';
import ProductDetails from '../user/pages/ProductDetails';
import Cart from '../user/pages/Cart';
import Order from '../user/pages/Order';
import Checkout from '../user/pages/Checkout';
import Navbar from '../components/Navbar';


const UserRouter = () => {
  return (
         
              <div className='flex flex-col min-h-screen'>
                <Navbar/>
                  <div className='flex-grow'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/product/:productId" element={<ProductDetails />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/orders" element={<Order />} />
                        <Route path="/checkout" element={<Checkout />} />

                    </Routes>
                  </div>
                <Footer/>
              </div>    
  );
}

export default UserRouter;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// function UserRouter() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/product/:productId" element={<ProductDetails />} />
//       <Route path="/cart" element={<Cart/>} />
//       <Route path="/checkout" element={<Checkout />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//     </Routes>
//   );
// }

// export default UserRouter;
