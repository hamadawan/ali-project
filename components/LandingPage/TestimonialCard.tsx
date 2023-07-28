import React from 'react';
import Image from 'next/image';

const TestimonialCard = (props) => {
  return (
        <div data-aos="fade-left" data-aos-delay={props.animation} className=' w-[300px] rounded-2xl bg-[#26b9f1] text-white p-5'>
            <div>
                <div className=' flex justify-end'>
                <Image
                    fill
                    className="object-cover w-24 h-24 rounded-full shadow"
                    src={props.image}
                    alt="Person"
                />
                </div>
            </div>
            <div className="flex flex-col justify-center mt-7">
                <p className="text-4xl">{props.text}</p>
                <p className="text-base mt-6 tracking-wide">
                    {props.review}
                </p>
            </div>
        </div>
  );
};

export default TestimonialCard;
