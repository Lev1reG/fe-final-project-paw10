"use client";

import { GetBorrowingHistory } from "@/db/books";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { ErrorPage } from "../all-pages/error-page";
import { Loading } from "../all-pages/loading";
import BookCard from "../BookCard";
import { useSession } from "@/providers/session-provider";

export const DashboardCustomer = () => {
  const { session } = useSession();

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

  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      try {
        const records = await GetBorrowingHistory(currentPage, 4);
        setBooksData(records);
        setTotalPages(records.pagination.totalPages);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

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

  const username = session.user.name;

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
        <div
          style={{
            boxShadow: "0px 4px 4px 2px rgba(0, 0, 0, 0.25)",
          }}
          className={twMerge(
            "flex flex-col",
            "w-full p-7",
            "bg-white",
            "rounded-3xl",
            "space-y-5",
          )}
        >
          <h2 className={twMerge("text-4xl font-semibold text-black")}>
            Borrowed Books
          </h2>
          <div className={twMerge("flex flex-col")}>
            <div className={twMerge("grid grid-cols-4 gap-6")}>
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
    </section>
  );
};
