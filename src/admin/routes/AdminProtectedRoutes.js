import React from "react";
import { Outlet,Navigate } from "react-router-dom";

const AdminProtectedRoutes = () =>{
    const IsAuthenticated = localStorage.getItem{"admin"};
    return IsAuthenticated ?<Outlet /> : <Navigate to="/" />;
};

export default AdminProtectedRoutes;