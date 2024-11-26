export const ErrorPage = ({ message }) => {
  return (
    <div
      className={`w-full min-h-screen bg-primary flex flex-col items-center justify-center`}
    >
      <h1 className={`font-semiBold text-darkerSecondary text-2xl mt-3`}>
        Error: {message}
      </h1>
    </div>
  );
};
