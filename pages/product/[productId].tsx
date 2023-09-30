import Head from 'next/head';
import Header from '@/components/Header';
import StoreHeader from '@/components/StoreHeader';
import AboutProduct from '@/components/Product/AboutProduct';
import StoreFooter from '@/components/StoreFooter';
import ProductSlider from '@/components/ProductSlider';
import Breadcrumb from '@/components/Breadcrumb';
import { PuentifyApi } from '@/lib/puentifyApi';
export default function Home({ product }) {
  console.log(product, 'product');
  return (
    <div className=" bg-[#F7F8FA]">
      <Head>
        <title>Puentify</title>
        <meta
          name="description"
          content="Puente - Your Bridge to Mexican Manufacturing"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <StoreHeader
        name={product?.manufacturer?.name}
        rating={product?.manufacturer?.overall_rating}
        products={50}
        customers={product?.manufacturer?.customer_count}
      />
      <div className="container mx-auto py-6">
        <Breadcrumb options={['Home', 'Sales', 'Hoodie']} className="pb-7"/>
        <AboutProduct product={product}/>
        <ProductSlider className="mt-8" />
      </div>
      <div className="mt-16">
        <StoreFooter />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const router = context.req.url;
  const productId = router.split('/').pop();
  const data = await PuentifyApi.getProduct(productId);
  console.log(data)

  return {
    props: {
      product: data.product,
      error: data?.message || '',
    },
  };
}
