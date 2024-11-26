"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function BookCard({
  title,
  author,
  stock,
  imageUrl,
  bookId,
  isDashboard,
}) {
  const router = useRouter();

  const handleBookClick = () => {
    if (isDashboard) {
      router.push(`/dashboard/edit`);
    } else {
      router.push(`/book/${bookId}`);
    }
  };

  return (
    <div
      onClick={handleBookClick}
      className={twMerge(
        "flex-shrink-0",
        "min-w-72",
        "bg-white shadow-md rounded-lg p-4",
        "border border-secondary",
        isDashboard ? "" : "cursor-pointer",
        isDashboard ? "" : "hover:bg-gray-100",
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
      <div className="relative text-left">
        <p className="text-lg font-bold text-gray-800">{title}</p>
        <p className="text-sm font-semibold text-gray-600">{author}</p>
        <p className="text-sm text-gray-500">Stock: {stock}</p>
        {isDashboard && (
          <div className={twMerge("absolute bottom-0 right-0", "mt-5")}>
            <button
              type="submit"
              className={twMerge(
                "flex justify-center items-center",
                "py-1 px-3 rounded-lg border-black",
                "bg-accent hover:opacity-80",
                "font-bold text-sm text-white",
              )}
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
