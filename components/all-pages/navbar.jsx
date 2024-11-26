"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

const NavBar = () => {
    const { register, handleSubmit } = useForm();

    const handleSearch = (data) => {
        console.log(data);
        // You can add your search logic here
    };

    return (
        <>
            {/* Navbar */}
            <nav className="fixed w-full bg-secondary px-8 py-3 flex justify-between items-center shadow-md">
                {/* Logo Gambar */}
                <Link href="/" passHref>
                    <img
                        src="/images/paw.png" // Path gambar logo
                        alt="Kelompok 10 Logo"
                        className="cursor-pointer h-10 w-auto" // Ukuran logo disesuaikan dengan navbar
                    />
                </Link>

                {/* Search Bar */}
                <form
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
                </form>

                {/* Links */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/auth/login"
                        className="text-sm font-medium text-foreground hover:underline"
                    >
                        Masuk
                    </Link>
                    <Link
                        href="/auth/register"
                        className="text-sm font-medium text-accent bg-foreground px-4 py-2 rounded-md hover:bg-darkerSecondary"
                    >
                        Daftar
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default NavBar;