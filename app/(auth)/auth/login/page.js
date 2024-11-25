'use client'; // Tambahkan ini jika menggunakan App Directory

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [passwordVisible, setPasswordVisible] = useState(false); // State untuk kontrol visibilitas password

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle password visibility
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#F3EDE7]">
      {/* Container */}
      <div className="w-full max-w-6xl h-full lg:h-auto flex flex-col lg:flex-row bg-[#F3EDE7] shadow-lg">
        {/* Left Section - Image */}
        <div className="flex-1 flex items-center justify-center bg-[#F3EDE7] p-4 lg:p-0">
          <Image
            src="/images/books.png" // Path ke gambar
            alt="Books Illustration"
            width={500}
            height={500}
            className="object-contain max-w-full h-auto"
          />
        </div>

        {/* Right Section - Login Form */}
        <div className="flex-1 flex flex-col justify-center bg-[#EADBC8] p-6 sm:p-8 lg:p-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-gray-800 text-center">
            Log In
          </h1>
          <form className="w-full max-w-lg mx-auto">
            {/* Username Field */}
            <div className="mb-4 sm:mb-6">
              <label
                htmlFor="username"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Username or email address
              </label>
              <input
                type="text"
                id="username"
                className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                placeholder="Enter your username"
              />
            </div>

            {/* Password Field */}
            <div className="mb-4 sm:mb-6">
              <label
                htmlFor="password"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Your Password
              </label>
              <div className="relative">
                <input
                  type={passwordVisible ? 'text' : 'password'} // Dinamis visibilitas
                  id="password"
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility} // Fungsi toggle
                  className="absolute right-4 top-3 text-black-400"
                >
                  <Image
                    src={passwordVisible ? '/images/pw1.png' : '/images/pw.png'} // Kondisional gambar
                    alt={passwordVisible ? 'Hide password' : 'Show password'}
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#102C57] text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Log In
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 text-center text-sm text-black">
            <a href="#" className="underline">
              Forgot your password?
            </a>
          </div>
          <div className="mt-2 text-center text-sm text-black">
            Don’t have an account?{' '}
            <a href="#" className="underline font-medium">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
