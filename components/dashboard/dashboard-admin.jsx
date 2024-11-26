"use client";

import { twMerge } from "tailwind-merge";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";

import Overview from "@/components/dashboard/overview";
import { GetBooksStatus, SearchBooks } from "@/db/books";
import { Loading } from "../all-pages/loading";
import { ErrorPage } from "../all-pages/error-page";
import FilterSidebar from "../FilterSidebar";
import BookCard from "../BookCard";

const DashboardAdmin = () => {
  const username = "username";

  const [libraryStats, setLibraryStats] = useState({
    totalBooks: 0,
    totalBorrowedBooks: 0,
  });

  const [booksData, setBooksData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [filters, setFilters] = useState({
    title: "",
    genre: "",
    language: "",
    available: false,
    author: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    const getBooks = async () => {
      try {
        const books = await SearchBooks(currentPage, 6, filters);
        setBooksData(books);
        setTotalPages(books.pagination.totalPages);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getBooks();
  }, [currentPage, filters]);

  useEffect(() => {
    const getLibraryStats = async () => {
      try {
        const status = await GetBooksStatus();
        setLibraryStats(status);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // TODO : Fetch user data from API
    setValue("fullName", "Joko Subianto");
    setValue("username", "xX_ThePresident_Xx");
    setValue("email", "presiden.indonesia@gmail.com");
    setValue("phoneNumber", "081420911690");

    getLibraryStats();
  }, []);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const onSubmit = (data) => {
    // TODO: Implement update user functionality
  };

  const handleSearch = (data) => {
    setFilters({
      ...filters,
      title: data.search,
    });
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage message={error.message} />;
  }

  return (
    <section
      className={twMerge(
        "w-full min-h-screen py-28",
        "flex justify-center items-center",
        "bg-primary",
      )}
    >
      <div className={twMerge("w-10/12 space-y-9", "flex flex-col")}>
        <h1 className={twMerge("text-5xl font-extrabold text-black")}>
          Hello, {username}!
        </h1>

        <div className={twMerge("w-full", "flex flex-row", "space-x-20")}>
          <div
            style={{
              boxShadow: "0px 4px 4px 2px rgba(0, 0, 0, 0.25)",
            }}
            className={twMerge(
              "flex flex-col",
              "w-[550px] p-7",
              "bg-white",
              "rounded-3xl",
              "space-y-5",
            )}
          >
            <h2 className={twMerge("text-4xl font-semibold text-black")}>
              Personal Information
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className={twMerge("space-y-3")}>
                <label
                  htmlFor="fullName"
                  className={twMerge("text-2xl font-medium text-black")}
                >
                  Full Name
                </label>
                <input
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                  id="fullName"
                  className={twMerge(
                    "w-full p-3 rounded-xl",
                    "border",
                    "bg-primary",
                    "text-2xl text-darkerSecondary",
                    errors.fullName ? "border-error" : "border-darkerSecondary",
                  )}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div className={twMerge("space-y-3")}>
                <label
                  htmlFor="username"
                  className={twMerge("text-2xl font-medium text-black")}
                >
                  Username
                </label>
                <input
                  {...register("username", {
                    required: "Username is required",
                  })}
                  id="username"
                  className={twMerge(
                    "w-full p-3 rounded-xl",
                    "border",
                    "bg-primary",
                    "text-2xl text-darkerSecondary",
                    errors.username ? "border-error" : "border-darkerSecondary",
                  )}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div className={twMerge("space-y-3")}>
                <label
                  htmlFor="email"
                  className={twMerge("text-2xl font-medium text-black")}
                >
                  Email Address
                </label>
                <input
                  {...register("email", {
                    required: "Email Address is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  id="email"
                  type="email"
                  className={twMerge(
                    "w-full p-3 rounded-xl",
                    "border border-darkerSecondary",
                    "bg-primary",
                    "text-2xl text-darkerSecondary",
                    errors.email ? "border-error" : "border-darkerSecondary",
                  )}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className={twMerge("space-y-3")}>
                <label
                  htmlFor="phoneNumber"
                  className={twMerge("text-2xl font-medium text-black")}
                >
                  Phone Number
                </label>
                <input
                  {...register("phoneNumber", {
                    required: "Phone Number is required",
                    pattern: {
                      value: /^\d{10,15}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  id="phoneNumber"
                  type="tel"
                  className={twMerge(
                    "w-full p-3 rounded-xl",
                    "border border-darkerSecondary",
                    "bg-primary",
                    "text-2xl text-darkerSecondary",
                    errors.phoneNumber
                      ? "border-error"
                      : "border-darkerSecondary",
                  )}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
              <div
                className={twMerge(
                  "flex flex-row justify-end",
                  "mt-5 space-x-4",
                )}
              >
                <button
                  type="submit"
                  className={twMerge(
                    "flex justify-center items-center",
                    "py-3 px-10 rounded-3xl border-black",
                    "bg-accent hover:opacity-80",
                    "font-bold text-lg text-white",
                  )}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
          <Overview
            TotalBooks={libraryStats.totalBooks}
            TotalBorrowedBooks={libraryStats.totalBorrowedBooks}
          />
          <div
            // TODO: IMPLEMENT ADD BOOK FUNCTIONALITY
            style={{
              boxShadow: "0px 4px 4px 2px rgba(0, 0, 0, 0.25)",
            }}
            className={twMerge(
              "flex flex-col items-center",
              "px-7 py-4 max-w-64 h-fit",
              "bg-white",
              "rounded-3xl",
            )}
          >
            <h2
              className={twMerge(
                "font-semibold text-3xl text-black text-center",
              )}
            >
              Add a New Book
            </h2>
            <FaPlus className={twMerge("text-5xl text-black")} />
          </div>
        </div>
        <div className={twMerge("flex flex-col", "space-y-5")}>
          <h2 className={twMerge("text-5xl font-extrabold text-black")}>
            Manage Books
          </h2>
          <div className={twMerge("flex flex-row justify-between", "w-full")}>
            <FilterSidebar filters={filters} setFilters={setFilters} />
            <div className={twMerge("w-1", "bg-darkerSecondary")} />

            <div className={twMerge("flex flex-col")}>
              <div className={twMerge("grid grid-cols-3 gap-6")}>
                {booksData.books.map((book) => (
                  <BookCard
                    key={book._id}
                    title={book.title}
                    author={book.author}
                    stock={book.stock}
                    imageUrl={book.imageUrl}
                    bookId={book._id}
                    isDashboard
                  />
                ))}
              </div>
              {/* Pagination Controls */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-darkerSecondary rounded hover:opacity-90 disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="text-lg font-semibold text-black">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-darkerSecondary rounded hover:opacity-90 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardAdmin;
