"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics = () => {
  const [totalRevenue, setTotalRevenue] = useState<number>(0);
  const [totalItemsSold, setTotalItemsSold] = useState<number>(0);
  const [totalOrders, setTotalOrders] = useState<number>(0);

  useEffect(() => {
    const fetchAnalytics = async () => {
      const query = `*[_type == "newOrder"] | order(createdAt desc){
        cartItems
      }`;
      const data = await client.fetch(query);

      let revenue = 0;
      let itemsSold = 0;
      let ordersCount = data.length;

      data.forEach((order: any) => {
        if (order.cartItems) {
          order.cartItems.forEach((item: any) => {
            if (item && item.price && item.quantity) {
              revenue += item.price * item.quantity;
              itemsSold += item.quantity;
            }
          });
        }
      });

      setTotalRevenue(revenue);
      setTotalItemsSold(itemsSold);
      setTotalOrders(ordersCount);
    };

    fetchAnalytics();
  }, []);

  const chartData = {
    labels: ["Total Revenue", "Total Items Sold", "Total Orders"],
    datasets: [
      {
        label: "Analytics",
        data: [totalRevenue, totalItemsSold, totalOrders],
        backgroundColor: ["#4CAF50", "#FFC107", "#2196F3"],
        borderColor: ["#4CAF50", "#FFC107", "#2196F3"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Analytics</h1>

      {/* Statistics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h2 className="text-lg font-semibold">Total Revenue</h2>
          <p className="text-2xl font-bold">${totalRevenue.toFixed(2)}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h2 className="text-lg font-semibold">Total Items Sold</h2>
          <p className="text-2xl font-bold">{totalItemsSold}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-2xl font-bold">{totalOrders}</p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Analytics Visualization</h2>
        <div className="w-full h-auto">
          <Bar data={chartData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
