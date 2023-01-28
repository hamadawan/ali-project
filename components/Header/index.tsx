import * as React from 'react';
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import { GlobeAltIcon, MenuAlt1Icon, UserCircleIcon } from "@heroicons/react/solid";
import { HeaderProps } from "./Header.interfaces";
import logo from '../../public/logo-mid.png'

const Header: React.FunctionComponent<HeaderProps> = () => {
    return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
            <Image
                src={logo}
                alt="Puente logo"
                width={80}
            />
        </div>
        <div className="flex items-center border-2 rounded-full md:shadow-sm">
            <input className="flex-grow pl-5 bg-transparent outline-none" type="text" placeholder="What are you looking for..." />
            <SearchIcon className="hidden md:inline-flex h-8 bg-violet-600 text-white rounded-full p-2 cursor-pointer md:mx-2" />
        </div>
        <div className="flex space-x-4 justify-end text-gray-500">
            <div className="flex items-center space-x-2 cursor-pointer">
                <p className="hidden md:inline">Sign Up</p>
                <GlobeAltIcon className="h-6" />
            </div>
            <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
                <MenuAlt1Icon className="h-6" />
                <UserCircleIcon className="h-6" />
            </div>
        </div>
    </header>
    );
};

export default Header;
