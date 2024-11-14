import { twMerge } from "tailwind-merge";
import "./globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "PAW 10",
  description: "Library management system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={twMerge(lato.className, "antialiased")}>
        <main className={twMerge("w-[100vw] h-[100vh]", "bg-primary")}>
          {children}
        </main>
      </body>
    </html>
  );
}
