

// import React from 'react';
// import { NavLink } from 'react-router-dom';

// function Navbar() {
//   return (
//     <div className="Navbar flex flex-row items-center justify-between w-full h-16 bg-gray-100 shadow-md border-b border-gray-300 px-4">
     
//       <div className="flex flex-row items-center space-x-2">
//         <img src="assets/download.png" alt="logo" className="w-10 h-10" />
//         <span className="text-xl font-bold">E-Commerce</span>
//       </div>

      
//       <div className="flex flex-row items-center space-x-6">
//         <button className="text-gray-700 hover:text-black">Home</button>
//         <button className="text-gray-700 hover:text-black">Cart</button>
//         <button className="text-gray-700 hover:text-black">Order</button>
//       </div>

    
//       <div className="flex items-center space-x-2">
//         <img src="assets/search.png" alt="search" className="w-5 h-5" />
//         <input
//           type="text"
//           placeholder="Search"
//           className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
//         />
//       </div>

    
//       <div className="flex items-center space-x-4">
//         <button className="text-gray-700 hover:text-black">Admin</button>
//         <button className="text-red-500 hover:text-red-900">Logout</button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';  // Link to navigate

// function Home() {
//   const [products, setProducts] = useState([]);

//   // Fetch products from the JSON server (replace with your actual URL)
//   useEffect(() => {
//     axios.get('http://localhost:5000/products')
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching products:', error);
//       });
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold text-center mb-8">Our Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-48 object-cover rounded-md"
//             />
//             <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
//             <p className="text-gray-600">₹{product.price}</p>
//             <Link to="/cart">
//               <button
//                 className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
//               >
//                 Add to Cart
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;


// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useUser } from '../contexts/UserContext'; // Import the UserContext hook
// import Login from '../user/pages/Login';

// function Navbar() {
//   const { user, logout } = useUser(); // Destructure user and logout from the context
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
//         <NavLink
//           to="/"
//           className="text-gray-700 hover:text-black"
//           activeClassName="text-blue-500"
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/cart"
//           className="text-gray-700 hover:text-black"
//           activeClassName="text-blue-500"
//         >
//           Cart
//         </NavLink>
//         <NavLink
//           to="/orders"
//           className="text-gray-700 hover:text-black"
//           activeClassName="text-blue-500"
//         >
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
//           className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
//         />
//       </div>

//       {/* User info and Logout / Admin button */}
//       <div className="flex items-center space-x-4">
//         {user ? (
//           <>
//             <span className="text-gray-700">Welcome, {user.name}</span>
            
//             {/* <button
//               onClick={Login}
//               className="text-red-500 hover:text-red-900"
//             >
//              Login
             
//             </button> */}
                      
//           </>
//         ) : (
//           <NavLink
//             to="/login"
//             className="text-gray-700 hover:text-black"
//             activeClassName="text-blue-500"
//           >
//             Login
//           </NavLink>
//         )}

//         {user && user.isAdmin && (
//           <NavLink
//             to="/signup"
//             className="text-gray-700 hover:text-black"
//             activeClassName="text-blue-500"
//           >
//             Signup
//           </NavLink>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

function Navbar() {
  const { user } = useUser(); // Only user state, remove logout
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="Navbar flex flex-row items-center justify-between w-full h-16 bg-gray-100 shadow-md border-b border-gray-300 px-4">
      {/* Logo */}
      <div className="flex flex-row items-center space-x-2">
        <img src="assets/download.png" alt="logo" className="w-10 h-10" />
        <span className="text-xl font-bold">E-Commerce</span>
      </div>

      {/* Navigation links */}
      <div className="flex flex-row items-center space-x-6">
        <NavLink to="/" className="text-gray-700 hover:text-black">
          Home
        </NavLink>
        <NavLink to="/cart" className="text-gray-700 hover:text-black">
          Cart
        </NavLink>
        <NavLink to="/orders" className="text-gray-700 hover:text-black">
          Orders
        </NavLink>
      </div>

      {/* Search bar */}
      <div className="flex items-center space-x-2">
        <img src="assets/search.png" alt="search" className="w-5 h-5" />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-3 py-1 border border-gray-300 rounded-md"
        />
      </div>

      {/* Conditional Links */}
      <div className="flex items-center space-x-4">
        {!user && (
          <NavLink to="/signup" className="text-gray-700 hover:text-black">
            Signup
          </NavLink>
        )}
        {!user && (
          <NavLink to="/login" className="text-gray-700 hover:text-black">
            Login
          </NavLink>
        )}
        {user && <span className="text-gray-700">Welcome, {user.name}</span>}
      </div>
    </div>
  );
}

export default Navbar;

