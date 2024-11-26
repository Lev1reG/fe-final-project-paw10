import { twMerge } from "tailwind-merge";

const Overview = ({ TotalBooks, TotalBorrowedBooks }) => {
  return (
    <>
      <div
        style={{
          boxShadow: "0px 4px 4px 2px rgba(0, 0, 0, 0.25)",
        }}
        className={twMerge(
          "flex flex-col h-fit",
          "px-7 py-4 space-y-5",
          "bg-white",
          "rounded-3xl",
        )}
      >
        <h2 className={twMerge("font-semibold text-3xl text-black")}>
          Overview
        </h2>
        <p className={twMerge("font-medium text-2xl text-black")}>
          Total Books: {TotalBooks}
        </p>
        <p className={twMerge("font-medium text-2xl text-black")}>
          Total Borrowed Books: {TotalBorrowedBooks}
        </p>
      </div>
    </>
  );
};

export default Overview;
