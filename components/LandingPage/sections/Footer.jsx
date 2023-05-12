import React from 'react'
import Button from '../Button'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="px-4 pt-16 pb-20 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-32 bg-[#323232] text-white">
            <div className="grid gap-24 md:gap-40 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="sm:col-span-2 text-white">
                    <h1 className=' text-5xl '>Let us help you.</h1>
                    <p className=' mt-5 text-lg mb-12'>Start today</p>
                    <div className=' text-center md:text-left'>
                        <Button text={'Contact us'} />
                    </div>
                </div>
                <div className=" text-xl contact text-center md:text-left">
                    <div className="mb-10 text-gray-100">
                        <p className="mr-1 mb-3 contact">Phone:</p>
                        <Link
                            href="tel:850-123-5021"
                            aria-label="Our phone"
                            title="Our phone"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            (619) 564-1131
                        </Link>
                    </div>
                    <div className=" mb-7 text-gray-100">
                        <p className="mr-1 mb-3 contact">Email:</p>
                        <Link
                            href="mailto:alejandro@puentify.com"
                            aria-label="Our email"
                            title="Our email"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            contact@puentify.com
                        </Link>
                    </div>
                    <div className="flex items-center mt-1 space-x-3 justify-center md:justify-start">
                        <Link
                            href="/"
                            className="text-[#26b9f1] transition-all duration-300 hover:text-white hover:scale-150"
                        >
                            <FaFacebookF size={25} />
                        </Link>
                        <Link
                            href="/"
                            className="text-[#26b9f1] transition-all duration-300 hover:text-white hover:scale-150"
                        >
                            <FaTwitter size={28}/>
                        </Link>
                        <Link
                            href="/"
                            className="text-[#26b9f1] transition-all duration-300 hover:text-white hover:scale-150"
                        >
                            <FaInstagram size={28} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
