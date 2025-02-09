"use client";

import React, { useState } from "react";
import { useCart } from "./context";
import CheckoutButton from "./components/checkoutbutton";

interface CheckoutFormProps {
  setIsCheckoutVisible: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string;
}

interface OrderDetails {
  _id: string;
  name: string;
  email: string;
  address: string;
  totalAmount: number;
  cartItems: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ setIsCheckoutVisible, userId }) => {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const totalAmount = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

    const orderData = {
      name,
      email,
      address,
      userId,
      cartItems: cart.items,
      totalAmount,
    };

    try {
      const response = await fetch("/api/saveOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const result = await response.json();
        setOrderDetails(result.order);
        clearCart();
      } else {
        alert("Failed to place the order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  if (orderDetails) {
    return (
      <div className="p-6 bg-white shadow-lg">
        <h2 className="text-xl font-bold mb-4">Order Confirmation</h2>
        <p className="mb-2"><strong>Order ID:</strong> {orderDetails._id}</p>
        <p className="mb-2"><strong>Name:</strong> {orderDetails.name}</p>
        <p className="mb-2"><strong>Email:</strong> {orderDetails.email}</p>
        <p className="mb-2"><strong>Address:</strong> {orderDetails.address}</p>
        <p className="mb-2"><strong>Total Amount:</strong> ${orderDetails.totalAmount.toFixed(2)}</p>
        <h3 className="text-lg font-semibold mt-4">Cart Items:</h3>
        <ul className="list-disc pl-5">
          {orderDetails.cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x ${item.price}
            </li>
          ))}
        </ul>

        <CheckoutButton
          items={orderDetails.cartItems.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          }))}
        />
      </div>
    );
  }

  return (
    <div className="p-6 bg-white shadow-lg">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Address</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md mb-4">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
