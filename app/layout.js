"use client"; // Dibutuhkan untuk client-side interactivity
import { twMerge } from "tailwind-merge";
import localFont from "next/font/local";
import "./globals.css";

// Font Lato
const lato = localFont({
    src: [
        { path: "/fonts/Lato-Regular.woff", weight: "400", style: "normal" },
        { path: "/fonts/Lato-Medium.woff", weight: "500", style: "normal" },
        { path: "/fonts/Lato-Semibold.woff", weight: "600", style: "normal" },
        { path: "/fonts/Lato-Bold.woff", weight: "700", style: "normal" },
    ],
});

export default function RootLayout({ children }) {
    const handleSearch = (event) => {
        event.preventDefault();
        const query = event.target.search.value.trim(); // Ambil nilai input
        if (query) {
            alert(`Searching for: ${query}`); // Ganti dengan logika redirect atau API
        }
    };

    return (
        <html lang="en">
            <body className={twMerge(lato.className, "antialiased text-foreground bg-background")}>
                <div className="flex flex-col min-h-screen">
                    {/* Navbar */}
                    <nav className="bg-secondary px-8 py-4 flex justify-between items-center shadow-md">
                        {/* Nama Kelompok */}
                        <div className="text-xl font-bold text-foreground">Kelompok 10</div>

                        {/* Search Bar */}
                        <form
                            onSubmit={handleSearch}
                            className="flex items-center bg-accent rounded-full shadow-sm border border-darkerSecondary px-4 w-[30%]"
                        >
                            <input
                                type="text"
                                name="search"
                                placeholder="Search books..."
                                className="py-2 px-4 w-full text-sm text-foreground bg-accent outline-none placeholder:text-darkerSecondary rounded-full"
                            />
                            <button
                                type="submit"
                                className="text-foreground flex items-center justify-center bg-transparent rounded-full p-2 hover:bg-darkerSecondary"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-4.35-4.35m1.24-5.49a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                                    />
                                </svg>
                            </button>
                        </form>

                        {/* Links */}
                        <div className="flex items-center gap-4">
                            <a
                                href="/app/(auth)/auth/login"
                                className="text-sm font-medium text-foreground hover:underline"
                            >
                                Masuk
                            </a>
                            <a
                                href="/app/(auth)/auth/register"
                                className="text-sm font-medium text-accent bg-foreground px-4 py-2 rounded-md hover:bg-darkerSecondary"
                            >
                                Daftar
                            </a>
                        </div>
                    </nav>

                    {/* Konten Utama */}
                    <main className="flex-1 w-full">{children}</main>

                    {/* Footer */}
                    <footer className="bg-secondary text-center py-6">
                        <div className="text-sm text-foreground">
                            <p>Pengembangan Aplikasi Web</p>
                            <div className="mt-2">
                                Deren Tanaphan (22/502361/TK/54976) <br />
                                Aisa Selvira Q.A (22/498561/TK/54690) <br />
                                Moh. Nazril Ilham (22/493142/TK/54000) <br />
                                Muhammad Rafli Ramadani (22/497378/TK/54571) <br />
                                Satama Safika (22/492880/TK/53955)
                            </div>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
