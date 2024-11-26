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
import { useSession } from "@/providers/session-provider";

const DashboardAdmin = () => {
  const { session } = useSession();

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

        <div className={twMerge("w-full", "flex flex-row", "space-x-20")}>
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
                {booksData?.books?.map((book) => (
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
