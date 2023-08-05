import React, { useState } from 'react';
import Header from '@/components/Header';
import { PuentifyApi } from '@/lib/puentifyApi';
import { useRouter } from 'next/router';
import { isEmpty } from '@/utils/isEmpty';
import setAuthCookies from '@/auth/setAuthCookies';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<any>(null);
  const { t } = useTranslation('login');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const response = await PuentifyApi.signin(email, password);

    if (!isEmpty(response?.errors)) {
      setErrors(response?.errors);
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
      <div
        id="login"
        className="flex items-center h-screen justify-center bg-[url('/background.png')] bg-no-repeat bg-right bg-[#ECF0F2] bg-[size:auto_100%] xl:bg-[size:100%_100%]"
      >
        <div className="w-[540px] bg-white rounded-[20px] px-10 py-8 shadow-xl">
          {errors && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
              role="alert"
            >
              <strong className="font-bold">Please fix the following:</strong>
              <ul>
                {errors?.map((error: any) => (
                  <span key={error} className="block sm:inline">
                    {error}
                  </span>
                ))}
              </ul>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold mb-6 leading-10">{t('heading')}</h2>
            <Input
              required={true}
              type="email"
              id="email"
              name="email"
              label={t('email')}
              placeholder="Email o nombre de usuario"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              containerClass="mb-4"
            />
            <Input
              required={true}
              type="password"
              id="password"
              label={t('password')}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              containerClass="mb-8"
            />
            <Button type="submit" variant="primary" className="mb-8">
              {t('signin')}
            </Button>
          </form>
          <hr />
          <div className="mt-6 font-normal text-sm text-center text-[#6F6C90] leading-5">
            {t('forgotPasswordText')}?{' '}
            <Link href="/forgot-password" className="underline text-[#0860C6]">
              Click here
            </Link>
          </div>
          <div className="mt-4 font-normal text-sm text-center text-[#6F6C90] leading-5">
            {t('signupText')}?{'  '}
            <Link href="/signup" className="underline text-[#0860C6]">
              {t('signup')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['login'])),
  },
});

export default Login;
