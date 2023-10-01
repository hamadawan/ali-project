import * as React from 'react';
import Image from 'next/image';
const Step: React.FunctionComponent = ({
  finished,
  number,
}: {
  finished: boolean;
  number: number;
}) => {
  return (
    <div>
      {finished ? (
        <div className="w-[30px] h-[30px] flex justify-center items-center bg-secondary rounded-[20px]">
          <Image className="w-[20px] h-[20px]" src="/checkmark.svg" alt="" />
        </div>
      ) : (
        <div className="w-[30px] bg-white h-[30px] flex justify-center items-center text-secondary border border-secondary rounded-[20px]">
          {number}
        </div>
      )}
    </div>
  );
};

export default Step;