

import React from 'react';

function Navbar() {
  return (
    <div className="Navbar flex flex-row items-center justify-between w-full h-16 bg-gray-100 shadow-md border-b border-gray-300 px-4">
     
      <div className="flex flex-row items-center space-x-2">
        <img src="assets/download.png" alt="logo" className="w-10 h-10" />
        <span className="text-xl font-bold">E-Commerce</span>
      </div>

      
      <div className="flex flex-row items-center space-x-6">
        <button className="text-gray-700 hover:text-black">Home</button>
        <button className="text-gray-700 hover:text-black">Cart</button>
        <button className="text-gray-700 hover:text-black">Order</button>
      </div>

    
      <div className="flex items-center space-x-2">
        <img src="assets/search.png" alt="search" className="w-5 h-5" />
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

    
      <div className="flex items-center space-x-4">
        <button className="text-gray-700 hover:text-black">Admin</button>
        <button className="text-red-500 hover:text-red-900">Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
