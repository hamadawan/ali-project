import React, { useState } from 'react';
import Header from "@/components/Header";
import { PuenteApi } from "@/lib/puenteApi";
import { useRouter } from "next/router";
import { isEmpty } from "@/utils/isEmpty";
import setAuthCookies from "@/auth/setAuthCookies";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await PuenteApi.signin(email, password);

    if (!isEmpty(response?.errors)) {
      const errors = response?.errors;
      setErrors(errors);
    }

    if (response?.user && response?.accessToken) {
      setErrors(null);
      const { accessToken, uid, client } = response;
      setAuthCookies({ accessToken, uid, client });
      await router.push('/dashboard');
    }
  };

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="w-96 bg-white p-5 rounded-lg shadow-xl">
          {errors && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <strong className="font-bold">Please fix the following:</strong>
              <ul>
                {errors.map((error) => (
                  <span key={error} className="block sm:inline">{error}</span>
                ))}
              </ul>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <h2 className="text-lg font-medium mb-4">Sign in</h2>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                required={true}
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full border border-gray-400 p-2"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                required={true}
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full border border-gray-400 p-2"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
