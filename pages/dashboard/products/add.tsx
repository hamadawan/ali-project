import Dashboard from "@/pages/dashboard";

import React, { useState } from "react";
import ProductDetail from "@/components/ProductDetail";
import Images from "@/components/Images";
import Varients from "@/components/Varients";
import Estatus from "@/components/Estatus";
import ProductPrice from "@/components/ProductPrice";
import { Button } from "@/components/ui/button";
import { useCategories } from "@/graphql/queries/useCategories";
import { useAddProductMutation } from "@/graphql/mutations/useAddProductMutation";

const AddProductPage = () => {
  const { data: categoriesData } = useCategories();
  const [createProduct] = useAddProductMutation();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [varients, setVarients] = useState([]);
  const [status, setStatus] = useState<string>('active');
  const [price, setPrice] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("");

  const categories = categoriesData?.categories?.map((category) => ({
    name: category.name,
    value: category.id,
  }));

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const product = {
      name,
      category,
      description,
      price,
      currency,
      status,
      productVariants: varients,
    };
    const result = await createProduct({
      variables: {
        input: {
          ...product,
        },
      },
    });
    console.log(result, "here");
  };

  return (
    <Dashboard>
      <div className="bg-[#EDEFF2] pt-2">
        <div className="ml-12">
          <div className="font-[Raleway] mt-9  text-5xl font-bold leading-[63px] text-[#170F49]">
            Nuevo producto
          </div>
          <form className="grid grid-cols-12 gap-x-8" onSubmit={handleForm}>
            <div className="col-span-12 md:col-span-8">
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
              <Varients className="mt-9" varients={varients} setVarients={setVarients} />
              <Button variant="primary" className="mb-3 mt-9" type="submit">
                Publicar producto
              </Button>
            </div>
            <div className="col-span-12 md:col-span-4 pr-6">
              <Estatus className="mt-9" status={status} setStatus={setStatus} />
              <ProductPrice
                className="mt-9"
                price={price}
                setPrice={setPrice}
                currency={currency}
                setCurrency={setCurrency}
              />
            </div>
          </form>
        </div>
      </div>
    </Dashboard>
  );
};

export default AddProductPage;
