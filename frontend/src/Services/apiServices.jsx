export const loginAPI = async ({ email, password }) => {
  const response = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    console.error("Login failed:", await response.json());
  }
};
