import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ManageProducts from './pages/ManageProducts';
import ManageUsers from './pages/ManageUsers';
import Reports from './pages/Reports';
import AdminNavbar from '../components/AdminNavbar';
import ManageOrders from './pages/ManageOrders';
const AdminRouter = () => {
  return (
    <div className="admin-layout">
            <AdminNavbar />
            <div className="admin-content">
                <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/admin/products" element={<ManageProducts />} />
                        <Route path="/admin/users" element={<ManageUsers />} />
                        <Route path="/admin/reports" element={<Reports />} />
                        <Route path="/admin/manage-orders" element={<ManageOrders />} />
                        
                </Routes>
            </div>
        </div>

  );
};

export default AdminRouter;
