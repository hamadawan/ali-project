import Head from 'next/head';
import StoreHeader from '@/components/StoreHeader';
import ProductSlider from '@/components/ProductSlider';
import StoreInfo from '@/components/store/CompanyInfo';
import DashboardHeader from '@/components/DashboardHeader';
import Reviews from '@/components/Reviews';
import StoreFooter from '@/components/StoreFooter';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PuentifyApi } from '@/lib/puentifyApi';

const Store: React.FunctionComponent = () => {
  const router = useRouter();
  const storeSlug: string = router.query.storeId as string;
  const [store, setStore] = useState();
  useEffect(() => {
    (async function () {
      if (storeSlug) {
        const data = await PuentifyApi.storeFront(storeSlug);
        setStore(data);
      }
    })();
  }, [storeSlug]);

  return (
    <div className=" bg-[#F7F8FA]">
      <Head>
        <title>Puentify</title>
        <meta name="description" content="Puente - Your Bridge to Mexican Manufacturing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardHeader />
      <StoreHeader
        name={store?.manufacturer?.name}
        rating={store?.manufacturer?.overall_rating}
        products={store?.products?.length}
        customers={store?.manufacturer?.customer_count}
      />
      <div className="container mx-auto py-8">
        <ProductSlider products={store?.products} className="pb-24" />
      </div>
      <StoreInfo manufacturer={store?.manufacturer} />
      <div className="container mx-auto py-6">
        <Reviews
          overall_rating={store?.manufacturer?.overall_rating}
          reviews={store?.manufacturer?.reviews}
        />
      </div>
      <StoreFooter />
    </div>
  );
};

export default Store;
