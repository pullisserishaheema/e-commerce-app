// import React from 'react';
// import { Link } from 'react-router-dom';
// const AdminNavbar = () => (
//     <nav className="bg-gray-800 text-white shadow-md">
//         <div className="container mx-auto p-4 flex items-center justify-center">
//             <h2 className="text-xl font-bold">Admin Panel</h2>
//             {/* Optional: You can add a logout button or other items here */}
//         </div>
//         <div className="flex flex-col-r gap-2 p-4 items-center justify-center">
//              <Link 
//                 to="/admin" 
//                 className="block px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
//                 Dashboard
//             </Link>
//             <Link 
//                 to="/admin/manageproducts" 
//                 className="block px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
//                 Manage Products
//             </Link>
//             <Link 
//                 to="/admin/manageusers" 
//                 className="block px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
//                 Manage Users
//             </Link>
//             <Link 
//                 to="/admin/manageorders" 
//                 className="block px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
//                 Manage oders
//             </Link>
//             <Link 
//                 to="/admin/reports" 
//                 className="block px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
//                 Reports
//             </Link>
//         </div>
//     </nav>
// );
// export default AdminNavbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

const AdminNavbar = () => {
  const { handleLogout } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!menuOpen);
const handleOutsideClick = (e) => {
    if (e.target.id === 'menu-overlay') {
      setMenuOpen(false);
    }
  }
  return (
    <nav className="bg-gray-700 text-white shadow-xl sticky z-50 top-0">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="https://r2.erweima.ai/imgcompressed/img/compressed_3896cf4e39b5eb0ecf7a95662f48540e.webp"
            alt="logo"
            className="w-14 h-14"
          />
          <p className="font-extrabold text-2xl">eshopify</p>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/admin"
            className="px-4 py-2 text-lg font-medium rounded-md hover:bg-gray-700 transition duration-300"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/manageproducts"
            className="px-4 py-2 text-lg font-medium rounded-md hover:bg-gray-700 transition duration-300"
          >
            Manage Products
          </Link>
          <Link
            to="/admin/manageusers"
            className="px-4 py-2 text-lg font-medium rounded-md hover:bg-gray-700 transition duration-300"
          >
            Manage Users
          </Link>
          <Link
            to="/admin/manageorders"
            className="px-4 py-2 text-lg font-medium rounded-md hover:bg-gray-700 transition duration-300"
          >
            Manage Orders
          </Link>
          

        </div>

        {/* Desktop Logout Button */}
        <div className="hidden md:flex items-center">
          <img src="https://cdn-icons-png.freepik.com/256/11302/11302228.png?ga=GA1.1.153180688.1731951673&semt=ais_hybrid" alt="icon" className="w-6 h-6" />
          <button
            className="p-2 text-lg font-medium rounded-md hover:bg-gray-700 transition duration-300"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>

        {/* Hamburger Icon */}
        <button
          className="block md:hidden p-2 focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/15178/15178747.png"
            alt="menu-icon"
            className="w-8 h-8"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
            id="menu-overlay"
            className="fixed inset-0 z-40 top-[71px]"
            onClick={handleOutsideClick}
          >
            <div className="fixed right-0 w-full bg-gray-900 text-center space-y-4 p-4 md:hidden z-50">
            <Link
                to="/admin"
                className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium"
                onClick={() => setMenuOpen(false)}
            >
                Dashboard
            </Link>
            <Link
                to="/admin/manage-products"
                className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium"
                onClick={() => setMenuOpen(false)}
            >
                Manage Products
            </Link>
            <Link
                to="/admin/manage-users"
                className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium"
                onClick={() => setMenuOpen(false)}
            >
                Manage Users
            </Link>
            <Link
                to="/admin/manage-orders"
                className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium"
                onClick={() => setMenuOpen(false)}
            >
                Manage Orders
            </Link>
            <button
                className="px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium bg-gray-400"
                onClick={() => {
                handleLogout();
                setMenuOpen(false);
                }}
            >
                Logout
            </button>
            </div>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;