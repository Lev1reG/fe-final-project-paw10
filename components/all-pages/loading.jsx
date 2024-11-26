export const Loading = () => {
  return (
    <div
      className={`w-full min-h-screen bg-primary flex flex-col items-center justify-center`}
    >
      <div
        className={`h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-darkerSecondary`}
      ></div>
      <p className={`font-semiBold text-darkerSecondary text-2xl mt-3`}>
        Loading...
      </p>
    </div>
  );
};
