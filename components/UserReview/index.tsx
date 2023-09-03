import * as React from "react";
import Image from "next/image";
import StarRating from "@/components/StatRating/StarRating";

const UserReview: React.FunctionComponent<{name:string , rating:number , review:string}> = ({name,rating,review}) => {
  return (
    <div className="w-full rounded-lg border border-solid border-[#DBDFE8]">
      <div className="px-4 py-8 flex gap-x-4">
        <Image src="/avatar.svg" alt="logo" width={44} height={44} />
        <div className="w-full">
          <div className="flex justify-between">
            <div className="text-lg font-semibold leading-7"> {name}</div>
            <StarRating
              className="pl-2"
              rating={rating}
              width={"30px"}
              height={"30px"}
            />
          </div>
          <p className="text-lg font-normal leading-7">
            {review}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
