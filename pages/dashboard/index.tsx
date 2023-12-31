import { useCurrentUserQuery } from '@/graphql/queries/useCurrentUserQuery';
import * as React from 'react';
import { useState } from 'react';
import { FaHome, FaBoxOpen, FaClipboardList, FaEnvelope, FaCog } from 'react-icons/fa';
import Products from '@/components/Products';
import Orders from '@/components/Orders';
import Header from '@/components/Header';
import Onboarding from '@/pages/dashboard/onboarding';
import PuentifyLoader from '@/components/PuentifyLoader';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type NavItem = {
  name: string;
  icon: JSX.Element;
  content: JSX.Element;
};

const navItems: NavItem[] = [
  {
    name: 'Home',
    icon: <FaHome className="w-6 h-6" />,
    content: <Onboarding />,
  },
  {
    name: 'Products',
    icon: <FaBoxOpen className="w-6 h-6" />,
    content: <Products />,
  },
  {
    name: 'Orders',
    icon: <FaClipboardList className="w-6 h-6" />,
    content: <Orders />,
  },
  {
    name: 'Messages',
    icon: <FaEnvelope className="w-6 h-6" />,
    content: <div className="text-gray-700">Messages content goes here</div>,
  },
  {
    name: 'Settings',
    icon: <FaCog className="w-6 h-6" />,
    content: <div className="text-gray-700">Settings content goes here</div>,
  },
];

const Dashboard = () => {
  const [activeNavItemIndex, setActiveNavItemIndex] = useState<number>(0);
  const { data, loading } = useCurrentUserQuery();

  const handleNavItemOnClick = (index: number) => {
    setActiveNavItemIndex(index);
  };

  if (loading) {
    return <PuentifyLoader />;
  }

  // if (!data && !loading) return (
  //   <div>You need to be logged in</div>
  // );

  return (
    <div>
      <Header showSearchBar={false} />
      <div className="flex flex-col md:flex-row min-h-screen font-sans mt-[70px]">
        <div className="flex-shrink-0 w-full md:w-64 bg-primary text-white shadow-xl md:shadow-none border-b md:border-b-0 md:border-r border-gray-300">
          <nav className="flex flex-col h-full">
            <div className="w-full flex-grow mt-10">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  className={`${
                    activeNavItemIndex === index
                      ? 'w-full bg-secondary text-white'
                      : 'w-full hover:bg-secondary/40'
                  } flex items-center px-4 py-4 mb-2 rounded-md transition-colors duration-300`}
                  onClick={() => handleNavItemOnClick(index)}
                >
                  <span className="mr-2">{item.icon}</span>
                  <span className="">{item.name}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>
        <div className="flex-1 p-5 md:p-8 bg-gray-100">
          <div className="bg-white shadow-md p-2 md:p-8 rounded-md">
            {navItems[activeNavItemIndex].content}
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
export default Dashboard;
