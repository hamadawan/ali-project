import * as React from 'react';
import Image from 'next/image';

const Imagegallery: React.FunctionComponent = () => {
  const mainImage = document.getElementById('main-image');
  function handleImageClick(index) {
    mainImage.src = imgGallery[index].src;
  }

  const imgGallery = [
    // {src:"/T-shirt.png"},
    { src: '/t-shirt1.png' },
    { src: '/t-shirt2.png' },
    { src: '/t-shirt3.png' },
  ];
  return (
    <div>
      <div className="px-7 py-7 rounded-[20px] bg-[#FFF] flex items-center justify-center">
        <Image id="main-image" className="" src="" alt="" width={400} height={400} />
      </div>
      <div className="flex gap-x-7 mt-6 ">
        {imgGallery.map((imageObj, index) => (
          <div key={index} className="bg-[#FFF] px-5 py-3 rounded-[20px]">
            <Image
              src={imageObj.src}
              alt=""
              width={120}
              height={137}
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imagegallery;
