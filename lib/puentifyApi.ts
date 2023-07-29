import removeAuthCookies from '@/auth/removeAuthCookies';
import settings from '@/config/settings';

const host = settings.apiUrl;
export const PuentifyApi = {
  signup: async (values: any) => {
    const response = await fetch(host + '/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...values, confirm_success_url: host + '/confirm' }),
    });
    console.log(response);
    return response.json();
  },
  signin: async (email: string, password: string) => {
    const response = await fetch(host + '/auth/sign_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    removeAuthCookies();

    const body = await response.json();
    const accessToken = body?.token?.token;
    const uid = body?.user?.uid;
    const client = body?.token?.client;
    return {
      ...body,
      accessToken,
      client,
      uid,
    };
  },
  forgotPassword: async (email: string) => {
    const response = await fetch(host + '/passwords/forgot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    removeAuthCookies();
    return response.json();
  },
  resetPassword: async ({ password, confirmedPassword, token }) => {
    const response = await fetch(host + '/passwords/reset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, confirmedPassword, token }),
    });
    removeAuthCookies();
    return response.json();
  },
};
