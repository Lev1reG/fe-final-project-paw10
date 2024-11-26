"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const CreateBookForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [bookCover, setBookCover] = useState("/images/books.png"); // Default cover image
    const [bookData, setBookData] = useState({
        title: "",
        author: "",
        description: "",
        genre: "",
        language: "",
        publisher: "",
        year: "",
        isbn: "",
        stock: "",
        coverImageURL: ""
    });

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         setBookCover(URL.createObjectURL(file));
    //     }
    // };

    const onSubmit = (data) => {
        // console.log("Submitted Data: ", data);
        // toast.success("Book created successfully!");
    };

    return (
      <section className="w-full min-h-screen flex flex-col bg-[#F9F6EE] py-28 px-8">
        {/* Container for the form */}
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          {/* Left Card: Book Cover and Update Button */}
          <div className="w-full lg:w-1/3 bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
            <div className="relative w-full h-[400px] bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
              <Image
                src={bookCover} 
                alt="Book Cover"
                layout="fill"
                className="object-contain"
              />
            </div>
            <button
              type="button"
              className="mt-4 px-6 py-2 w-full border rounded-lg bg-[#013A63] font-bold text-white hover:bg-[#012A48]"
            >
              Add Book
            </button>
          </div>
  
          {/* Right Card: Form to Input Book Details */}
          <div className="w-full lg:w-2/3 bg-white p-6 shadow-md rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
  
              {/* Title */}
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700">Book Title</label>
                <input
                  {...register("title", { required: "Book title is required" })}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-black"
                  placeholder="Enter book title"
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
              </div>
  
              {/* Author */}
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700">Book Author</label>
                <input
                  {...register("author", { required: "Author is required" })}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-black"
                  placeholder="Enter book author"
                />
                {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>}
              </div>
  
              {/* Description */}
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700">Description</label>
                <textarea
                  {...register("description", { required: "Description is required" })}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-black"
                  placeholder="Enter book description"
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
              </div>
  
              {/* Genre */}
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700">Genre</label>
                <input
                  {...register("genre", { required: "Genre is required" })}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-black"
                  placeholder="Enter book genre"
                />
                {errors.genre && <p className="text-red-500 text-sm mt-1">{errors.genre.message}</p>}
              </div>
  
              {/* Language */}
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700">Language</label>
                <input
                  {...register("language", { required: "Language is required" })}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-black"
                  placeholder="Enter book language"
                />
                {errors.language && <p className="text-red-500 text-sm mt-1">{errors.language.message}</p>}
              </div>
  
              {/* Publisher */}
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700">Publisher</label>
                <input
                  {...register("publisher", { required: "Publisher is required" })}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-black"
                  placeholder="Enter publisher"
                />
                {errors.publisher && <p className="text-red-500 text-sm mt-1">{errors.publisher.message}</p>}
              </div>
  
              {/* Year Published */}
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700">Year Published</label>
                <input
                  {...register("year", { required: "Year is required" })}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-black"
                  placeholder="Enter year published"
                />
                {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year.message}</p>}
              </div>
  
              {/* ISBN */}
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700">ISBN</label>
                <input
                  {...register("isbn", { required: "ISBN is required" })}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-black"
                  placeholder="Enter ISBN"
                />
                {errors.isbn && <p className="text-red-500 text-sm mt-1">{errors.isbn.message}</p>}
              </div>
  
              {/* Stock */}
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700">Stock</label>
                <input
                  {...register("stock", { required: "Stock is required" })}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-black"
                  placeholder="Enter stock quantity"
                />
                {errors.stock && <p className="text-red-500 text-sm mt-1">{errors.stock.message}</p>}
              </div>
  
              {/* Cover Image URL */}
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700">Cover Image URL</label>
                <input
                  {...register("coverImageURL", { required: "Cover image URL is required" })}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-black"
                  placeholder="Enter cover image URL"
                />
                {errors.coverImageURL && <p className="text-red-500 text-sm mt-1">{errors.coverImageURL.message}</p>}
              </div>
            </form>
          </div>
        </div>
      </section>
    );
};