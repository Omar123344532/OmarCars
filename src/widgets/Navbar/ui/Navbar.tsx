import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
    console.log("Navbar rendered");
    return (
        <nav className="w-full bg-white shadow-md py-4 sticky top-0 z-50">
            <ul className="max-w-7xl mx-auto flex items-center justify-center gap-10 text-gray-700 font-medium">
                <li>
                    <Link
                        to={"/"}
                        className="hover:text-blue-600 transition-colors duration-200"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to={"/about"}
                        className="hover:text-blue-600 transition-colors duration-200"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to={"/contact"}
                        className="hover:text-blue-600 transition-colors duration-200"
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        to={"/shop"}
                        className="hover:text-blue-600 transition-colors duration-200"
                    >
                        Shop
                    </Link>
                </li>
                <li>
                    <Link
                        to={"/cart"}
                        className="hover:text-blue-600 transition-colors duration-200"
                    >
                        Cart
                    </Link>
                </li>
                <li>
                    <Link
                        to={"/registration"}
                        className="hover:text-blue-600 transition-colors duration-200"
                    >
                        Sign up
                    </Link>
                </li>
                <li>
                    <Link
                        to={"/login"}
                        className="hover:text-blue-600 transition-colors duration-200"
                    >
                        LogIN
                    </Link>
                </li>
                <li>
                    <Link
                        to={"/profile"}
                        className="hover:text-blue-600 transition-colors duration-200"
                    >
                        Profile
                    </Link>
                </li>

                    <li>
                    <Link
                        to={"/cheakout"}
                        className="hover:text-blue-600 transition-colors duration-200"
                    >
                        Checkout
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default React.memo(Navbar);
