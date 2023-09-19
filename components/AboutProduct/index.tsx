import * as React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import UserReview from "../UserReview";
import ProductInformation from "../ProductInformation";
import Imagegallery from "../Imagegallery";
import Table from "../Table";

const AboutProduct: React.FunctionComponent = () => {
  const itemsData = [
    {
      name: "Username",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex non magna tristique pharetra a quis libero. Donec imperdiet justo sapien, vel tincidunt ante aliquet quis.",
    },
  ];
  return (
    <div>
      <div className="flex gap-x-[103px]">
        <Imagegallery />
        <div className="w-[643px]">
          <ProductInformation />
          <div className="mt-7">
            {itemsData.map((item, index) => (
              <UserReview key={index} name={item.name} rating={item.rating} review={item.review} />
            ))}
          </div>
        </div>
      </div>
      <Table />
      <Image className="mt-8 mx-auto" src="/image10.png" alt="" width={1280} height={1731} />
      <div className="flex justify-center mt-28">
        <Button variant="primary" className="w-[270px]" type="submit">
          Ver más
        </Button>
      </div>
    </div>
  );
};

export default AboutProduct;
