import React, { useState } from 'react';
import Header from "@/components/Header";
import { PuenteApi } from "@/lib/puenteApi";
import { useRouter } from "next/router";
import { isEmpty } from "@/utils/isEmpty";
import Link from "next/link";
import { clearTimeout } from 'timers';
import { getResetPasswordToken } from "@/lib/auth";

const ResetPassword = () => {
  const router = useRouter();
  const [password, setPassword] = useState<string>();
  const [confirmedPassword, setConfirmedPassword] = useState<string>();
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState<string | null>();
  const handleSubmit = async (event:any) => {
    event.preventDefault();

    if (password !== confirmedPassword) {
      setErrors(['Passwords must be equal'])
      return;
    }
    const token = getResetPasswordToken();
    const response = await PuenteApi.resetPassword({
      password,
      confirmedPassword,
      token,
    });
    if (!isEmpty(response?.error)) {
        setErrors([response?.error]);
        setSuccess(null);
    }
    if (response?.status === 'success') {
        const success = response?.status;
        const timer = setTimeout(() => {
          setSuccess('');
          router.push('/login');
        }, 9000);
        setSuccess(success);
        setErrors([]);
        clearPasswords();
        return() => clearTimeout(timer);
    }
  };

  const clearPasswords = () => {
    setPassword('');
    setConfirmedPassword('');
  }

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
              <strong className="font-bold">New password has been set. Please log in using new password</strong>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <h2 className="text-lg font-medium mb-4">Forgot Password</h2>
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
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block font-medium text-gray-700 mb-2"
              >
                Confirm Password
              </label>
              <input
                required={true}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmedPassword}
                onChange={(event) => setConfirmedPassword(event.target.value)}
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

export default ResetPassword;
