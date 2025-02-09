import React, { useState, useEffect } from "react";
import { useCart } from "./context";
import CheckoutForm from "./CheckoutForm";

interface OrderDetails {
  _id: string;
  name: string;
  email: string;
  address: string;
  cartItems: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
}

export const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, deleteItem } = useCart();
  const [isCheckoutVisible, setIsCheckoutVisible] = useState<boolean>(false); // Track checkout form visibility
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null); // New state for order details

  const handleCheckoutClick = () => {
    setIsCheckoutVisible(true); // Show checkout form
  };

  // Calculate the total amount of the cart
  const totalAmount = cart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 bg-white shadow-md rounded-md mx-auto max-w-3xl">
      <h1 className="text-black font-bold text-2xl mb-4">Cart</h1>
      <ol>
        {cart.items.length > 0 ? (
          cart.items.map((val, i) => (
            <li key={i} className="mb-4 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  src={val.image || "/placeholder.png"}
                  alt={val.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <span className="block text-sm sm:text-base">Name: {val.name}</span>
                  <span className="block text-sm sm:text-base">Quantity: {val.quantity}</span>
                  <span className="block text-sm sm:text-base">
                    Price: ${(val.price * val.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="inline-block space-x-2">
                <button
                  className="bg-green-600 text-white px-2 py-1 rounded-md text-sm sm:text-base"
                  onClick={() => increaseQuantity(val.id)}
                >
                  +
                </button>
                <button
                  className="bg-red-600 text-white px-2 py-1 rounded-md text-sm sm:text-base"
                  onClick={() => decreaseQuantity(val.id)}
                >
                  -
                </button>
                <button
                  className="bg-gray-600 text-white px-2 py-1 rounded-md text-sm sm:text-base"
                  onClick={() => deleteItem(val.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-sm sm:text-base">Your cart is empty.</p>
        )}
      </ol>

      {/* Total Amount */}
      {cart.items.length > 0 && (
        <div className="mt-4">
          <p className="text-lg font-semibold">Total: ${totalAmount.toFixed(2)}</p>
          <button
            onClick={handleCheckoutClick}
            className="w-full bg-blue-600 text-white py-2 rounded-md mt-2"
          >
            Save data for Checkout
          </button>
        </div>
      )}

      {/* Checkout Form */}
      {isCheckoutVisible && (
        <CheckoutForm setIsCheckoutVisible={setIsCheckoutVisible} userId="user123" />
      )}
    </div>
  );
};