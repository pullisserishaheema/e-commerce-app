

// import React from 'react';
// import { useNavigate } from 'react-router';

// function Signup  ()  {
//     const navigate=useNavigate()
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center text-gray-90000 mb-6">Sign Up</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block text-gray-900 mb-1">Name</label>
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-400 outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-600 mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="qwerty@gmial.com"
//               className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-400 outline-none"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-600 mb-1">Password</label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-400 outline-none"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
//           >
//             Sign Up
//           </button>
//         </form>

//         {/* Login Link */}
//         <p className="mt-4 text-sm text-center text-gray-600">
//           Already have an account?{' '}
//          <button onClick={()=>navigate("/login")} className="text-blue-500 hover:underline">
//             Login
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// import React from "react";
// import { NavLink,useNavigate } from "react-router-dom";
// import { useState } from "react"
// import axios from "axios"
// import { useContext } from "react";
// import { UserContext } from "../contexts/UserContext"

// const Signup =() =>{
//     const { setUser } = useContext(UserContext)
//     const navigate = useNavigate()
//     const [username,setUsername]=useState("")
//     const [password,setPassword]=useState("")
//     const [confirmPassword,setConfirmPassword]=useState("")
//     const [error,setError] = useState("")


//     const HandleSignup = async () => {
//         if (password !== confirmPassword) {
//             setError("Passwords do not match!");
//             return
//         }

//         try {
//             const existingUser = await axios.get("http://localhost:5000/users", {
//                 params: { username }
//             })

//             if (existingUser.data.length > 0) {
//                 setError("Username already exists. Please choose another.")
//             } 
//             else {
//                 await axios.post("http://localhost:5000/users",{ username, password } )
//                 localStorage.setItem("username", username);
//                 setUser(username);
//                 navigate('/Login')
//             }
//         } catch (err) {
//             setError("Error occurred. Please try again.");
//         }
//     }
    
        
        
    
//     return(
//         <div className="signup flex flex-col items-center justify-center h-screen bg-slate-50">
//             <div className="user flex flex-col items-center p-6 bg-gray-200 border shadow-lg rounded-xl w-[300px]  ">
//                 <h1 className="text-4xl text-center font-medium p-5 text-black">SIGNUP</h1>
                
//                 <div className="pass flex flex-col justify-center items-center pt-6" >
//                     <input type="text" placeholder="Username" className=" rounded-xl w-[250px] pl-2 mt-2 py-2 outline-none border-black border-b-2" value={username} onChange ={(e) =>setUsername(e.target.value)}/>
//                     <input type="password" placeholder="Password" className=" rounded-xl pl-2 mt-2 w-[250px] py-2 outline-none border-black border-b-2" value={password} onChange ={(e) =>setPassword(e.target.value)}/>
//                     <input type="password" placeholder="Confirm Password" className=" rounded-xl pl-2 mt-2 w-[250px] py-2 outline-none border-black border-b-2" value={confirmPassword} onChange ={(e) =>setConfirmPassword(e.target.value)} />
//                     <button className=' mt-5 rounded-2xl p-2 px-5 hover:bg-gray-300 border-black border-b-2 text-black font-bold' onClick={HandleSignup} >SIGNUP</button>
//                     {error && <p className='text-red-500'>{error}</p>}
//                     <h1 className='mt-5 text-cente r font-extralight p-5 '>Already have an account?<NavLink to='/Login' className='text-blue-500 hover:text-black'>
//                     Login</NavLink></h1>
//                 </div>
//             </div>
//         </div>
//     )

// }
// export default Signup; 


import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../contexts/UserContext";  // <-- Corrected import path

const Signup = () => {
  const { setUser } = useUser();  // <-- Correct usage of context
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const HandleSignup = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const existingUser = await axios.get("http://localhost:5000/user", {
        params: { username }
      });

      if (existingUser.data.length > 0) {
        setError("Username already exists. Please choose another.");
      } else {
        await axios.post("http://localhost:5000/user", { username, password });
        localStorage.setItem("username", username);
        setUser(username);  // Set the user context
        navigate('/Login');
      }
    } catch (err) {
      setError("Error occurred. Please try again.");
    }
  };

  return (
    <div className="signup flex flex-col items-center justify-center h-screen bg-slate-50">
      <div className="user flex flex-col items-center p-6 bg-gray-200 border shadow-lg rounded-xl w-[300px]">
        <h1 className="text-4xl text-center font-medium p-5 text-black">SIGNUP</h1>

        <div className="pass flex flex-col justify-center items-center pt-6">
          <input
            type="text"
            placeholder="Username"
            className="rounded-xl w-[250px] pl-2 mt-2 py-2 outline-none border-black border-b-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-xl pl-2 mt-2 w-[250px] py-2 outline-none border-black border-b-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="rounded-xl pl-2 mt-2 w-[250px] py-2 outline-none border-black border-b-2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            className="mt-5 rounded-2xl p-2 px-5 hover:bg-gray-300 border-black border-b-2 text-black font-bold"
            onClick={HandleSignup}
          >
            SIGNUP
          </button>
          {error && <p className="text-red-500">{error}</p>}
          <h1 className="mt-5 text-center font-extralight p-5">
            Already have an account?{" "}
            <NavLink to="/Login" className="text-blue-500 hover:text-black">
              Login
            </NavLink>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Signup;
