import React from 'react'
import { PopupButton } from "@typeform/embed-react";
import heroImage from '@/public/assets/4.webp'
import Button from '../Button'
import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";

const HeroSection = ({
  title,
  subtitle,
  isTypeFormButton,
  buttonText,
  onClick,
}) => {
    return (
        <section className="bg-white mt-4">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-3 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left ">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl text-[#202020]">
                        { title }
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 text-[#0860c6]">
                      { subtitle }
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                      { isTypeFormButton ? (
                        <PopupButton
                          className="primary-button self-center text-white text-lg md:text-[21px] md:whitespace-nowrap px-20 py-5 rounded-l-full rounded-r-full bg-gradient-to-l from-cyan-300 to-cyan-500"
                          id="lt9mrdZP"
                        >
                          { buttonText }
                        </PopupButton>
                        ) : (
                          <PrimaryButton onClick={onClick}>
                            <span>
                             {buttonText}
                            </span>
                      </PrimaryButton>
                        )}
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <Image
                      src={heroImage}
                      alt="Man with digitalstore"
                      className=" z-20 object-contain h-72 sm:h-80 lg:h-[500px] xl:h-112 2xl:h-128"
                    />
                    <div className=' md:ml-36 ml-20 absolute bg-[#6ac9ff] rounded-full h-56 w-56 md:h-96 md:w-96 blur-xl'></div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
