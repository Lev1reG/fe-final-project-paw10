export async function GET(req, { params }) {
    const { bookId } = params;

    // Contoh data mockup (Anda bisa mengganti ini dengan query database)
    const books = [
        {
            id: '1',
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            description: 'A classic novel of the Jazz Age.',
            publishDate: '1925',
            publisher: 'Scribner',
            language: 'English',
            subject: 'Fiction',
            editionNotes: '1st Edition',
            country: 'United States',
            format: 'Hardcover',
            numberOfPages: 218,
            openLibraryID: 'OL1234567M',
            internetArchiveID: 'greatgatsby1925',
            isbn10: '0743273567',
            isbn13: '9780743273565',
            coverImageURL: 'C:\final-project-paw\public\images\coverBook.png',
            stock: 5,
        },
        {
            id: '2',
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            description: 'A novel about racial injustice in the Deep South.',
            publishDate: '1960',
            publisher: 'J.B. Lippincott & Co.',
            language: 'English',
            subject: 'Fiction',
            editionNotes: '1st Edition',
            country: 'United States',
            format: 'Paperback',
            numberOfPages: 281,
            openLibraryID: 'OL7654321M',
            internetArchiveID: 'tokillamockingbird1960',
            isbn10: '0061120081',
            isbn13: '9780061120084',
            coverImageURL: 'C:\final-project-paw\public\images\coverBook.png',
            stock: 3,
        },
    ];

    // Cari buku berdasarkan ID
    const book = books.find(b => b.id === bookId);

    if (!book) {
        return new Response(JSON.stringify({ error: 'Book not found' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    return new Response(JSON.stringify(book), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}
