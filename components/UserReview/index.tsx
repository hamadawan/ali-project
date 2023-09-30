import * as React from 'react';
import Image from 'next/image';
import StarRating from '@/components/StatRating/StarRating';


interface UserReviewProps {
  name: string;
  avatarUrl?: string;
  rating: number;
  title?: string;
  body: string;
}

const UserReview: React.FunctionComponent<UserReviewProps> = ({
  name,
  avatarUrl,
  rating,
  body,
}) => {
  return (
    <div className="w-full rounded-lg border border-solid border-[#DBDFE8]">
      <div className="px-4 py-8 flex gap-x-4">
        <Image src={avatarUrl ? avatarUrl : '/avatar.svg'} alt="logo" width={44} height={44} />
        <div className="w-full">
          <div className="flex justify-between">
            <div className="text-lg font-semibold leading-7"> {name}</div>
            <StarRating
              className="pl-2"
              rating={rating}
              width={'30px'}
              height={'30px'}
            />
          </div>
          <p className="text-lg font-normal leading-7">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
