// import Footer from '../../components/Footer'
// import { Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
// import Signup from '../../auth/pages/Signup';
// import Login from '../../auth/pages/Login';
// import ProductDetails from '../pages/ProductDetails';
// import Cart from '../pages/Cart';
// import Order from '../pages/Order';
// import Checkout from '../pages/Checkout';
// import Navbar from '../../components/Navbar';


// const UserRouter = () => {
//   return (
         
//               <div className='flex flex-col min-h-screen'>
//                 <Navbar/>
//                   <div className='flex-grow'>
//                     <Routes>
//                         <Route path="/" element={<Home />} />
//                         <Route path="/signup" element={<Signup />} />
//                         <Route path="/login" element={<Login />} />
//                         <Route path="/product/:productId" element={<ProductDetails />} />
//                         <Route path="/cart" element={<Cart />} />
//                         <Route path="/order" element={<Order />} />
//                         <Route path="/checkout" element={<Checkout />} />

//                     </Routes>
//                   </div>
//                   <Footer/>
//               </div>    
//   );
// }

// export default UserRouter;

import Cart from '../pages/Cart';
import Order from '../pages/Order';
import Checkout from "../pages/Checkout";



const UserRouter =[
  {path:'/cart',element:<Cart/>},
  {path:'/checkout',element:<Checkout/>},
  {path:'/order',element:<Order/>}
]

export default UserRouter;