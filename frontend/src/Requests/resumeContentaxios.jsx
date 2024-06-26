import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.withCredentials = true;
export const getResumes = async () => {
  try {
    const response = await axios.get(`/api/resumeContent/getResumes`);
    return response;
  } catch (error) {
    console.log(error);
    return error.response.data.message;
  }
};

export const createNewResume = async () => {
  try {
    const response = await axios.post("/api/resumeContent/createNewResume");
    return response;
  } catch (error) {
    const { status, statusText } = error.response;
    throw new Error(`Error ${status}: ${statusText}`);
  }
};

export const getResumeData = async (resumeId) => {
  try {
    const response = await axios.get(
      `/api/resumeContent/getResume/${resumeId}`
    );
    return response;
  } catch (e) {
    const { status, statusText } = error.response;
    throw new Error(`Error ${status}: ${statusText}`);
  }
};

export const sendResumeData = async (resumeId, data) => {
  console.log(data);
  try {
    const response = await axios.post("/api/resumeContent", {
      resumeId,
      data,
    });
    console.log(response);
  } catch (e) {
    const { status, statusText } = error.response;
    throw new Error(`Error ${status}: ${statusText}`);
  }
};

export const postResumeContent = async (resumeId, elementName, data) => {
  try {
    const response = await axios.post("/api/resumeContent/postResumeContent", {
      resumeId,
      elementName,
      data,
    });
    console.log(response);
  } catch (error) {
    const { status, statusText } = error.response;
    throw new Error(`Error ${status}: ${statusText}`);
  }
};

export const deleteResumeContent = async (elementName, resumeId, id) => {
  // console.log(resumeId, elementName, id);
  try {
    const response = await axios.delete("/api/resumeContent/remove", {
      data: {
        resumeId,
        id,
        elementName,
      },
    });
    console.log(response.status);
    if (response.status == 204) {
      return response;
    }
  } catch (error) {
    const { status, statusText } = error.response;
    throw new Error(`Error ${status}: ${statusText}`);
  }
};

export const deleteResume = async (resumeId) => {
  try {
    const response = await axios.delete("/api/resumeContent/deleteResume", {
      data: { resumeId },
    });
    consoel.log(response);
  } catch (error) {
    throw new Error(`Error ${status}: ${statusText}`);
  }
};
