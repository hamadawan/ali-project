import React, { useState } from 'react';
import Header from '@/components/Header';
import { PuentifyApi } from '@/lib/puentifyApi';
import { useRouter } from 'next/router';
import { isEmpty } from '@/utils/isEmpty';
import Link from 'next/link';
import { clearTimeout } from 'timers';

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [errors, setErrors] = useState<string[]>();
  const [success, setSuccess] = useState<string | null>();
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    const response = await PuentifyApi.forgotPassword(email);

    if (!isEmpty(response?.error)) {
      setErrors([response?.error]);
      setSuccess(null);
    }
    if (response?.status === 'success') {
      const timer = setTimeout(() => {
        setSuccess('');
        router.push('/login');
      }, 9000);
      setSuccess(response?.status);
      setErrors([]);
      setEmail('');
      return () => clearTimeout(timer);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="w-96 bg-white p-5 rounded-lg shadow-xl">
          {!isEmpty(errors) && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <ul>
                {errors?.map((error:any) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          {success && (
            <div className="bg-white-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
              <strong className="font-bold">Please check your Email. Forgot password link has been sent in your email.</strong>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <h2 className="text-lg font-medium mb-4">Forgot Password</h2>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
                Please Enter Email
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
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
          <div className="pt-2 text-center"><Link href="/login" className="underline">Sign in here</Link></div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
