"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sun, Moon, LayoutDashboard, Package, ShoppingCart, BarChart, 
  Bell, Search, ChevronDown, User, LogOut
} from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("Duaa");
  const [shopName, setShopName] = useState("HomeAura");
  const [profilePic, setProfilePic] = useState("/logo.png");

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen flex`}>
      {/* Sidebar */}
      <div className={`w-64 p-5 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md min-h-screen`}>
        <h2 className="text-2xl font-bold mb-6 text-center">Seller Dashboard</h2>
        
        <nav className="space-y-4">
          <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-300 transition">
            <LayoutDashboard /> Dashboard
          </Link>
          <Link href="/dashboard/products" className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-300 transition">
            <Package /> Products
          </Link>
          <Link href="/dashboard/orders" className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-300 transition">
            <ShoppingCart /> Orders
          </Link>
          <Link href="/dashboard/sales" className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-300 transition">
            <BarChart /> Sales Reports
          </Link>
          <Link href="/dashboard/profile" className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-300 dark:hover:bg-gray-700 dark:text-white transition">
            <User /> My Profile
          </Link>
          <button className="flex items-center gap-3 p-3 w-full text-left hover:bg-pink-300 dark:hover:bg-gray-700 dark:text-white rounded-md">
            <LogOut /> Logout
          </button>
        </nav>
      </div>

      <div className="flex-1 flex flex-col">
        {/* Headbar */}
        <div className={`p-1 flex items-center justify-between ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md`}> 
          {/* Search Bar */}
          <div className="relative w-1/3">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full px-4 py-2 rounded-lg border focus:outline-none dark:bg-gray-700 dark:text-white"
            />
            <Search className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-300" />
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            {/* Night Mode Toggle */}
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? <Sun className="h-6 w-6 text-yellow-400" /> : <Moon className="h-6 w-6 text-gray-600" />}
            </button>
            
            {/* Notification Bell */}
            <Bell className="h-6 w-6 cursor-pointer text-gray-600 dark:text-gray-300 hover:text-pink-500" />
            
            {/* Profile Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                <Image src={profilePic} width={40} height={40} alt="Profile Pic" className="rounded-full" />
                <div className="text-lg font-semibold">
                  {userName} <br />
                  <span className="text-sm text-gray-500 dark:text-gray-300">{shopName}</span>
                </div>
                <ChevronDown className="text-gray-500 dark:text-gray-300" />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-black shadow-lg rounded-lg p-2">
                  <Link href="/dashboard/profile" className="flex items-center gap-3 p-2 rounded-md hover:bg-pink-300 dark:hover:bg-gray-700 dark:text-white">
                    <User className="h-5 w-5 text-gray-900 dark:text-white" /> My Profile
                  </Link>
                  <button className="flex items-center gap-3 p-2 w-full text-left rounded-md hover:bg-pink-300 dark:hover:bg-gray-700 dark:text-white">
                    <LogOut className="h-5 w-5 text-gray-900 dark:text-white" /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}



