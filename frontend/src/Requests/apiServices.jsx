import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.withCredentials = true;

export const loginAPI = async ({ email, password }) => {
  try {
    const response = await axios.post(`${axios.defaults.baseURL}/api/login`, {
      email,
      password,
    });
    // console.log("Response", response);
    return response;
  } catch (error) {
    // console.log("Error", error);
    return error.response.data.message;
  }
};

export const signupAPI = async ({ firstName, lastName, email, password }) => {
  try {
    const response = await axios.post(`${axios.defaults.baseURL}/api/signup`, {
      firstName,
      lastName,
      email,
      password,
    });

    return response;
  } catch (error) {
    return error;
  }
};
