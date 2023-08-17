import React, { ChangeEvent, useRef } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const Images: React.FunctionComponent<{
  className: string;
  images: string[];
  setImages: Function;
}> = ({ className, images, setImages }) => {
  const { t } = useTranslation('add-product');
  const file = useRef(null);

  const openImageDialog = () => {
    file?.current?.click();
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const files = event.target.files;
    if (files) {
      const imageArray = Array.from(files).map((fileObj) =>
        URL.createObjectURL(fileObj),
      );
      setImages(imageArray);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;

    if (files) {
      const imageArray = Array.from(files).map((fileObj) =>
        URL.createObjectURL(fileObj),
      );
      setImages(imageArray);
    }
  };

  return (
    <div className={className}>
      <div className=" text-2xl font-bold leading-8  mb-5 text-[#170F49]">
        {t('images')}
      </div>
      <input
        ref={file}
        type="file"
        multiple
        className="hidden"
        onChange={handleImageChange}
      />
      <div className="w-100 p-7 min-h-[382px] rounded-[20px] bg-[#FFF]">
        <div className="pb-6 flex flex-wrap gap-3">
          {images.map((image, index) => {
            return (
              <Image
                key={index}
                className="rounded-lg shadow"
                src={image}
                width="50"
                height="50"
                alt="smaple"
              />
            );
          })}
        </div>
        <div className="w-100">
          <Button variant="primary" className="mb-3" onClick={openImageDialog}>
            <Image
              src="/camera.svg"
              alt=""
              className="mr-2"
              width={23.119}
              height={18}
            />
            {t('uploadPhotos')}
          </Button>
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="w-full min-h-[174px] mb-8 rounded-[10px] border border-solid border-[#D2DAE2] bg-[#d2dae266]"
          >
            <div className="border-dashed w-[ 646.055px] flex justify-center items-center h-[133px] rounded-[7px] border border-[#A8B0B7] my-5 mx-5">
              <div className="font-[Plus Jakarta Sans] text-sm font-normal leading-[22px] tracking-[0.26px] text-[#6F6C90]">
                {t('dragFiles')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
