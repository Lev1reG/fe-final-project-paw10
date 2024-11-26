"use client";

import { GetBorrowingHistory } from "@/db/books";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { ErrorPage } from "../all-pages/error-page";
import { Loading } from "../all-pages/loading";
import BookCard from "../BookCard";

export const DashboardCustomer = () => {
  const username = "username";

  const [booksData, setBooksData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const getBooks = async () => {
    setLoading(true);
    try {
      const records = await GetBorrowingHistory(currentPage, 3);
      setBooksData(records);
      setTotalPages(records.pagination.totalPages);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooks();
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const onSubmit = (data) => {
    // TODO: Implement update user functionality
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
        <div className={twMerge("w-full", "flex flex-row justify-between")}>
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
          <div
            style={{
              boxShadow: "0px 4px 4px 2px rgba(0, 0, 0, 0.25)",
            }}
            className={twMerge(
              "flex flex-col",
              "w-[1000px] p-7",
              "bg-white",
              "rounded-3xl",
              "space-y-5",
            )}
          >
            <h2 className={twMerge("text-4xl font-semibold text-black")}>
              Borrowed Books
            </h2>
            <div className={twMerge("flex flex-col")}>
              <div className={twMerge("grid grid-cols-3 gap-6")}>
                {booksData?.records?.map((book) => (
                  <BookCard
                    key={book.book._id}
                    title={book.book.title}
                    author={book.book.author}
                    imageUrl={book.book.imageUrl}
                    borrowDate={book.borrowDate}
                    dueDate={book.dueDate}
                    bookId={book.book._id}
                    status={book.status}
                    isCustomer
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

