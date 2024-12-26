
// import React,{useEffect,useState} from 'react'
// import { NavLink,useNavigate }from 'react-router-dom';
// import { useUser } from '../contexts/UserContext'; // Import the UserContext hook
// import { useCart } from "../contexts/CartContext";
// import { getAllProduct } from '../api/productApi';

// function Navbar() {
//     const { handleLogout } = useUser(); // Get username and logout from context
//     const { cart } = useCart();
//     const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger men
//     const userName = localStorage.getItem("userName")
//     const [showModal, setShowModal] = useState(false)
//     const [searchTerm,setSearchTerm] = useState("")
//     const [products,setProducts] = useState([])
//     const navigate = useNavigate()



//     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//     useEffect(()=>{
//       const fetchProducts = async () =>{
//         if(searchTerm.trim()===''){
//           setProducts([]);
//           setShowModal(false);
//           return;
//         }
//         try{
//           const res = await getAllProduct();
//           const searchProducts = res.data.filter(product=>(
//             product.name.toLowerCase().includes(searchTerm.toLowerCase())
//           ));
//           setProducts(searchProducts);
//           setShowModal(true);
//         }
//         catch(error){
//           console.error("Error while searching Products", error);
//         }
//       }
  
//       const delaySearch = setTimeout(() => {
//         fetchProducts();
//       }, 300);
  
//       return () => clearTimeout(delaySearch);
//     },[searchTerm])
  
//     const handleProductClick = (productId)=>{
//       setShowModal(false)
//       setSearchTerm("");
//       navigate(`/product/${productId}`)
//     }



//   return (

//     <div className='Navbar  sticky top-0 w-full h-[77px] p-4 bg-white flex items-center z-50 justify-between shadow-lg'>
//         <div className='flex items-center'>
//             <img src="https://r2.erweima.ai/imgcompressed/img/compressed_3896cf4e39b5eb0ecf7a95662f48540e.webp" alt="logo" className='w-14 h-14'/>
//             <p className='font-bold text-4xl md:2xl'>eshopify</p>
//         </div>
//         <div className='hidden md:flex justify-center space-x-4 text-lg font-semibold'>
//             <ul className='flex space-x-4 '>
//                 <NavLink to="/" className="hover:text-orange-500"><li>Home</li></NavLink>
//                 <NavLink to="/Cart" className="hover:text-orange-500"><li>Cart {cart.length >0 && (<span className='text-sm px-1 rounded-full bg-orange-400'>{cart.length}</span>)}</li></NavLink>
//                 <NavLink to="/Order" className="hover:text-orange-500"><li>Order</li></NavLink>
//             </ul>
//         </div>
//         <div className=' items-center space-x-4 hidden md:block'>
//             <input type="text" placeholder='Search here...' 
//                 className='p-2 border rounded-md w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] ' />
//         </div>
//         <div className="flex items-center space-x-2">
//         {userName ? (
//           <>
//                 <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="profile" className='w-8 h-8 hidden md:block' />
                
              
//                 <span className="font-normal text-sm hidden md:block">{userName}</span>
//                 <button
//                   className='bg-orange-500 px-3 py-1 rounded-full hover:bg-orange-600 text-white hidden md:block'
//                   onClick={handleLogout} // Trigger the logout function
//                 >
//                   Sign Out
//                 </button>
//               </>
//             ) : (
//               <div className='hidden md:block'>
//                 <NavLink to="/login">
//                   <button className='bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600'>
//                     Login
//                   </button>
//                 </NavLink>
//                 {/* <NavLink to="/signup">
//                   <button className='bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600'>
//                     Sign Up
//                   </button>
//                 </NavLink> */}
//               </div>
//             )}
//         </div>

//         <div className="block md:hidden">
//         <button onClick={toggleMenu}>
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/255px-Hamburger_icon.svg.png"
//             alt="menu-icon"
//             className="w-7 h-7"
//           />
//         </button>
//       </div>

//       {isMenuOpen && (
//         <div className="absolute top-[70px] left-0 w-full bg-white shadow-md md:hidden z-50">
//           <ul className="flex flex-col items-start space-y-2 p-4 font-semibold text-lg">
//               <NavLink to="/" className="hover:text-orange-500"><li>Home</li></NavLink>
//               <NavLink to="/Cart" className="hover:text-orange-500"><li>Cart {cart.length >0 && (<span className='text-sm px-1 rounded-full bg-orange-400'>{cart.length}</span>)}</li></NavLink>
//               <NavLink to="/Order" className="hover:text-orange-500"><li>Order</li></NavLink>
//               <li className="w-full">
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="text"
//                   placeholder="Search here..."
//                   className="flex-grow rounded px-2 py-1 border border-slate-300"
//                 />
//                 <button className="bg-blue-500 rounded-lg px-2 py-1 text-white hover:bg-blue-400 font-normal text-base">
//                   Search
//                 </button>
//               </div>
//             </li>
//             <div className="flex items-center space-x-2 space-y-2">
//                 <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="profile" className='w-8 h-8' />
//                 {userName ? (
//               <>
//                 <span className="font-normal text-sm">{userName}</span>
//                 <button
//                   className='bg-orange-500 px-3 py-1 rounded-full hover:bg-orange-600 text-white text-base font-normal'
//                   onClick={handleLogout} // Trigger the logout function
//                 >
//                   Sign Out
//                 </button>
//               </>
//             ) : (
//               <>
//                 <NavLink to="/login">
//                   <button className='bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600 text-base font-normal'>
//                     Login
//                   </button>
//                 </NavLink>
//                 {/* <NavLink to="/signup">
//                   <button className='bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600'>
//                     Sign Up
//                   </button>
//                 </NavLink> */}
//               </>
//             )}
//         </div>
//         </ul>
//         </div>
//       )}
            
