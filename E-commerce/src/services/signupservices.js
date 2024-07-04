import api from "../api/api";
const signupRequest = async (payload) => {
  const res = await api.post("auth/register/", payload);
  return res.data;
};

const signupValidation = async (payload) => {
  const res = await api.post("auth/checkemail/", payload);
  return res.data;
};

const emailVerificationCode = async (email) => {
  const res = await api.post("email/verification-code/", email);
  return res.data;
};

export default {
  signupRequest,
  emailVerificationCode,
  signupValidation,
};
