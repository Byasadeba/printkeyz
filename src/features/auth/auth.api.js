import api from '@/lib/api';

export const loginApi = (data) =>
  api.post('/auth/login', data);

export const registerApi = (data) =>
  api.post('/auth/register', data);

export const forgotPasswordApi = (email) =>
  api.post('/auth/forgot-password', { email });

export const resetPasswordApi = (token, password) =>
  api.post(`/auth/reset-password/${token}`, { password });

export const googleAuthUrl = () => {
  return `${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`;
};
