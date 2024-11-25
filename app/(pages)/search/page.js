'use client';

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import FilterSidebar from "@/app/components/FilterSidebar";
import BookCard from "@/app/components/BookCard";

export default function BookPage() {
  // Initialize filters state
  const [filters, setFilters] = useState({
    genre: 'all',  // Default value
    language: 'all', // Default value
    onlyAvailable: false, // Default value
  });

  return (
    <div className={twMerge("w-full min-h-screen bg-[#F9F6EE] p-8")}> {/* Set the background color and padding */}
      <div className="flex flex-row gap-8">
        {/* Left side: Filters */}
        <div className="w-full sm:w-1/4 mb-8">
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>

        {/* Right side: Results */}
        <div className="w-full sm:w-3/4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Results for: Ini Judul</h2>

          {/* Display Book Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <BookCard
              title="Book Title 1"
              author="Author 1"
              stock={10}
              imageUrl="/images/book1.jpg"
            />
            <BookCard
              title="Book Title 2"
              author="Author 2"
              stock={5}
              imageUrl="/images/book2.jpg"
            />
            {/* Add more BookCard components here */}
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
