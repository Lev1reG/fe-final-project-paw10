"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import BookCard from "@/components/BookCard";
import FilterSidebar from "@/components/FilterSidebar";
import { Loading } from "@/components/all-pages/loading";
import { ErrorPage } from "@/components/all-pages/error-page";
import { SearchBooks } from "@/db/books";

export default function BookPage() {
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

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage message={error.message} />;
  }

  return (
    <div
      className={twMerge(
        "w-full min-h-screen flex justify-center items-center bg-[#F9F6EE] py-28 px-8",
      )}
    >
      <div className={twMerge("w-11/12 flex flex-col", "space-y-5")}>
        <h2 className={twMerge("text-5xl font-extrabold text-black")}>
          Search Books
        </h2>
        <div className={twMerge("flex flex-row justify-between", "w-full")}>
          <FilterSidebar filters={filters} setFilters={setFilters} />
          <div className={twMerge("w-1", "bg-darkerSecondary")} />

          <div className={twMerge("flex flex-col")}>
            <div className={twMerge("grid grid-cols-3 gap-6")}>
              {booksData?.books?.map((book) => (
                <BookCard
                  key={book._id}
                  title={book.title}
                  author={book.author}
                  stock={book.stock}
                  imageUrl={book.imageUrl}
                  bookId={book._id}
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
  );
}
