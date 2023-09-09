import React, { useState } from "react";
import ProductCard from "../ProductCard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";

export interface Product {
  id: number;
  name: string;
  images: string[];
  price: number;
  currency: string;
}

const ProductSlider: React.FunctionComponent<{ className: string; products: Product[] }> = ({
  className,
  products,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    afterChange: (current) => {
      setCurrentSlide(current);
    },
    customPaging: (i) => (
      <div className="mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
        >
          <circle cx="7.5" cy="7" r="7" fill={i === currentSlide ? "#26B9F1" : "#0860C6"} />
        </svg>
      </div>
    ),
  };
  return (
    <div className={`${className}`}>
      <div className="text-center mb-[61px] text-[56px] font-bold leading-normal">Productos</div>
      <Slider {...settings}>
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            className="px-2 cursor-pointer"
            onClick={() => router.push(`/product/${product.id}`)}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
