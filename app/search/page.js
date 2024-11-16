import { twMerge } from "tailwind-merge";

export default function BookPage() {
  return (
    <div
      className={twMerge("w-full h-full", "flex justify-center items-center")}
    >
      <h1 className="text-2xl text-black font-bold">Search Page</h1>
    </div>
  );
}
