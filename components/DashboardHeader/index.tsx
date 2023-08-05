import * as React from 'react';
import SignUpIcon from '@/components/SignUpIcon';

const DashboardHeader = () => {

  return (
    <header className="right-0 top-0 bg-white p-5 md:px-10">
      <div className="flex space-x-4 justify-end text-gray-500">
        <div className="flex items-center space-x-2 cursor-pointer">
          <SignUpIcon />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
