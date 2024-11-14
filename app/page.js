import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <div className={twMerge("w-full h-full", "flex justify-center items-center")}>
      <h1 className="font-bold text-black text-5xl">
        Main Page
      </h1>
    </div>
  );
}
