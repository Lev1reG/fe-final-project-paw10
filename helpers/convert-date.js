export const ConvertDate = (isoDate) => {
  const date = new Date(isoDate);

  // Extract day, month, and year
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = date.getFullYear();

  // Format to dd/mm/yyyy
  return `${day}/${month}/${year}`;
};
