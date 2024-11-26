'use client';

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import FilterSidebar from "@/components/FilterSidebar";
import BookCard from "@/components/BookCard";

export default function BookPage() {
  // Initialize filters state
  const [filters, setFilters] = useState({
    genre: 'all',  // Default value
    language: 'all', // Default value
    onlyAvailable: false, // Default value
  });

  // Sample data for books (replace with actual data)
  const dummyBooks = [
    { title: 'Book Title 1', author: 'Author 1', stock: 10, imageUrl: '/images/book1.jpg' },
    { title: 'Book Title 2', author: 'Author 2', stock: 5, imageUrl: '/images/book2.jpg' },
    { title: 'Book Title 3', author: 'Author 3', stock: 3, imageUrl: '/images/book3.jpg' },
    { title: 'Book Title 4', author: 'Author 4', stock: 8, imageUrl: '/images/book4.jpg' },
    { title: 'Book Title 5', author: 'Author 5', stock: 6, imageUrl: '/images/book5.jpg' },
    { title: 'Book Title 6', author: 'Author 6', stock: 7, imageUrl: '/images/book6.jpg' },
  ];

  return (  
    <div className={twMerge("w-full min-h-screen bg-[#F9F6EE] p-8")}> {/* Set the background color and padding */}
      <div className="flex flex-row gap-8 justify-between">
        {/* Left side: Filters */}
        <div className="w-full sm:w-1/4 mb-8">
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>

        {/* Right side: Results */}
        <div className="w-full sm:w-3/4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Results for: Ini Judul</h2>

          {/* Display Book Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dummyBooks.map((book, index) => (
              <div className="w-[260px]">
              <BookCard
                key={index}
                title={book.title}
                author={book.author}
                stock={book.stock}
                imageUrl={book.imageUrl}
              />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    // <div
    //   className={twMerge("w-full h-full", "flex justify-center items-center")}
    // >
    //   <h1 className="text-2xl text-black font-bold">Search Page</h1>
    // </div>
  );
}
