import { twMerge } from "tailwind-merge";

export default function RegisterAccount() {
  return (
    <div
      className={twMerge("w-full h-full", "flex justify-center items-center")}
    >
      <h1 className="font-bold text-black text-5xl">Register</h1>
    </div>
  );
}
