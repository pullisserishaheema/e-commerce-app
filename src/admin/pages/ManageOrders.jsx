
// import React, { useState, useEffect } from 'react';
// import { getAllOrders } from '../../api/adminApi';

// const ManageOrders = () => {
//     const [orders, setOrders] = useState([]);
    
//     useEffect(() => {
//         getAllOrders().then((res) => setOrders(res.data));
//     }, []);

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-6">Manage Orders</h1>

//             {/* Order Table */}
//             <div className="bg-white p-4 rounded-lg shadow-md">
//                 <h2 className="text-xl font-semibold mb-4">Orders List</h2>
//                 <table className="min-w-full table-auto">
//                     <thead>
//                         <tr className="bg-gray-100">
//                             <th className="px-4 py-2 text-left">Item</th>
//                             <th className="px-4 py-2 text-left">Customer Details</th>
//                             <th className="px-4 py-2 text-left">Total Price</th>
//                             <th className="px-4 py-2 text-left">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {orders.map(order =>
//                             order.items.map(item => (
//                                 <tr key={`${order.id}-${item.id}`} className="border-t">
//                                     {/* Item Details */}
//                                     <td className="px-6 py-3 text-sm text-gray-700">
//                                         <img
//                                             src={item.image}
//                                             alt="img"
//                                             className="w-16 h-16 object-cover rounded-md"
//                                         />
//                                     </td>

//                                     {/* Customer Details */}
//                                     {/* <td className="px-4 py-2">
//                                         <p className="font-semibold">{order.userName}</p>
//                                         <p className="text-sm text-gray-500">
//                                             {order.streetAddress}, {order.city}
//                                         </p>
//                                         <p className="text-sm text-gray-500">
//                                             {order.state}, {order.zipCode}, {order.country}
//                                         </p>
//                                     </td> */
//                                     <td className="px-4 py-2">
//                                         <p className="font-semibold">{order.user}</p>
//                                         <p className="text-sm text-gray-500">{order.address.street}</p>
//                                         <p className="text-sm text-gray-500">
//                                             {order.address.city}, {order.address.state}
//                                         </p>
//                                         <p className="text-sm text-gray-500">
//                                             {order.address.zip}, {order.address.country}
//                                         </p>
//                                     </td>
// }

//                                     {/* Total Price */}
//                                     <td className="px-4 py-2">₹ {order.total}</td>

//                                     {/* Actions */}
//                                     <td className="px-4 py-2">
//                                         <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md">
//                                             View Details
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default ManageOrders;


import React, { useState, useEffect } from 'react';
import { getAllOrders } from '../../api/adminApi';
import { FiPackage, FiUser, FiCalendar} from 'react-icons/fi';
import { MdCurrencyRupee } from 'react-icons/md';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [expandedOrder, setExpandedOrder] = useState(null);

    useEffect(() => {
        getAllOrders().then((res) => setOrders(res.data));
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return {
            date: date.toLocaleDateString(),
            time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
    };

    return (
        <div className="container mx-auto max-w-7xl">
            <header className="bg-white shadow-lg p-4 mb-2">
                <h1 className="text-2xl font-bold text-gray-800">Manage Orders</h1>
            </header>
            {/* Orders Grid */}
            <div className="grid grid-cols-1 gap-6 p-4">
                {orders.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                        <FiPackage className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-gray-500">No orders found</p>
                    </div>
                ) : (
                    orders.map((order) => {
                        const { date, time } = formatDate(order.date);
                        const isExpanded = expandedOrder === order.id;

                        return (
                            <div
                                key={order.id}
                                className={`bg-white rounded-lg  border transition-all duration-200 ${
                                    isExpanded ? 'ring-2 ring-gray-300' : 'hover:shadow-md'
                                }`}
                            >
                                {/* Order Summary */}
                                <div className="p-6">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
                                        {/* Product Details */}
                                        <div>
                                            <div className="flex items-center space-x-2 mb-2">
                                                <FiPackage className="text-black" />
                                                <span className="font-medium text-black">Order Details</span>
                                            </div>
                                            <p className="text-sm text-gray-600">ID: #{order.id}</p>
                                        </div>

                                        {/* Customer Details */}
                                        <div>
                                            <div className="flex items-center space-x-2 mb-2">
                                                <FiUser className="text-black" />
                                                <span className="font-medium text-black">Customer</span>
                                            </div>
                                            <p className="text-sm text-gray-600">{order.userName}</p>
                                        </div>

                                        {/* Date & Time */}
                                        <div>
                                            <div className="flex items-center space-x-2 mb-2">
                                                <FiCalendar className="text-black" />
                                                <span className="font-medium text-black">Order Date</span>
                                            </div>
                                            <p className="text-sm text-gray-600">{date}</p>
                                            <p className="text-sm text-gray-500">{time}</p>
                                        </div>

                                        {/* Total Price */}
                                        <div>
                                            <div className="flex items-center space-x-2 mb-2">
                                                <MdCurrencyRupee className="text-black" />
                                                <span className="font-medium text-black">Total Amount</span>
                                            </div>
                                            <p className="text-lg font-normal text-gray-600">₹{order.total}</p>
                                        </div>
                                    </div>

                                    {/* Expand/Collapse Button */}
                                    <div className="flex justify-between items-center mt-6 pt-4 border-t">
                                        <button
                                            onClick={() => setExpandedOrder(isExpanded ? null : order.id)}
                                            className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-950  ring-2 ring-orange-200 rounded-md"
                                        >
                                            {isExpanded ? 'Hide Details' : 'View Details'}
                                        </button>
                                    </div>
                                </div>

                                {/* Expanded Order Details */}
                                {isExpanded && (
                                    <div className="border-t border-gray-100 bg-gray-50 p-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Order Items */}
                                            <div >
                                                <h3 className="text-lg font-bold text-black mb-4">Order Items</h3>
                                                <div className="space-y-3">
                                                    {order.items.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex items-center space-x-4 bg-gray-50 p-3 border-b border-gray-200"
                                                        >
                                                            <div className="flex-shrink-0">
                                                                <img
                                                                    src={item.image || 'https://via.placeholder.com/150'}
                                                                    alt={item.name}
                                                                    className="w-16 h-16 object-cover rounded-md"
                                                                />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <p className="font-bold text-gray-800">{item.name}</p>
                                                                <p className="text-sm text-gray-500">
                                                                    Quantity: {item.qty} × ₹{item.price}
                                                                </p>
                                                                <p className="text-sm font-medium text-gray-800">
                                                                    Subtotal: ₹{item.qty * item.price}
                                                                </p>
                                                            </div>
                                                            
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="space-y-6">        
                                                {/* Address Details */}
                                                <div>
                                                    <h3 className="text-lg font-bold text-black mb-2">Shipping Address</h3>
                                                    <div className="bg-white p-2  border-b">
                                                        <p className="font-normal text-gray-600">{order.address?.Address}</p>
                                                    </div>
                                                </div>

                                                {/* Payment Info */}
                                                <div>
                                                    <h3 className="text-lg font-bold text-black mb-2">Payment Details</h3>
                                                    <div className="bg-white p-2  border-b">
                                                        <p className="text-gray-600">Payment Method: {order.paymentMethod}</p>
                                                        <p className="font-normal text-gray-800 mt-2">Total Paid: ${order.total}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default ManageOrders;