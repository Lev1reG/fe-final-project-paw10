import { twMerge } from "tailwind-merge";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/all-pages/navbar";
import Footer from "@/components/all-pages/footer";
import { ToasterProvider } from "@/providers/toast-provider";
import { SessionProvider } from "@/providers/session-provider";

// Font Lato
const lato = localFont({
  src: [
    { path: "/fonts/Lato-Regular.woff", weight: "400", style: "normal" },
    { path: "/fonts/Lato-Medium.woff", weight: "500", style: "normal" },
    { path: "/fonts/Lato-Semibold.woff", weight: "600", style: "normal" },
    { path: "/fonts/Lato-Bold.woff", weight: "700", style: "normal" },
  ],
});

export const metadata = {
  title: "PAW 10",
  description: "Library management system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={twMerge(lato.className, "antialiased overflow-x-hidden")}
      >
        <ToasterProvider />
        <SessionProvider>
          <main className={twMerge("flex flex-col", "w-[100vw]")}>
            <NavBar />
            {children}
            <Footer />
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
