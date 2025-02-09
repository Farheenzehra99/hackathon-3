"use client";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutButton({ items }) {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    console.log("✅ Checkout Initiated");

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });

    const data = await response.json();

    if (data.url) {
      console.log("✅ Redirecting to:", data.url);
      window.location.href = data.url;
    } else {
      console.error("❌ Checkout Error:", data.error);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Checkout
    </button>
  );
};
