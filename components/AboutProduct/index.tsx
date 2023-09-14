import * as React from 'react';
import UserReview from '../UserReview';
import ProductInformation from '../ProductInformation';
import Imagegallery from '../Imagegallery';

const AboutProduct: React.FunctionComponent = () => {
  const itemsData = [
    {
      name: 'Username',
      rating: 4,
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex non magna tristique pharetra a quis libero. Donec imperdiet justo sapien, vel tincidunt ante aliquet quis.',
    },
  ];
  return (
    <div className="flex gap-x-[103px] mt-6">
      <Imagegallery />
      <div className="w-[643px] ">
        <ProductInformation />
        <hr />
        <div className="mt-8">
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
    </div>
  );
};

export default AboutProduct;
