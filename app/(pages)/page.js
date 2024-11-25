import { twMerge } from 'tailwind-merge';
import BookCard from '../components/BookCard';

export default function Home() {
  // Sample data for recommended and newest books (replace with actual data)
  const recommendedBooks = [
    { title: 'Book Title 1', author: 'Author 1', stock: 10, imageUrl: '/images/book1.jpg' },
    { title: 'Book Title 2', author: 'Author 2', stock: 5, imageUrl: '/images/book2.jpg' },
    { title: 'Book Title 3', author: 'Author 3', stock: 3, imageUrl: '/images/book3.jpg' },
    { title: 'Book Title 4', author: 'Author 4', stock: 8, imageUrl: '/images/book4.jpg' },
    { title: 'Book Title 5', author: 'Author 5', stock: 6, imageUrl: '/images/book5.jpg' },
    { title: 'Book Title 6', author: 'Author 6', stock: 7, imageUrl: '/images/book6.jpg' },
  ];

  const newestBooks = [
    { title: 'New Book Title 1', author: 'Author 5', stock: 12, imageUrl: '/images/book5.jpg' },
    { title: 'New Book Title 2', author: 'Author 6', stock: 6, imageUrl: '/images/book6.jpg' },
    { title: 'New Book Title 3', author: 'Author 7', stock: 7, imageUrl: '/images/book7.jpg' },
    { title: 'New Book Title 4', author: 'Author 8', stock: 9, imageUrl: '/images/book8.jpg' },
  ];

  return (
    <div className={twMerge('w-full h-full', 'flex flex-col items-center')}>
      {/* Recommended Books Section */}
      <div className="w-full p-8 bg-[#F9F6EE]">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recommended Books</h2>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto gap-6 pb-4">
          {recommendedBooks.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              stock={book.stock}
              imageUrl={book.imageUrl}
            />
          ))}
        </div>
      </div>

      {/* Newest Books Section */}
      <div className="w-full p-8 bg-[#F9F6EE]">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Newest Books</h2>
        <div className="flex overflow-x-auto gap-6 pb-4">
          {newestBooks.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              stock={book.stock}
              imageUrl={book.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
