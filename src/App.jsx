

// import { BrowserRouter , Routes, Route } from 'react-router-dom';
// import { UserProvider } from './contexts/UserContext';
// import Navbar from './components/Navbar';
// import Home from './user/pages/Home';
// import Footer from  './components/Footer';
// import Order from './user/pages/Order';
// import Cart from './user/pages/Cart';
// import Checkout from './user/pages/Checkout';
// import Login from './user/pages/Login';
// import Signup from './user/pages/Signup';
// import ProductDetails from './user/pages/ProductDetails';
// import { CartProvider } from './contexts/CartContext';



// function App() {
//   return (
//     <BrowserRouter>
//         <UserProvider>
//           <CartProvider>

//                   <div className="App">
//                     <Navbar/>
                    
//                     <Routes>
//                         <Route path="/" element={<Home />} />
//                         <Route path="/order" element={<Order />} />
//                         <Route path="/cart" element={<Cart />} />
//                         <Route path="/checkout" element={<Checkout />} /> 
//                         <Route path='/signup' element={<Signup />} />
//                         <Route path="/login" element={<Login />} />
//                         <Route path="/product/:productId" element={<ProductDetails/>} />
//                     </Routes>
//                     <Footer/>
//                   </div>
//           </CartProvider>
//         </UserProvider>
//       </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { UserProvider } from './contexts/UserContext';
import UserRouter from "./user/UserRouter";
import AdminRouter from "./admin/AdminRouter";
function App() {
   return (
      <UserProvider>
        <CartProvider>
          <Router>
            <Routes>
              <Route path="/*" element={<UserRouter />} />
              <Route path="/admin/*" element={<AdminRouter />} />
            </Routes>
          </Router>
        </CartProvider>
      </UserProvider>   
  );
}
export default App;