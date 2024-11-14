import { twMerge } from "tailwind-merge";
import localFont from "next/font/local";
import "./globals.css";

const lato = localFont({
  src: [
    {
      path: "/fonts/Lato-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Lato-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/Lato-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/Lato-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
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
