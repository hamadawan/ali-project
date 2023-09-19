import * as React from "react";
import Image from "next/image";

const imgGallery = [
  { src: "/T-shirt.png" },
  { src: "/t-shirt1.png" },
  { src: "/t-shirt2.png" },
  { src: "/t-shirt3.png" },
]

const Imagegallery: React.FunctionComponent = () => {
  const [mainImage, setMainImage] = React.useState("/T-shirt.png");

  function handleImageClick(src) {
    setMainImage(src);
  }
  
  return (
    <div>
      <div className="rounded-[20px] bg-[#FFF] h-[525px] min-w-[525px] w-full flex items-center justify-center">
        <Image id="mainImage" className="" src={mainImage} alt="" width={400} height={400} />
      </div>
      <div className="flex gap-x-7 mt-6">
        {imgGallery.filter(imageObj => imageObj.src !== mainImage).map((imageObj, index) => (
          <div className="bg-[#FFF] px-5 py-4 rounded-[20px]">
            <Image
              key={index}
              src={imageObj.src}
              alt=""
              width={120}
              height={137}
              onClick={() => handleImageClick(imageObj.src)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imagegallery;
