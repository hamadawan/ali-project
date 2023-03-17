import { useState } from 'react';
import { FaHome, FaBoxOpen, FaClipboardList, FaEnvelope, FaCog } from 'react-icons/fa';
import Products from "@/components/Products";
import Orders from "@/components/Orders";

type NavItem = {
  name: string;
  icon: JSX.Element;
  content: JSX.Element;
};

const navItems: NavItem[] = [
  {
    name: 'Home',
    icon: <FaHome className="w-6 h-6" />,
    content: <div className="text-gray-700">Home content goes here</div>,
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

  const handleNavItemOnClick = (index: number) => {
    setActiveNavItemIndex(index);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans">
      {/* Navigation Bar */}
      <div className="flex-shrink-0 w-full md:w-64 bg-white shadow-xl md:shadow-none border-b md:border-b-0 md:border-r border-gray-300">
        <nav className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 bg-blue-700">
            <a href="#" className="text-lg font-bold text-white uppercase">
              My Startup
            </a>
          </div>
          <div className="flex-grow mt-4">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                className={`${
                  activeNavItemIndex === index
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:text-gray-900'
                } flex items-center px-4 py-2 mb-2 rounded-md transition-colors duration-300`}
                onClick={() => handleNavItemOnClick(index)}
              >
                <span className="mr-2">{item.icon}</span>
                <span className="">{item.name}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
      {/* Content Section */}
      <div className="flex-1 p-6 md:p-8">
        <div className="bg-white shadow-md p-6 rounded-md">
          {navItems[activeNavItemIndex].content}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
