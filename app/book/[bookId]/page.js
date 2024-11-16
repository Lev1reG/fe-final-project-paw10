import { twMerge } from "tailwind-merge";

export default async function BookPage({ params }) {
  const bookId = (await params).bookId;

  return (
    <div
      className={twMerge("w-full h-full", "flex justify-center items-center")}
    >
      <h1 className="text-2xl text-black font-bold">{bookId}</h1>
    </div>
  );
}
