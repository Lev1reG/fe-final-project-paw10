"use client"; // Menjadikan komponen ini client component

import { ErrorPage } from "@/components/all-pages/error-page";
import { Loading } from "@/components/all-pages/loading";
import { GetBookById } from "@/db/books";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function BookPage() {
  const { bookId } = useParams(); // Mengambil bookId dari parameter URL
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const book = await GetBookById(bookId);
        console.log(book);
        setBookData(book);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, []);

  if (error) {
    return <ErrorPage message={error.message} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="w-full min-h-screen flex flex-col bg-primary p-4 sm:p-8">
      {/* Kontainer Utama */}
      <div className="flex flex-grow text-black lg:flex-row flex-col py-28 gap-6">
        {/* Sisi Kiri - Cover Buku */}
        <div className="w-full lg:w-1/3 bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
          <div className="relative w-full h-[500px] bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
            <Image
              src={bookData.coverImageURL || "/images/books.png"}
              alt={bookData.title}
              fill
              className="object-contain"
            />
          </div>
          <div className="mt-4 text-center w-full">
            <p className="font-semibold text-lg">{bookData.author}</p>
            <p className="text-sm text-gray-500">{bookData.title}</p>
            <p className="mt-2 font-bold text-gray-700">
              Stock: {bookData.stock}
            </p>
            <button className="mt-4 px-6 py-2 w-full border rounded-lg bg-[#013A63] font-bold text-white hover:bg-[#012A48]">
              Borrow
            </button>
          </div>
        </div>

        {/* Sisi Kanan - Detail Buku */}
        <div className="w-full lg:w-2/3 bg-white p-6 shadow-md rounded-lg flex flex-col space-y-7">
          {/* Bagian Atas */}
          <div>
            <h1 className="text-2xl font-bold text-black">{bookData.title}</h1>
            <p className="text-sm text-gray-600 italic mb-4">
              by {bookData.author}
            </p>
            <p className="text-gray-700 mb-6">{bookData.description}</p>

            {/* Informasi Publish */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-[#F5F3E7] rounded-lg">
                <strong>Publication year:</strong> <br />
                {bookData.year}
              </div>
              <div className="p-4 bg-[#F5F3E7] rounded-lg">
                <strong>Publisher:</strong> <br />
                {bookData.publisher}
              </div>
              <div className="p-4 bg-[#F5F3E7] rounded-lg">
                <strong>Language:</strong> <br />
                {bookData.language}
              </div>
            </div>
          </div>

          {/* Bagian Tengah */}
          <div>
            <h2 className="text-lg font-semibold mb-4 mt-8 border-b-2 border-gray-300 pb-2">
              Book Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <strong>Total pages:</strong> {bookData.pages}
              </div>
              <div>
                <strong>Genres:</strong> {bookData.genres.join(", ")}
              </div>
            </div>
          </div>

          {/* Bagian Bawah */}
          <div>
            <h2 className="text-lg font-semibold mb-4 mt-8 border-b-2 border-gray-300 pb-2">
              ID Numbers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <strong>ISBN:</strong> {bookData.isbn}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
