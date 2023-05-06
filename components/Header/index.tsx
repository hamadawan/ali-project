import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { SearchIcon } from '@heroicons/react/outline';
import { MenuAlt1Icon, UserCircleIcon } from '@heroicons/react/solid';
import SignUpIcon from '@/components/SignUpIcon';
import logo from '../../public/puentify-logo.svg';

const Header: React.FunctionComponent = ({
  showSearchBar = false,
}) => {
  const [searchInput, setSearchInput] = React.useState<string>('');
  const router = useRouter();
  const { query } = router.query;

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        query: searchInput,
      },
    });
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-2 bg-white shadow-md p-4 md:px-10">
      <div className="relative flex items-center h-15 cursor-pointer my-auto">
        <Image
          onClick={() => router.push('/')}
          src={logo}
          alt="Puentify logo"
          width={150}
        />
      </div>
      { showSearchBar && (
        <div className="flex items-center border-2 rounded-full md:shadow-sm">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-grow pl-5 bg-transparent outline-none"
            type="text"
            placeholder={(query ?? 'Search') as string}
            onKeyDown={(e) => e.key === 'Enter' && search()}
            onSubmit={search}
          />
          <SearchIcon
            onClick={search}
            className="hidden md:inline-flex h-8 bg-[#26b9f1] text-white rounded-full p-2 cursor-pointer md:mx-2"
          />
        </div>
      )}
      <div className="flex space-x-4 justify-end text-gray-500">
        <div className="flex items-center space-x-2 cursor-pointer">
          <SignUpIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
