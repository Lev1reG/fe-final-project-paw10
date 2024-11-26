"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-hot-toast";
import { LoginUser } from "@/db/authentication";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [passwordVisible, setPasswordVisible] = useState(false); // State untuk kontrol visibilitas password
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle password visibility
  };

  const onSubmit = async (data) => {
    try {
      await toast.promise(LoginUser(data), {
        loading: "Signing In...",
        success: "Sign in success",
        error: (err) => {
          if (err.response && err.response.data && err.response.data.message) {
            return `Error: ${err.response.data.message}`;
          } else {
            return `Error: ${err.message}`;
          }
        },
      });

      router.push("/dashboard");
    } catch (err) {
      // Additional error handling if needed
    }
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
          <form
            className="w-full max-w-lg mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Username Field */}
            <div className="mb-4 sm:mb-6">
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Email address
              </label>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    id="email"
                    className={`mt-2 block w-full p-3 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black`}
                    placeholder="Enter your email"
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
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
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Password is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type={passwordVisible ? "text" : "password"} // Dinamis visibilitas
                      id="password"
                      className={`mt-2 block w-full p-3 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black`}
                      placeholder="Enter your password"
                    />
                  )}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility} // Fungsi toggle
                  className="absolute right-4 top-3 text-black-400"
                >
                  <Image
                    src={passwordVisible ? "/images/pw1.png" : "/images/pw.png"} // Kondisional gambar
                    alt={passwordVisible ? "Hide password" : "Show password"}
                    width={24}
                    height={24}
                  />
                </button>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
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
          <div className="mt-2 text-center text-sm text-black">
            <a href="/auth/signup" className="underline font-medium">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
