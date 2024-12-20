



// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useUser } from '../contexts/UserContext';

// function Navbar() {
//   const { user } = useUser(); // Only user state, remove logout
//   const [searchTerm, setSearchTerm] = useState('');

//   return (
//     <div className="Navbar flex flex-row items-center justify-between w-full h-16 bg-gray-100 shadow-md border-b border-gray-300 px-4">
//       {/* Logo */}
//       <div className="flex flex-row items-center space-x-2">
//         <img src="assets/download.png" alt="logo" className="w-10 h-10" />
//         <span className="text-xl font-bold">E-Commerce</span>
//       </div>

//       {/* Navigation links */}
//       <div className="flex flex-row items-center space-x-6">
//         <NavLink to="/" className="text-gray-700 hover:text-black">
//           Home
//         </NavLink>
//         <NavLink to="/cart" className="text-gray-700 hover:text-black">
//           Cart
//         </NavLink>
//         <NavLink to="/orders" className="text-gray-700 hover:text-black">
//           Orders
//         </NavLink>
//       </div>

//       {/* Search bar */}
//       <div className="flex items-center space-x-2">
//         <img src="assets/search.png" alt="search" className="w-5 h-5" />
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="px-3 py-1 border border-gray-300 rounded-md"
//         />
//       </div>

//       {/* Conditional Links */}
//       <div className="flex items-center space-x-4">
//         {!user && (
//           <NavLink to="/signup" className="text-gray-700 hover:text-black">
//             Signup
//           </NavLink>
//         )}
//         {!user && (
//           <NavLink to="/login" className="text-gray-700 hover:text-black">
//             Login
//           </NavLink>
//         )}
//         {user && <span className="text-gray-700">Welcome{user.name}</span>}
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React,{ useContext,useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext';
import { useCart } from '../contexts/CartContext';

function Navbar() {
  const { user, setUser } = useContext(UserContext)
  const { cart } = useCart();
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("username"); // Remove username from localStorage
    navigate("/");
  }
  return (
    <div className='flex w-full p-4 shadow-lg bg-slate-200 h-auto md:h-[60px] items-center justify-between top-0 left-0'>
       <div className='flex items-center'>
                <img src='assets/download.png' alt='logo' className='w-10 h-10 '/>
                <p className='font-bold text-red-700 text-lg'>E-Commerce</p>
       </div>
        <ul className='hidden md:flex space-x-4 text-xl font-semiboldvmt-2 md:mt-0'>
           <NavLink to ={'/'}><li>Home</li></NavLink>
           <NavLink to ={'/cart'}><li className="relative">Cart
           ({cart?.length || 0 }) 
            </li>
            </NavLink>
          <NavLink to ={'/order'}><li>Orders</li></NavLink>
        </ul>
        <div className=' w-[600px] md:w-auto mt-2 md:mt-0'>
             <input type='text' placeholder='Search here...' className='w-full md:w-[300px] lg:w-[400px] p-2 rounded-lg' />
        </div>
        <ul className='flex items-center space-x-4 mt-2 md:mt-0'>
          {user ?(
            <>
          <li className=' font-medium text-black'>{user}</li>
          <button className='bg-slate-300 rounded-xl p-1 hover:bg-slate-500 font-medium'onClick={handleLogout} >
            LogOut</button>
          </>
          ):(
            <>
            <NavLink to='/Login'>
            <button className='bg-slate-300 rounded-xl p-2 hover:bg-slate-500 font-medium'>
              Login
            </button>
          </NavLink>
          <NavLink to="/SignUp">
              <button className="bg-slate-300 rounded-xl p-2 hover:bg-slate-500 font-medium">
                SignUp
              </button>
            </NavLink>
          </>
          )}

        </ul>
        <div className="md:hidden flex items-center mt-2" onClick={() => setMenuOpen(!menuOpen)}>
          <button className="p-2 m-2" > ☰ </button>
          {menuOpen && (
        <div className='absolute top-16 left-0 w-full bg-slate-200 p-4 flex flex-col space-y-4 md:hidden'>
          <NavLink to='/' onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to='/cart' onClick={() => setMenuOpen(false)}>Cart ({cart?.length || 0})</NavLink>
          <NavLink to='/order' onClick={() => setMenuOpen(false)}>Orders</NavLink>
        </div>
      )}
        </div>
    </div>
  )
}

export default Navbar;