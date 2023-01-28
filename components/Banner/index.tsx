import * as React from 'react';
import Image from "next/image";
import banner from '../../public/banner.png'

const Banner: React.FunctionComponent = () => {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
            <Image
              fill
              src={banner}
              alt="Banner image"
            />
            <div className="absolute top-1/3 left-[-15%] w-full text-center">
              <p className="text-sm sm:text-lg text-white">The world's best suppliers</p>
              <button className="text-violet-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90">Find products</button>
            </div>
        </div>
    );
};

export default Banner;
