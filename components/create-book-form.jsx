"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const CreateBookForm = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [coverImageUrl, setCoverImageUrl] = useState('');

    const onSubmit = async (data) => {
        try {
            // Your API call to save the book can go here
            // For example, you might use a function like CreateBook(data)
        
            // Display success message
            toast.success("Book added successfully!");
        
            // Redirect to another page (for example, the dashboard or book list page)
            router.push("/dashboard");
        } catch (error) {
            toast.error("An error occurred while adding the book");
        }
      };

    return (
        <div className="w-screen min-h-screen flex items-center justify-center p-28 bg-[#F5EFEA]">
        <div className="w-full max-w-4xl h-full flex flex-col lg:flex-row bg-white shadow-lg rounded-lg">
            {/* Left Section - Book Cover Image */}
            <div className="flex-1 hidden lg:flex items-center justify-center bg-[#F5EFEA] p-4">
                <Image
                    src={coverImageUrl || "/images/books.png"} // Default image if no URL provided
                    alt="Book Cover"
                    width={400}
                    height={400}
                    className="object-contain"
                />
            </div>

            {/* Right Section - Book Creation Form */}
            <div className="flex-1 flex flex-col justify-center bg-[#EADBC8] p-6 sm:p-8 lg:p-16">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-gray-800 text-center">
                    Add New Book
                </h1>
                <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    {/* Book Title Field */}
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm sm:text-base font-medium text-gray-700">
                            Book Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            {...register("title", { required: "Book title is required" })}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                            placeholder="Enter the book title"
                        />
                        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                    </div>

                    {/* Book Author Field */}
                    <div className="mb-4">
                        <label htmlFor="author" className="block text-sm sm:text-base font-medium text-gray-700">
                            Book Author
                        </label>
                        <input
                            type="text"
                            id="author"
                            {...register("author", { required: "Author name is required" })}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                            placeholder="Enter the book author"
                        />
                        {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>}
                    </div>

                    {/* Description Field */}
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm sm:text-base font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="description"
                            {...register("description", { required: "Description is required" })}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                            placeholder="Enter the book description"
                        />
                        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
                    </div>

                    {/* Genre Field */}
                    <div className="mb-4">
                        <label htmlFor="genre" className="block text-sm sm:text-base font-medium text-gray-700">
                            Genre
                        </label>
                        <input
                            type="text"
                            id="genre"
                            {...register("genre", { required: "Genre is required" })}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                            placeholder="Enter the book genre"
                        />
                        {errors.genre && <p className="text-red-500 text-sm mt-1">{errors.genre.message}</p>}
                    </div>

                    {/* Language Field */}
                    <div className="mb-4">
                        <label htmlFor="language" className="block text-sm sm:text-base font-medium text-gray-700">
                            Language
                        </label>
                        <input
                            type="text"
                            id="language"
                            {...register("language", { required: "Language is required" })}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                            placeholder="Enter the book language"
                        />
                        {errors.language && <p className="text-red-500 text-sm mt-1">{errors.language.message}</p>}
                    </div>

                    {/* Publisher Field */}
                    <div className="mb-4">
                        <label htmlFor="publisher" className="block text-sm sm:text-base font-medium text-gray-700">
                            Publisher
                        </label>
                        <input
                            type="text"
                            id="publisher"
                            {...register("publisher", { required: "Publisher is required" })}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                            placeholder="Enter the publisher"
                        />
                        {errors.publisher && <p className="text-red-500 text-sm mt-1">{errors.publisher.message}</p>}
                    </div>

                    {/* Year Published Field */}
                    <div className="mb-4">
                        <label htmlFor="yearPublished" className="block text-sm sm:text-base font-medium text-gray-700">
                            Year Published
                        </label>
                        <input
                            type="number"
                            id="yearPublished"
                            {...register("yearPublished", { required: "Year published is required" })}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                            placeholder="Enter the year when the book was published"
                        />
                        {errors.yearPublished && <p className="text-red-500 text-sm mt-1">{errors.yearPublished.message}</p>}
                    </div>

                    {/* ISBN Field */}
                    <div className="mb-4">
                        <label htmlFor="isbn" className="block text-sm sm:text-base font-medium text-gray-700">
                            ISBN
                        </label>
                        <input
                            type="text"
                            id="isbn"
                            {...register("isbn", { required: "ISBN is required" })}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                            placeholder="Enter the ISBN"
                        />
                        {errors.isbn && <p className="text-red-500 text-sm mt-1">{errors.isbn.message}</p>}
                    </div>

                    {/* Stock Field */}
                    <div className="mb-4">
                        <label htmlFor="stock" className="block text-sm sm:text-base font-medium text-gray-700">
                            Stock
                        </label>
                        <input
                            type="number"
                            id="stock"
                            {...register("stock", { required: "Stock is required" })}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                            placeholder="Enter the stock quantity"
                        />
                        {errors.stock && <p className="text-red-500 text-sm mt-1">{errors.stock.message}</p>}
                    </div>

                    {/* Cover Image URL Field */}
                    <div className="mb-4">
                        <label htmlFor="coverImageUrl" className="block text-sm sm:text-base font-medium text-gray-700">
                            Cover Image URL
                        </label>
                        <input
                            type="text"
                            id="coverImageUrl"
                            {...register("coverImageUrl", { required: "Cover image URL is required" })}
                            className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                            placeholder="Enter the book's cover image URL"
                            onChange={(e) => setCoverImageUrl(e.target.value)} // Update the cover image URL dynamically
                        />
                        {errors.coverImageUrl && <p className="text-red-500 text-sm mt-1">{errors.coverImageUrl.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#102C57] text-white py-3 rounded-md hover:bg-blue-700 transition"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    </div>
    );
};