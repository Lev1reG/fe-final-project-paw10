import axios from "axios";

export const GetNewestBooks = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/books/newest`,
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetRecommendedBooks = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/books/popular`,
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetBookById = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/books/${id}`,
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
