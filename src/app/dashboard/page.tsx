import React from "react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-pink-600">Welcome to Seller Dashboard</h1>
      <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
        Manage your store, products, and sales with ease.
      </p>

      {/* Quick Links */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/dashboard/products" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-pink-600">Products</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Manage your products here.</p>
        </Link>
        
        <Link href="/dashboard/orders" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-pink-600">Orders</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">View and track customer orders.</p>
        </Link>

        <Link href="/dashboard/sales" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-pink-600">Sales Reports</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Track your sales performance.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;



