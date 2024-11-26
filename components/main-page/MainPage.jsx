"use client";

import BookCard from "@/components/BookCard";
import { GetNewestBooks, GetRecommendedBooks } from "@/db/books";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Loading } from "../all-pages/loading";
import { ErrorPage } from "../all-pages/error-page";

export const MainPage = () => {
  const [newestBooks, setNewestBooks] = useState([]);
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewestBooks = async () => {
      try {
        const books = await GetNewestBooks();
        setNewestBooks(books);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    const fetchRecommendedBooks = async () => {
      try {
        const books = await GetRecommendedBooks();
        setRecommendedBooks(books);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendedBooks();
    fetchNewestBooks();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage message={error.message} />;
  }

  return (
    <div
      className={twMerge(
        "w-full min-h-screen py-28",
        "flex flex-col items-center",
        "bg-primary",
      )}
    >
      {/* Recommended Books Section */}
      <div className="w-full p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Recommended Books
        </h2>

        {/* Horizontal Scroll Container */}
        <div className="flex w-full overflow-x-auto gap-6 pb-4">
          {recommendedBooks.map((book) => (
            <BookCard
              key={book.book._id}
              title={book.book.title}
              author={book.book.author}
              stock={book.book.stock}
              imageUrl={book.book.imageUrl}
              bookId={book.book._id}
            />
          ))}
        </div>
      </div>

      {/* Newest Books Section */}
      <div className="w-full p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Newest Books</h2>
        <div className="flex overflow-x-auto gap-6 pb-4">
          {newestBooks.map((book) => (
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
      </div>
    </div>
  );
};
