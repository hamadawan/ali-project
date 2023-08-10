import React, { useState } from "react";
import ProductDetail from "@/components/ProductDetail";
import Images from "@/components/Images";
import Varients from "@/components/Varients";
import Estatus from "@/components/Estatus";
import ProductPrice from "@/components/ProductPrice";
import { Button } from "@/components/ui/button";

const NewProduct: React.FunctionComponent = () => {
  const [name, setName] = useState("Hammad");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [varientName,setVarientName]= useState("");

  const categories = [
    { name: "Option", value: "1" },
    { name: "Option 2", value: "2" },
  ];

  const [price, setPrice] = useState<number>(0);
  const [unitPrice, setUnitPrice] = useState<number>(0);

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const product = {
      name,
      category,
      description,
      images,
      price,
      unitPrice,
    };
    console.log("Call add product API", product);
  };

  return (
    <div className="bg-[#EDEFF2]">
      <div className="ml-12">
        <div className="font-[Raleway] mt-9  text-5xl font-bold leading-[63px] text-[#170F49]">
          Nuevo producto
        </div>
        <form className="grid grid-cols-12 gap-x-8" onSubmit={handleForm}>
          <div className=" col-span-12 md:col-span-8">
            <ProductDetail
              className="mt-9"
              name={name}
              setName={setName}
              category={category}
              setCategory={setCategory}
              description={description}
              setDescription={setDescription}
              categories={categories}
            />
            <Images className="mt-9" images={images} setImages={setImages} />
            <Varients
            varientName={varientName}
            setVarientName={setVarientName}
            />
            <Button variant="primary" className="mb-3 mt-9" type="submit">
              Publicar producto
            </Button>
          </div>
          <div className="col-span-12 md:col-span-4 pr-6">
            <Estatus />
            <ProductPrice
              className="mt-9"
              price={price}
              setPrice={setPrice}
              unitPrice={unitPrice}
              setUnitPrice={setUnitPrice}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
