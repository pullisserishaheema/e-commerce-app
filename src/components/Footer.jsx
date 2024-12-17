
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-center md:text-left">
                        <h4 className="text-white text-lg font-semibold mb-2">Contact Us</h4>
                        <p className="space-x-4">
                            <a href="/order" className="hover:text-white transition-colors duration-300">Orders</a>
                            <a href="/faqs" className="hover:text-white transition-colors duration-300">FAQs</a>
                            <a href="/contactus" className="hover:text-white transition-colors duration-300">Contact Us</a>
                        </p>
                    </div>

                    <div className="text-center md:text-right">
                        <h4 className=" flex flex-rowtext-white text-lg font-semibold mb-2">Customer Support</h4>
                        <p className="space-x-4">
                            <a href="/return" className="hover:text-white transition-colors duration-300">Return & Refund Policy</a>
                            <a href="/ship" className="hover:text-white transition-colors duration-300">Shipping Policy</a>
                            <a href="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                            <a href="/conditions" className="hover:text-white transition-colors duration-300">Terms & Conditions</a>
                        </p>
                    </div>
                </div>

                <div className="text-center text-gray-500 text-sm mt-4 border-t border-gray-700 pt-4">
                    <p>&copy; E-com Name. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
