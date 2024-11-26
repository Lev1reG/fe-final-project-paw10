"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

const NavBar = () => {
    const { register, handleSubmit } = useForm();

    // Temporary variable for login state
    const isLogin = true; // Change this value to test the behavior

    const handleSearch = (data) => {
        console.log(data);
        // You can add your search logic here
    };

    return (
        <>
            {/* Navbar */}
            <nav className="fixed z-20 w-full bg-secondary px-8 py-3 flex justify-between items-center shadow-md">
              <div className="flex flex-row items-center gap-4">
                {/* Logo Gambar */}
                <Link href="/" passHref>
                    <img
                        src="/images/paw.png" // Path gambar logo
                        alt="Kelompok 10 Logo"
                        className="cursor-pointer h-10 w-auto" // Ukuran logo disesuaikan dengan navbar
                    />
                </Link>
                <Link
                  href="/search"
                  className="text-sm font-bold text-black bg-white px-4 py-2 rounded-md border border-black hover:bg-gray-200"
                >
                  Search for books
                </Link>
              </div>
              
              <div className="text-4xl font-bold text-accent">
                PAW Kelompok 10
              </div>
                {/* Search Bar */}
                {/* <form
                    onSubmit={handleSubmit(handleSearch)}
                    className="flex items-center rounded-full shadow-sm border border-darkerSecondary w-[30%]"
                >
                    <input
                        type="text"
                        {...register("search")}
                        placeholder="Search books..."
                        className="py-2 px-4 w-full text-sm text-darkerSecondary bg-white outline-none placeholder:text-secondary rounded-full"
                    />
                    <button
                        type="submit"
                        className="text-foreground flex items-center justify-center bg-transparent rounded-full p-2 hover:bg-darkerSecondary"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-4.35-4.35m1.24-5.49a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                            />
                        </svg>
                    </button>
                </form> */}

                {/* Links */}
                <div className="flex flex-row items-center gap-4">
                  {isLogin ? (
                          <>
                          <Link
                          href="/dashboard"
                          className="text-sm font-semibold text-white bg-accent px-4 py-2 rounded-md hover:opacity-80"
                          >
                              Dashboard
                          </Link>
                          <Link
                          href="/auth/login"
                          className="text-sm font-semibold text-error bg-white px-4 py-2 rounded-md border border-error hover:bg-gray-200"
                          >
                              Log Out
                          </Link>
                          </>              
                      ) : (
                          <>
                            <Link
                                href="/auth/login"
                                className="text-sm font-semibold text-black bg-white px-4 py-2 rounded-md border border-black hover:bg-gray-200"
                            >
                                Masuk
                            </Link>
                            <Link
                                href="/auth/register"
                                className="text-sm font-semibold text-white bg-accent px-4 py-2 rounded-md hover:opacity-80"
                            >
                                Daftar
                            </Link>
                          </>
                      )}
                </div>
            </nav>
        </>
    );
};

export default NavBar;