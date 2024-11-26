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

export const GetBooksStatus = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/books/status`,
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const SearchBooks = async (page, limit, search) => {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    if (search.title) {
      params.append("title", search.title);
    }
    if (search.genre) {
      params.append("genre", search.genre);
    }
    if (search.language) {
      params.append("language", search.language);
    }
    if (search.author) {
      params.append("author", search.author);
    }

    const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/books/search?${params.toString()}`;

    const response = await axios.get(endpoint, { withCredentials: true });

    return response.data;
  } catch (error) {
    throw error;
  }
};
