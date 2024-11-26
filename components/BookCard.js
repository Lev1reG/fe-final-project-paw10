"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function BookCard({ title, author, stock, imageUrl, bookId }) {
  const router = useRouter();

  const handleBookClick = () => {
    router.push(`/book/${bookId}`);
  };

  return (
    <div
      onClick={handleBookClick}
      className={twMerge(
        "flex-shrink-0",
        "min-w-72",
        "bg-white shadow-md rounded-lg p-4",
        "border border-secondary",
        "cursor-pointer",
        "hover:bg-gray-100",
      )}
    >
      {/* Book Cover */}
      <div className="w-full h-64 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
        {/* Image should be dynamic */}
        <Image
          src={imageUrl || "/images/books.png"}
          alt={title}
          width={150}
          height={200}
          className="object-contain h-full w-full"
        />
      </div>

      {/* Book Info */}
      <div className="text-center">
        <p className="text-lg font-bold text-gray-800">{title}</p>
        <p className="text-sm font-semibold text-gray-600">{author}</p>
        <p className="text-sm text-gray-500">Stock: {stock}</p>
      </div>
    </div>
  );
}
