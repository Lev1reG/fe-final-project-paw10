import axios from 'axios';

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
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    throw error; 
  }
}
