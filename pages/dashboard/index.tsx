import DashboardHeader from '@/components/DashboardHeader';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FaHome, FaBoxOpen, FaClipboardList, FaEnvelope, FaCog } from 'react-icons/fa';
import Orders from '@/components/Orders';
import withAuth from '@/components/AuthenticationWrapper/AuthenticationWrapper';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import logo from '@/public/logo-white.svg';

type NavItem = {
  id: string;
  name: string;
  icon: JSX.Element;
  content?: JSX.Element;
};

const navItems: NavItem[] = [
  {
    id: 'onboarding',
    name: 'Home',
    icon: <FaHome className="w-6 h-6" />,
  },
  {
    id: 'products',
    name: 'Products',
    icon: <FaBoxOpen className="w-6 h-6" />,
  },
  {
    id: 'orders',
    name: 'Orders',
    icon: <FaClipboardList className="w-6 h-6" />,
    content: <Orders />,
  },
  {
    id: 'messages',
    name: 'Messages',
    icon: <FaEnvelope className="w-6 h-6" />,
    content: <div className="text-gray-700">Messages content goes here</div>,
  },
  {
    id: 'settings',
    name: 'Settings',
    icon: <FaCog className="w-6 h-6" />,
    content: <div className="text-gray-700">Settings content goes here</div>,
  },
];

const Dashboard: React.Component = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col md:flex-row min-h-screen font-sans">
        <div className="flex-shrink-0 w-full md:w-64 bg-primary text-white shadow-xl md:shadow-none border-b md:border-b-0 md:border-r border-gray-300">
          <nav className="flex flex-col h-full">
            <div className="mx-auto mt-4 cursor-pointer my-auto">
              <Image onClick={() => router.push('/dashboard')} src={logo} alt="Puentify logo" width={150} />
            </div>
            <div className="w-full flex-grow mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/dashboard/${item.id}`}
                  className={`${
                    router.pathname.includes(item.id)
                      ? 'w-full bg-secondary text-white'
                      : 'w-full hover:bg-secondary/40'
                  } flex items-center px-4 py-4 mb-2 rounded-md transition-colors duration-300`}
                >
                  <span className="mr-2">{item.icon}</span>
                  <span className="">{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
        <div className="flex-1">
          <DashboardHeader />
          <div className="p-5 md:p-8 bg-gray-100">
            <div className="bg-white shadow-md p-2 md:p-8 rounded-md">
              { children }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['dashboard'])),
  },
});
export default withAuth(Dashboard);
