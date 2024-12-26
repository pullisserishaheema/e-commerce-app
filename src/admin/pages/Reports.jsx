


// import React, { useEffect, useState } from 'react';

// const Reports = () => {
//     const [reportData, setReportData] = useState({
//         totalSales: 0,
//         totalOrders: 0,
//         newUsers: 0,
//         orderStatus: {
//             pending: 0,
//             shipped: 0,
//             delivered: 0,
//             cancelled: 0
//         }
//     });

//     useEffect(() => {
//         // Fetch data from db.json (replace with actual API endpoint if needed)
//         const fetchData = async () => {
//             const response = await fetch('/path/to/db.json');
//             const data = await response.json();

//             // Calculate total sales
//             const totalSales = data.orders.reduce((sum, order) => sum + order.total, 0);

//             // Calculate total orders
//             const totalOrders = data.orders.length;

//             // Calculate new users (assuming users added within a certain timeframe)
//             const currentDate = new Date();
//             const newUsers = data.users.filter(user => {
//                 const userDate = new Date(user.date || '2024-01-01'); // Adjust date logic as needed
//                 return (currentDate - userDate) / (1000 * 60 * 60 * 24) <= 30; // Last 30 days
//             }).length;

//             // Order statuses (mock calculation as db.json doesn't include statuses)
//             const orderStatus = {
//                 pending: 5, // Replace with actual logic if available
//                 shipped: 10, // Replace with actual logic if available
//                 delivered: 20, // Replace with actual logic if available
//                 cancelled: 2 // Replace with actual logic if available
//             };

//             setReportData({ totalSales, totalOrders, newUsers, orderStatus });
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-6">Admin Reports</h1>
//             {/* Overview Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//                 <div className="bg-white p-4 rounded-lg shadow-md">
//                     <h2 className="text-xl font-semibold mb-4">Total Sales</h2>
//                     <p className="text-2xl">${reportData.totalSales}</p>
//                 </div>
//                 <div className="bg-white p-4 rounded-lg shadow-md">
//                     <h2 className="text-xl font-semibold mb-4">Total Orders</h2>
//                     <p className="text-2xl">{reportData.totalOrders}</p>
//                 </div>
//                 <div className="bg-white p-4 rounded-lg shadow-md">
//                     <h2 className="text-xl font-semibold mb-4">New Users</h2>
//                     <p className="text-2xl">{reportData.newUsers}</p>
//                 </div>
//                 <div className="bg-white p-4 rounded-lg shadow-md">
//                     <h2 className="text-xl font-semibold mb-4">Order Status</h2>
//                     <ul>
//                         <li><strong>Pending:</strong> {reportData.orderStatus.pending}</li>
//                         <li><strong>Shipped:</strong> {reportData.orderStatus.shipped}</li>
//                         <li><strong>Delivered:</strong> {reportData.orderStatus.delivered}</li>
//                         <li><strong>Cancelled:</strong> {reportData.orderStatus.cancelled}</li>
//                     </ul>
//                 </div>
//             </div>
//             {/* Charts Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {/* Weekly Sales Chart Placeholder */}
//                 <div className="bg-white p-4 rounded-lg shadow-md">
//                     <h2 className="text-xl font-semibold mb-4">Weekly Sales</h2>
//                     <div className="h-48 bg-gray-200 rounded-lg">[Sales Chart]</div>
//                 </div>
//                 {/* Weekly New Users Chart Placeholder */}
//                 <div className="bg-white p-4 rounded-lg shadow-md">
//                     <h2 className="text-xl font-semibold mb-4">Weekly New Users</h2>
//                     <div className="h-48 bg-gray-200 rounded-lg">[Users Chart]</div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Reports;
