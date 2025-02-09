"use client";
import { useState } from "react";
import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faShoppingCart,
  faCogs,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-purple-600 text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <span className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            mhhasanul@gmail.com
          </span>
          <span className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            (12345)67890
          </span>
        </div>

        {/* Authentication */}
        <div className="flex items-center space-x-4">
          {isSignedIn ? (
            <>
              <span className="text-sm">Hello, {user?.fullName}!</span>
              <SignOutButton>
                <button className="bg-red-500 px-4 py-1 text-white rounded">Logout</button>
              </SignOutButton>
            </>
          ) : (
            <SignInButton>
              <button className="bg-blue-500 px-4 py-1 text-white rounded">Login</button>
            </SignInButton>
          )}
          <Link href="/cart">
            <button className="flex items-center">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Cart
            </button>
          </Link>
          <Link href="/dashboard">
            <button className="flex items-center">
              <FontAwesomeIcon icon={faCogs} className="mr-2" /> Admin Dashboard
            </button>
          </Link>
          <Link href="/analytics">
            <button className="flex items-center">
              <FontAwesomeIcon icon={faChartLine} className="mr-2" /> Analytics
            </button>
          </Link>
        </div>
      </div>

      {/* Main Navbar
       <nav className="bg-white py-4 px-4 shadow-sm">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold text-gray-800">Hekto</div>
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
          </button>

          {/* Desktop Menu Links */}
           {/* <ul className="hidden md:flex space-x-8 text-gray-800 text-sm">
            <li>
              <Link href="/" className="hover:text-pink-500">Home</Link>
            </li>
            <li>
              <Link href="/pages" className="hover:text-pink-500">Pages</Link>
            </li>
            <li>
              <Link href="/shoppingcart" className="hover:text-pink-500">Shop</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-pink-500">Blog</Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-pink-500">More Products</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-500">Contact</Link>
            </li>
          </ul>
        </div>  */}

        {/* Mobile Menu Links */}
        {/* {isMenuOpen && (
          <ul className="flex flex-col mt-4 space-y-2 md:hidden text-gray-800 text-sm">
            <li>
              <Link href="/" className="hover:text-pink-500">Home</Link>
            </li>
            <li>
              <Link href="/pages" className="hover:text-pink-500">Pages</Link>
            </li>
            <li>
              <Link href="/shoppingcart" className="hover:text-pink-500">Shop</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-pink-500">Blog</Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-pink-500">More Products</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-500">Contact</Link>
            </li>
          </ul>
        )}
      </nav>   */}
    </header>
  );
};



export default Topbar;
