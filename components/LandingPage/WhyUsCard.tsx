import React from 'react';
import Image from 'next/image';


const WhyUsCard = (props) => {
  return (
    <div data-aos={props.animation} className="text-center">
                    <div className="flex items-center justify-center mb-4 rounded-full sm:mx-auto">
                        <Image fill src={props.icon} alt="" className="w-24 h-24 text-deep-purple-accent-400 sm:w-44 sm:h-44"/>
                    </div>
                    <h2 className="mb-2 text-2xl mt-10 font-bold text-[#323232]">{props.title}</h2>
                    <p className="max-w-md mt-6 text-lg mb-3 sm:mx-auto text-[#1a7cb1]">
                        {props.overview}
                    </p>
                </div>
  );
};

export default WhyUsCard;
