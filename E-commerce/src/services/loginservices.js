import api from "../api/api";
const loginRequest = async (payload) => {
  const res = await api.post("/auth/login/", payload);
  console.log(res);
  if (res.data.success) setAccessTokenToLocalStorage(res.data.data);
  return res.data;
};

const setAccessTokenToLocalStorage = (access_token) => {
  localStorage.setItem("access_token", access_token);
};

export { loginRequest };
