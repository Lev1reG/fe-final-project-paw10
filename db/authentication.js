import axios from "axios";

export const RegisterUser = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
      {
        username: data.username,
        email: data.email,
        password: data.password,
        name: data.name,
        phoneNumber: data.phoneNumber,
      },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const LoginUser = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
      {
        email: data.email,
        password: data.password,
      },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetSession = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/session`,
      { withCredentials: true }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const LogoutUser = async () => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`,
      {},
      { withCredentials: true }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
