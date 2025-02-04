import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-pink-100 overflow-hidden">
      {/* Background Bubbles */}
      <div className="absolute inset-0 flex overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-80 blur-lg animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-300 rounded-full opacity-80 blur-lg animate-bounce"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center p-6">
        <h1 className="text-8xl font-bold text-pink-700 leading-tight">
          Grow Faster,
          <br />
          Sell Smarter
        </h1>
        <p className="mt-4 text-2xl text-gray-700 max-w-2xl">
          Join the leading marketplace for furniture and elevate your business
          with our innovative selling tools.
        </p>

        {/* Dynamic Authentication Buttons */}
        <div className="flex justify-center mt-6 space-x-4">
          <SignedIn>
            <Link
              href="/dashboard"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-pink-500 to-pink-700 text-white text-xl font-bold rounded-lg hover:from-pink-600 hover:to-pink-800 transition duration-300 shadow-lg hover:shadow-2xl"
            >
              Seller Dashboard
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </SignedIn>
          <SignedOut>
            <Link
              href="https://fast-foal-29.accounts.dev/sign-in"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-pink-500 to-pink-700 text-white text-xl font-bold rounded-lg hover:from-pink-600 hover:to-pink-800 transition duration-300 shadow-lg hover:shadow-2xl"
            >
              Start Selling
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Page;



