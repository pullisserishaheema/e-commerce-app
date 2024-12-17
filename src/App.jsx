
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './user/pages/Home';
import Footer from  './components/Footer';
import Order from './user/pages/Order';
import Cart from './user/pages/Cart';




function App() {
  return (
    <Router>
              <div className="App">
              <Navbar/>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/order" element={<Order />} />
                  <Route path="/cart" element={<Cart />} />
              </Routes>

              <Home/>
              <Footer/>
              </div>
    </Router>
  );
}

export default App;
