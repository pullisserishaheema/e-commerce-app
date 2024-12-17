
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Navbar from './components/Navbar';
import Home from './user/pages/Home';
import Footer from  './components/Footer';
import Order from './user/pages/Order';
import Cart from './user/pages/Cart';
import Login from './user/pages/Login';
import Signup from './user/pages/Signup';
import ProductDetails from './user/pages/ProductDetails';



function App() {
  return (
    <UserProvider>
    <Router>
              <div className="App">
              <Navbar/>
              
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/order" element={<Order />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path='/signup' element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/productdetails" element={<ProductDetails/>} />
              </Routes>
          
      
              <Footer/>
              </div>
    </Router>
    </UserProvider>
  );
}

export default App;
