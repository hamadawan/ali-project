import * as React from 'react';
import Progressbar from '../Progressbar';
import UserReview from '../UserReview';
import Image from 'next/image';
import { Button } from '../ui/button';

const Reviews: React.FunctionComponent<{ reviews: [], overall_rating: number }> = ({ reviews, overall_rating }) => {
  const calculateStarRatings = (reviewsList) => {
    const starCounts = [0, 0, 0, 0, 0]; // Assuming ratings range from 1 to 5
    reviewsList.forEach((review) => {
      const rating = review.rating;
      starCounts[rating - 1]++;
    });
    const totalUsers = reviewsList.length;
    const result = starCounts.map((count) => {
      const percentage = (count / totalUsers) * 100;
      return { noOfusers: count, percentage };
    });
    return result;
  };
  return (
    <div className="">
      <div className="container py-8">
        <div className="text-5xl font-bold leading-normal text-[#170F49] text-center">Reviews</div>
        <div className="flex gap-x-14 mt-[60px] mb-8">
          <div className="flex gap-x-4 items-center">
            <Image src="/Yellow-star.png" alt="star" width={65} height={65} />
            <div className="text-7xl font-bold leading-normal">{overall_rating}</div>
          </div>
          <div className="w-full">
            {reviews && calculateStarRatings(reviews).map((review) => (
              <Progressbar
                key={review.noOfusers}
                number={review.noOfusers}
                percentage={review.percentage}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          {reviews && reviews.map((item, index) => (
            <UserReview
              key={index}
              name={item?.reviewer?.name}
              rating={item.rating}
              review={item.body}
            />
          ))}
          <Button variant="primary">Cargar recientes</Button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
