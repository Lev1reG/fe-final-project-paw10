import Link from 'next/link'; // Import Link component for navigation
import { twMerge } from 'tailwind-merge';

export const NotFound = () => {
    return (
        <div className={twMerge('w-full min-h-screen bg-[#F9F6EE] flex flex-col items-center justify-center')}>
            {/* Big ":(" Icon */}
        <div className="text-9xl mb-20 text-gray-800">:(</div>

        {/* 404 Message */}
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-12">Sorry, the page you’re looking for is not found</p>

        {/* Back to Home Page Button */}
        <Link href="/" className="px-6 py-3 bg-[#102C57] text-white rounded-lg hover:bg-blue-700 transition duration-300">
            ← Back to Home Page
        </Link>
    </div>
    )
}