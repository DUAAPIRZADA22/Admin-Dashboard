"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProfilePage() {
  const [ownerName, setOwnerName] = useState("Duaa");
  const [shopName, setShopName] = useState("HomeAura");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [shopLogo, setShopLogo] = useState("/default-profile.png");

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile") || "{}");
    if (savedProfile) {
      setOwnerName(savedProfile.ownerName || "Duaa");
      setShopName(savedProfile.shopName || "HomeAura");
      setEmail(savedProfile.email || "");
      setPhone(savedProfile.phone || "");
      setAddress(savedProfile.address || "");
      setShopLogo(savedProfile.shopLogo || "/default-profile.png");
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setShopLogo(imageUrl);
    }
  };

  const handleSave = () => {
    const profileData = { ownerName, shopName, email, phone, address, shopLogo };
    localStorage.setItem("profile", JSON.stringify(profileData));
    alert("Profile Saved!");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Settings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Personal Information</h3>
          <div className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Owner Name"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <input
              type="text"
              placeholder="Shop/Mart Name"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <textarea
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Shop Logo</h3>
          <div className="mt-4">
            <Image
              src={shopLogo}
              width={120}
              height={120}
              alt="Shop Logo"
              className="rounded-full border shadow-md"
            />
          </div>
          <input
            type="file"
            accept="image/*"
            className="mt-3 p-2 border rounded-lg cursor-pointer bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            onChange={handleImageUpload}
          />
        </div>
      </div>
      <button onClick={handleSave} className="mt-6 p-3 bg-pink-500 text-white rounded-lg w-full">
        Save
      </button>
    </div>
  );
}



