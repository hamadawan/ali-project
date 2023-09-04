import * as React from "react";
import Progressbar from "../Progressbar";
import UserReview from "../UserReview";
import Image from "next/image";
import { Button } from "../ui/button";

const Reviews: React.FunctionComponent = () => {
  const itemsData = [
    {
      name: "Username",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex non magna tristique pharetra a quis libero. Donec imperdiet justo sapien, vel tincidunt ante aliquet quis.",
    },
    { name: "Username", rating: 4, review: "lorem ipsum dolar sit amet ,consecteture adipiscing elit. Vivamus quis ex non magna tristique" },
    { name: "Username", rating: 4, review: "lorem" },
  ];
  const reviews = [
    { noOfusers: 5, percentage: 90 },
    { noOfusers: 6, percentage: 80 },
    { noOfusers: 10, percentage: 50 },
    { noOfusers: 5, percentage: 20 },
    { noOfusers: 7, percentage: 0 },
  ];
  return (
    <div className="">
      <div className="container py-8">
        <div className="text-5xl font-bold leading-normal text-[#170F49] text-center">Reviews</div>
        <div className="flex gap-x-14 mt-[60px] mb-8">
          <div className="flex gap-x-4 items-center">
            <Image src="/Yellow-star.png" alt="star" width={65} height={65} />
            <div className="text-7xl font-bold leading-normal">4.7</div>
          </div>
          <div className="w-full">
            {reviews.map((review) => (
              <Progressbar number={review.noOfusers} percentage={review.percentage} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          {itemsData.map((item, index) => (
            <UserReview key={index} name={item.name} rating={item.rating} review={item.review} />
          ))}
          <Button variant="primary">Cargar recientes</Button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
