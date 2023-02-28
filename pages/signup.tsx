import React, { useState } from 'react';
import Header from "@/components/Header";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your submit logic here
  };

  return (
    <div>
      <Header />
    <div className="flex items-center justify-center h-screen">
      <div className="w-96">
      <form onSubmit={handleSubmit} className="bg-white p-5 rounded-lg shadow-xl">
        <h2 className="text-lg font-medium mb-4">Sign Up</h2>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block font-medium text-gray-700 mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="w-full border border-gray-400 p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block font-medium text-gray-700 mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className="w-full border border-gray-400 p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
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
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="w-full border border-gray-400 p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
