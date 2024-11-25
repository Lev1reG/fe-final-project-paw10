"use client"; // Menjadikan komponen ini client component

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function BookPage() {
    const { bookId } = useParams(); // Mengambil bookId dari parameter URL
    const [bookData, setBookData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (bookId) {
            // Mengambil data buku berdasarkan ID
            fetch(`/api/books/${bookId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Book not found');
                    }
                    return response.json();
                })
                .then(data => setBookData(data))
                .catch(err => setError(err.message));
        }
    }, [bookId]);

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    if (!bookData) {
        return <div>Loading...</div>; // Menampilkan loading sementara data diambil
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#F9F6EE] p-4 sm:p-8 font-sans">
            {/* Kontainer Utama */}
            <div className="flex flex-grow lg:flex-row flex-col gap-6">
                {/* Sisi Kiri - Cover Buku */}
                <div className="w-full lg:w-1/3 bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
                    <div className="w-full h-[500px] bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
                        <span className="text-gray-500">coverImageURL</span>
                    </div>
                    <div className="mt-4 text-center w-full">
                        <p className="font-semibold text-lg">{bookData.author}</p>
                        <p className="text-sm text-gray-500">{bookData.title}</p>
                        <p className="mt-2 text-gray-700">Stock: {bookData.stock}</p>
                        <button className="mt-4 px-6 py-2 w-full border rounded-lg bg-[#013A63] text-white hover:bg-[#012A48]">
                            Borrow
                        </button>
                    </div>
                </div>

                {/* Sisi Kanan - Detail Buku */}
                <div className="w-full lg:w-2/3 bg-white p-6 shadow-md rounded-lg flex flex-col justify-between">
                    {/* Bagian Atas */}
                    <div>
                        <h1 className="text-2xl font-bold text-[#013A63]">{bookData.title}</h1>
                        <p className="text-sm text-gray-600 italic mb-4">by {bookData.author}</p>
                        <p className="text-gray-700 mb-6">{bookData.description}</p>

                        {/* Informasi Publish */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                            <div className="p-4 bg-[#F5F3E7] rounded-lg">
                                <strong>Publish Date:</strong> <br />
                                {bookData.publishDate}
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
                        <h2 className="text-lg font-semibold mb-4 mt-8 border-b-2 border-gray-300 pb-2">Book Details</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <strong>Edition Notes:</strong> {bookData.editionNotes}
                            </div>
                            <div>
                                <strong>Published in:</strong> {bookData.country}
                            </div>
                            <div>
                                <strong>Series:</strong> {bookData.series || 'N/A'}
                            </div>
                            <div>
                                <strong>Subject:</strong> {bookData.subject || 'Not Specified'}
                            </div>
                        </div>
                    </div>

                    {/* Bagian Bawah */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4 mt-8 border-b-2 border-gray-300 pb-2">The Physical Object</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <strong>Format:</strong> {bookData.format}
                            </div>
                            <div>
                                <strong>Number of Pages:</strong> {bookData.numberOfPages}
                            </div>
                        </div>

                        <h2 className="text-lg font-semibold mb-4 mt-8 border-b-2 border-gray-300 pb-2">ID Numbers</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <strong>Open Library ID:</strong> {bookData.openLibraryID}
                            </div>
                            <div>
                                <strong>Internet Archive ID:</strong> {bookData.internetArchiveID}
                            </div>
                            <div>
                                <strong>ISBN-10:</strong> {bookData.isbn10}
                            </div>
                            <div>
                                <strong>ISBN-13:</strong> {bookData.isbn13}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
