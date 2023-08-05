import * as React from "react";
import ProductDetail from "@/components/ProductDetail";
import Images from "../Images";
import ProductPrice from "@/components/ProductPrice";
import ProductVarients from "@/components/ProductVarients";
import Post from "@/components/Post";

const NewProduct: React.FunctionComponent = () => {
  return (
    <div className="bg-[#EDEFF2]">
      <div className="ml-12">
        <div className="font-[Raleway] mt-9  text-5xl font-bold leading-[63px] text-[#170F49]">
          Nuevo producto
        </div>
        <ProductDetail />
        <Images />
        <ProductPrice />
        <ProductVarients />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default NewProduct;