//     </div>
//   );
// }

// export default Navbar;

import React,{useEffect, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext'; // Import the UserContext hook
import { useCart } from "../contexts/CartContext";
import { getAllProduct } from '../api/productApi';

function Navbar() {
    const { handleLogout } = useUser(); // Get username and logout from context
    const { cart } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger men
    const userName = localStorage.getItem("userName")
    const [showModal, setShowModal] = useState(false)
    const [searchTerm,setSearchTerm] = useState("")
    const [products,setProducts] = useState([])
    const navigate = useNavigate()

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(()=>{
      const fetchProducts = async () =>{
        if(searchTerm.trim()===''){
          setProducts([]);
          setShowModal(false);
          return;
        }
        try{
          const res = await getAllProduct();
          const searchProducts = res.data.filter(product=>(
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          ));
          setProducts(searchProducts);
          setShowModal(true);
        }
        catch(error){
          console.error("Error while searching Products", error);
        }
      }
  
      const delaySearch = setTimeout(() => {
        fetchProducts();
      }, 300);
  
      return () => clearTimeout(delaySearch);
    },[searchTerm])
  
    const handleProductClick = (productId)=>{
      setShowModal(false)
      setSearchTerm("");
      navigate(`/product/${productId}`)
    }

  return (

    <div className='Navbar  sticky top-0 w-full h-[77px] p-4 bg-white flex items-center z-50 justify-between shadow-lg'>
        <div className='flex items-center'>
            <img src="https://r2.erweima.ai/imgcompressed/img/compressed_3896cf4e39b5eb0ecf7a95662f48540e.webp"alt="logo" className='w-14 h-14'/>
            <p className='font-bold text-2xl md:2xl'>eshopify</p>
        </div>
        <div className='hidden md:flex justify-center space-x-4 text-lg font-semibold'>
            <ul className='flex space-x-4 '>
                <NavLink to="/" className="hover:text-yellow-500"><li>Home</li></NavLink>
                <NavLink to="/Cart" className="hover:text-yellow-500"><li>Cart {cart.length >0 && (<span className='text-sm px-1 rounded-full bg-yellow-400'>{cart.length}</span>)}</li></NavLink>
                <NavLink to="/Order" className="hover:text-yellow-500"><li>Order</li></NavLink>
            </ul>
        </div>
        <div className=' relative items-center space-x-4  md:block'>
            <input onChange={(e)=>setSearchTerm(e.target.value)} value={searchTerm} type="search" placeholder='Search here...' 
                className=' p-2 border rounded-md w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] outline-none' />
            {showModal && products.length>0 && (
              <div className='absolute top-7 right-0 mt-3 overflow-y-auto z-50 w-full max-h-60 bg-white border rounded-lg'>
                <ul className='divide-y divide-gray-300'>
                  {products.map(product=>(
                    <li key={product.id} onClick={()=>handleProductClick(product.id)} className='cursor-pointer p-2'>{product.name}</li>
                  ))}
                </ul>
              </div>
            )}
        </div>
        <div className="flex items-center space-x-2">
        {userName ? (
          <>
                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="profile" className='w-8 h-8 hidden md:block' />
                
              
                <span className="font-normal text-sm hidden md:block">{userName}</span>
                <button
                  className='bg-yellow-700 px-3 py-1 rounded-full hover:bg-orange-600 text-white hidden md:block'
                  onClick={handleLogout} // Trigger the logout function
                >
                  Sign Out
                </button>
              </>
            ) : (
              <div className='hidden md:block'>
                <NavLink to="/login">
                  <button className='bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600'>
                    Login
                  </button>
                </NavLink>
              </div>
            )}
        </div>

        <div className="block md:hidden">
        <button onClick={toggleMenu}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/255px-Hamburger_icon.svg.png"
            alt="menu-icon"
            className="w-7 h-7"
          />
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-gray-50 shadow-md md:hidden z-40 flex flex-col items-center">
          <ul className="flex flex-col items-center space-y-2 p-4 font-semibold text-lg ">
              <NavLink to="/" className="hover:text-orange-500 border-b-2 "><li>Home</li></NavLink>
              <NavLink to="/Cart" className="hover:text-orange-500 border-b-2"><li>Cart {cart.length >0 && (<span className='text-sm px-1 rounded-full bg-orange-400'>{cart.length}</span>)}</li></NavLink>
              <NavLink to="/Order" className="hover:text-orange-500 border-b-2"><li>Order</li></NavLink>
              
            <div className="flex items-center space-x-2 space-y-2">
                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="profile" className='w-8 h-8' />
                {userName ? (
              <>
                <span className="font-normal text-sm">{userName}</span>
                <button
                  className='text-orange-500 rounded-full hover:text-orange-600 text-base font-normal'
                  onClick={handleLogout} // Trigger the logout function
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login">
                  <button className='bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600 text-base font-normal'>
                    Login
                  </button>
                </NavLink>
              </>
            )}
        </div>
        </ul>
        </div>
      )}
            
    </div>
  );
}

export default Navbar;