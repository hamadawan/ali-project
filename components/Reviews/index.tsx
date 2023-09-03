import * as React from "react";
import Progressbar from "../Progressbar";
import UserReview from "../UserReview";
import Image from "next/image";

const Reviews: React.FunctionComponent = () => {
  const itemsData = [
    { name: 'Username', rating: 4, review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex non magna tristique pharetra a quis libero. Donec imperdiet justo sapien, vel tincidunt ante aliquet quis." },
    { name: 'Username', rating: 4, review:"lorem" },
    { name: 'Username', rating: 4, review:"lorem" },
  ];
  return (
    <div className="">
      <div className="container py-8">
        <div className="text-5xl font-bold leading-normal text-[#170F49] text-center">
          Reviews
        </div>
        <div className="flex gap-x-14 mt-[60px] mb-8">
          <div className="flex gap-x-4 items-center">
            <Image src='/Yellow-star.png' alt="star" width={65} height={65} />
            <div className="text-7xl font-bold leading-normal">4.7</div>
          </div>
          <div>
            <Progressbar percentage={75} />
            <Progressbar percentage={10} />
            <Progressbar percentage={12} />
            <Progressbar percentage={3} />
            <Progressbar percentage={0} />
          </div>
        </div>
        {itemsData.map((item, index) => (
        <UserReview
          key={index}
          name={item.name}
          rating={item.rating}
          review={item.review}
        />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
