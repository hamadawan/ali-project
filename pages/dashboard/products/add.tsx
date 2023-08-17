import Dashboard from '@/pages/dashboard';
import React, { useEffect, useState } from 'react';
import ProductDetail from '@/components/ProductDetail';
import Images from '@/components/Images';
import Variants from '@/components/Variants';
import ProductStatus from '@/components/ProductStatus';
import ProductPrice from '@/components/ProductPrice';
import { Button } from '@/components/ui/button';
import { useCategories } from '@/graphql/queries/useCategories';
import { useAddProductMutation } from '@/graphql/mutations/useAddProductMutation';
import { PuentifyApi } from '@/lib/puentifyApi';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useUpdateProductMutation } from '@/graphql/mutations/useUpdateProductMutation';

const AddProductPage = () => {
  const { data: categoriesData } = useCategories();
  const [createProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [productId, setProductId] = useState<number>();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [varients, setVarients] = useState([]);
  const [status, setStatus] = useState<string>('active');
  const [price, setPrice] = useState<number>(0);
  const [currency, setCurrency] = useState<string>('');
  const { t } = useTranslation('add-product');

  const categories = categoriesData?.categories?.map((cat: any) => ({
    name: cat.name,
    value: cat.id,
  }));

  useEffect(() => {
    handleCreateProduct();
  }, []);

  const handleCreateProduct = async () => {
    const product = {
      name,
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
    !!result.data?.createProduct?.id && setProductId(+result.data?.createProduct?.id);
  };

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const product = {
      name,
      categoryId: category,
      description,
      price,
      currency,
      status,
      productVariants: varients,
    };
    const result = await updateProduct({
      variables: {
        id: productId ?? 0,
        input: {
          ...product,
        },
      },
    });
    if (result.data?.updateProduct && productId) {
      await PuentifyApi.uploadProductImages(productId, images);
    }
  };

  return (
    <Dashboard>
      <div className="bg-[#EDEFF2] pt-2">
        <div className="ml-12">
          <div className=" mt-9  text-5xl font-bold leading-[63px] text-[#170F49]">
            {t('addNewProduct')}
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
              <Variants className="mt-9" varients={varients} setVarients={setVarients} />
              <Button variant="primary" className="mb-3 mt-9" type="submit">
                {t('publishProduct')}
              </Button>
            </div>
            <div className="col-span-12 md:col-span-4 pr-6">
              <ProductStatus className="mt-9" status={status} setStatus={setStatus} />
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

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['add-product'])),
  },
});

export default AddProductPage;
