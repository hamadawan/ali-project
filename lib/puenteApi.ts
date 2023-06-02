import removeAuthCookies from "@/auth/removeAuthCookies";
import settings from "@/config/settings";

const host = settings.apiUrl;
export const PuenteApi = {
  signup: async (values: any) => {
    const response = await fetch(host + '/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...values, confirm_success_url: host + '/confirm'}),
    });
    console.log(response)
    return await response.json();
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
  forgot_password: async (email: string) => {
    const response = await fetch(host + '/passwords/forgot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    removeAuthCookies();
    return await response.json();
  },
  reset_password: async (password: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const response = await fetch(host + '/passwords/reset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, token }),
    });
    removeAuthCookies();
    return await response.json();
  }
}
