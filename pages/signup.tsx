import React, { useState } from 'react';
import Header from "@/components/Header";
import { PuenteApi } from "@/lib/puenteApi";
import Link from "next/link";
import {useRouter} from "next/router";

const SignUp = () => {
  const router = useRouter();
  const [companyName, setCompanyName] = useState('');
  const [errors, setErrors] = useState(null);
  const [tradeRole, setTradeRole] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await PuenteApi.signup({
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      companyName,
      tradeRole,
    });
    if (response?.status === 'error') {
      const errors = response?.errors?.full_messages;
      setErrors(errors);
    }
    if (response?.status === 'success') {
      setErrors(null);
      router.push('/login');

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
        <h2 className="text-lg font-medium mb-4">Sign Up</h2>
        <div className="mb-4">
          <label
            htmlFor="companyName"
            className="block font-medium text-gray-700 mb-2"
          >
            Company
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
            className="w-full border border-gray-400 p-2"
          />
        </div>
        {/*<div className="mb-4">*/}
        {/*  <RadioGroup value={tradeRole} onChange={setTradeRole}>*/}
        {/*    <RadioGroup.Label className="block font-medium text-gray-700 mb-2">*/}
        {/*      Trade Role*/}
        {/*    </RadioGroup.Label>*/}
        {/*    <div className="space-y-2">*/}
        {/*      {arrayToOptions(['Manufacturer', 'Buyer', 'Both']).map(*/}
        {/*        (option) => (*/}
        {/*          <RadioGroup.Option*/}
        {/*            key={option.value}*/}
        {/*            value={option.value}*/}
        {/*          >*/}
        {/*            {option.label}*/}
        {/*          </RadioGroup.Option>*/}
        {/*        )*/}
        {/*      )}*/}
        {/*    </div>*/}
        {/*  </RadioGroup>*/}
        {/*</div>*/}
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
        <div className="pt-2 text-center">Already have an account? <Link href="/login" className="underline">Sign in here</Link></div>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
