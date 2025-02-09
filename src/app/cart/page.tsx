"use client"
import React from 'react'
import { Cart } from '../cart'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-8">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Welcome to Your Cart</h1>
        <p className="text-lg text-gray-600">Add items to your cart and proceed to checkout</p>
      </div>

      {/* Cart Component Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Your Shopping Cart</h2>
        <Cart />
      </div>

      {/* Footer Section */}
      <div className="mt-12 text-center text-gray-500">
        <p>&copy; 2025 Your E-Commerce Store. All rights reserved.</p>
      </div>
    </div>
  )
}

export default page;
