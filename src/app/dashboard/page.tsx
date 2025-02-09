"use client";

import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";

// ✅ Sanity Client
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-01-01",
  useCdn: false,
});

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<any[]>([]);
  const [filters, setFilters] = useState({
    search: "",
    email: "",
    minAmount: "",
    startDate: "",
    endDate: "",
  });

  // ✅ Fetch Orders from Sanity
  useEffect(() => {
    async function fetchOrders() {
      const query = `*[_type == "newOrder"] | order(createdAt desc) {
        _id,
        name,
        email,
        address,
        userId,
        createdAt,
        cartItems,
        totalAmount
      }`;
      const data = await sanityClient.fetch(query);
      setOrders(data);
      setFilteredOrders(data);
    }
    fetchOrders();
  }, []);

  // ✅ Handle Filter Change
  const handleFilterChange = (e: any) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // ✅ Apply Filters
  useEffect(() => {
    let filtered = orders;

    if (filters.search) {
      filtered = filtered.filter((order) =>
        order.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    if (filters.email) {
      filtered = filtered.filter((order) =>
        order.email.toLowerCase().includes(filters.email.toLowerCase())
      );
    }
    if (filters.minAmount) {
      filtered = filtered.filter((order) => order.totalAmount >= Number(filters.minAmount));
    }
    if (filters.startDate) {
      filtered = filtered.filter((order) => new Date(order.createdAt) >= new Date(filters.startDate));
    }
    if (filters.endDate) {
      filtered = filtered.filter((order) => new Date(order.createdAt) <= new Date(filters.endDate));
    }

    setFilteredOrders(filtered);
  }, [filters, orders]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">📦 Orders</h1>

      {/* Filters */}
      <div className="bg-white p-6 mb-6 shadow-lg rounded-lg flex flex-wrap gap-4 border border-gray-200">
        {[
          { name: "search", placeholder: "Search by Name" },
          { name: "email", placeholder: "Search by Email" },
          { name: "minAmount", placeholder: "Min Order Amount ($)", type: "number" },
          { name: "startDate", type: "date" },
          { name: "endDate", type: "date" },
        ].map(({ name, placeholder, type = "text" }) => (
          <input
            key={name}
            type={type}
            name={name}
            value={(filters as any)[name]}
            onChange={handleFilterChange}
            placeholder={placeholder}
            className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        ))}
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-200 text-gray-700">
            <tr className="text-lg">
              {[
                "Customer", "Email", "Address", "Total", "Date", "Cart Items",
              ].map((header) => (
                <th key={header} className="p-4 border-b-2 border-gray-300">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {filteredOrders.map((order) => (
              <tr key={order._id} className="border-t border-gray-300 hover:bg-gray-100">
                <td className="p-4 font-semibold">{order.name}</td>
                <td className="p-4">{order.email}</td>
                <td className="p-4">{order.address}</td>
                <td className="p-4 font-bold text-green-600">${order.totalAmount.toFixed(2)}</td>
                <td className="p-4">{new Date(order.createdAt).toLocaleDateString()}</td>
                <td className="p-4">
                  <details className="cursor-pointer">
                    <summary className="text-blue-600 hover:underline">View Items</summary>
                    <ul className="mt-2 p-2 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
                      {order.cartItems.map((item: any, index: number) => (
                        <li key={index} className="text-gray-700 flex justify-between">
                          <span>{item.name} × {item.quantity}</span>
                          <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredOrders.length === 0 && (
          <p className="text-center text-gray-500 py-6">No orders found</p>
        )}
      </div>
    </div>
  );
}