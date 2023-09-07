import Dashboard from '@/pages/dashboard';
import React, { useState } from 'react';
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
import { useRouter } from 'next/router';
import { checkProductForm } from '@/validation/product';

const AddProductPage = () => {
  const router = useRouter();

  const { data: categoriesData } = useCategories();
  const [createProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [productId, setProductId] = useState<string>();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [varients, setVarients] = useState([]);
  const [status, setStatus] = useState<string>('active');
  const [price, setPrice] = useState<number>(1);
  const [currency, setCurrency] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation('add-product');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const categories = categoriesData?.categories?.map((cat: any) => ({
    name: cat.name,
    value: cat.id,
  }));

  const handleCreateProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const product = {
      name,
      description,
      categoryId: category,
      price: price,
      currency: 'USD',
    };
    const err = await checkProductForm(product);
    if (err) {
      setErrors(err);
    } else {
      setErrors({});
      const result = await createProduct({
        variables: {
          input: {
            ...product,
          },
        },
      });
      !!result.data?.createProduct?.id && setProductId(result.data?.createProduct?.id);
    }
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

    const err = await checkProductForm(product);
    if (err) {
      setErrors(err);
      debugger;
    } else {
      setLoading(true);
      const result = await updateProduct({
        variables: {
          id: productId,
          input: {
            ...product,
          },
        },
      });
      if (result.data?.updateProduct && productId) {
        await PuentifyApi.uploadProductImages(productId, files);
      }
      setLoading(false);
      router.push('/dashboard/products');
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
                errors={errors}
              />
              {!productId && (
                <Button variant="primary" className="mb-3 mt-4" onClick={handleCreateProduct}>
                  {t('createProduct')}
                </Button>
              )}
              <Images className="mt-9" images={images} setImages={setImages} setFiles={setFiles} />
              <Variants className="mt-9" varients={varients} setVarients={setVarients} />

              <Button
                disabled={!productId || loading}
                variant="primary"
                className="mb-3 mt-9"
                type="submit"
              >
                {t('publishProduct')}
              </Button>
            </div>
            <div className="col-span-12 md:col-span-4 pr-6">
              <ProductStatus
                errors={errors}
                className="mt-9"
                status={status}
                setStatus={setStatus}
              />
              <ProductPrice
                errors={errors}
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
