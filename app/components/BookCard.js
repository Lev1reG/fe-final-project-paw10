import Image from "next/image";


export default function BookCard({ title, author, stock, imageUrl, bookId }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      {/* Book Cover */}
      <div className="w-full h-64 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
        {/* Image should be dynamic */}
        <Image 
        src={imageUrl || '/images/books.png'} 
        alt={title} 
        width={150}
        height={200}
        className="object-contain h-full w-full" />
      </div>

      {/* Book Info */}
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-800">{title}</p>
        <p className="text-sm text-gray-600">{author}</p>
        <p className="text-sm text-gray-500">Stock: {stock}</p>
      </div>
    </div>
  );
}