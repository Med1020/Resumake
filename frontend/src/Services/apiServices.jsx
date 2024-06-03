import axios from "axios";

export const loginAPI = async ({ email, password }) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const signupAPI = async ({ credentials }) => {
  console.log(import.meta.env.VITE_BACKEND_URL);
  try {
    const response = axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/signup`,
      credentials
    );
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    return error;
  }
};
