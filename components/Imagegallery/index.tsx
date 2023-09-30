import * as React from 'react';
import Image from 'next/image';

const Imagegallery: React.FunctionComponent<{ images: string[] }> = ({ images }) => {
  const [mainImage, setMainImage] = React.useState(images?.[0] ?? '/T-shirt.png');

  function handleImageClick(src) {
    setMainImage(src);
  }

  return (
    <div>
      <div className="rounded-[20px] bg-[#FFF] h-[525px] min-w-[525px] w-full flex items-center justify-center">
        <Image id="mainImage" className="" src={mainImage} alt="" width={400} height={400} />
      </div>
      <div className="flex gap-x-7 mt-6">
        {images
          .filter((imageObj) => imageObj !== mainImage)
          .map((imageObj, index) => (
            <div className="bg-[#FFF] px-5 py-4 rounded-[20px]" key={index}>
              <Image
                src={imageObj}
                alt=""
                width={120}
                height={137}
                onClick={() => handleImageClick(imageObj)}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Imagegallery;
