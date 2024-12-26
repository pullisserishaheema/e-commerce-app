// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import ManageProducts from './pages/ManageProducts';
// import ManageUsers from './pages/ManageUsers';
// import Reports from './pages/Reports';
// import AdminNavbar from './pages/AdminNavbar';
// import ManageOrders from './pages/ManageOrders';
// const AdminRouter = () => {
//   return (
//     <div className="admin-layout">
//             <AdminNavbar />
//             <div className="admin-content">
//                 <Routes>
//                         <Route path="/" element={<Dashboard />} />
//                         <Route path="/admin/products" element={<ManageProducts />} />
//                         <Route path="/admin/users" element={<ManageUsers />} />
//                         <Route path="/admin/reports" element={<Reports />} />
//                         <Route path="/admin/manage-orders" element={<ManageOrders />} />
                        
//                 </Routes>
//             </div>
//         </div>

//   );
// };

// export default AdminRouter;

import React from 'react'
import Dashboard from '../pages/Dashboard';
import ManageProducts from '../pages/ManageProducts';
import ManageOrders from '../pages/ManageOrders';
import ManageUsers from '../pages/ManageUsers';
import Reports from '../pages/Reports';
import { AddProducts } from '../pages/AddProducts';
import { EditProduct } from '../pages/EditProduct';


const AdminRouter = [
    {path:'/admin', element:<Dashboard/>},
    {path:'/admin/manageproducts', element:<ManageProducts/>},
    {path:'/admin/manageorders', element:<ManageOrders/>},
    {path:'/admin/manageusers', element:<ManageUsers/>},
    {path:'/admin/addproduct', element:<AddProducts/>},
    {path:'/admin/editproduct/:id', element:<EditProduct/>},
    {path:'/admin/reports', element:<Reports/>}
  ]

export default AdminRouter;