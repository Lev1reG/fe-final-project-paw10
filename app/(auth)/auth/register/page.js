'use client'; // Tambahkan ini jika menggunakan App Directory

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#F5EFEA]">
      {/* Container */}
      <div className="w-full max-w-4xl h-full lg:h-auto flex flex-col lg:flex-row bg-white shadow-lg rounded-lg">
        {/* Left Section - Image */}
        <div className="flex-1 hidden lg:flex items-center justify-center bg-[#F5EFEA] p-4">
          <Image
            src="/images/books.png" // Path ke gambar
            alt="Books Illustration"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Right Section - Sign Up Form */}
        <div className="flex-1 flex flex-col justify-center bg-[#EADBC8] p-6 sm:p-8 lg:p-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-gray-800 text-center">
            Sign Up
          </h1>
          <form className="w-full max-w-lg mx-auto">
            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone Field */}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                placeholder="Enter your phone"
              />
            </div>

            {/* Username Field */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                placeholder="Enter your username"
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={passwordVisible1 ? 'text' : 'password'}
                  id="password"
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility1}
                  className="absolute right-4 top-3"
                >
                  <Image
                    src={passwordVisible1 ? '/images/pw1.png' : '/images/pw.png'}
                    alt={passwordVisible1 ? 'Hide password' : 'Show password'}
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="mb-4">
              <label
                htmlFor="confirm-password"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={passwordVisible2 ? 'text' : 'password'}
                  id="confirm-password"
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility2}
                  className="absolute right-4 top-3"
                >
                  <Image
                    src={passwordVisible2 ? '/images/pw1.png' : '/images/pw.png'}
                    alt={passwordVisible2 ? 'Hide password' : 'Show password'}
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-[#102C57] text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
