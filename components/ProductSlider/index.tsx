import React, { useState } from 'react';
import ProductCard from '../ProductCard';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const ProductSlider: React.FunctionComponent = ({ className }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
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
          <circle cx="7.5" cy="7" r="7" fill={i === currentSlide ? '#0860C6' : '#D9D9D9'} />
        </svg>
      </div>
    ),
  };
  return (
    <div className={`${className}`}>
      <Slider {...settings}>
        <ProductCard className="px-2" name="Product hhhh" image="/shirt-img.svg" />
        <ProductCard className="px-2" name="Product hhhh" image="/shirt-img.svg" />
        <ProductCard className="px-2" name="Product hhhh" image="/shirt-img.svg" />
        <ProductCard className="px-2" name="Product hhhh" image="/shirt-img.svg" />
        <ProductCard className="px-2" name="Product hhhh" image="/shirt-img.svg" />
        <ProductCard className="px-2" name="Product hhhh" image="/shirt-img.svg" />
      </Slider>
    </div>
  );
};

export default ProductSlider;
