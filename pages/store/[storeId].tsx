import Head from 'next/head';
import StoreHeader from '@/components/StoreHeader';
import ProductSlider from '@/components/ProductSlider';
import StoreInfo from '@/components/store/CompanyInfo';
import DashboardHeader from '@/components/DashboardHeader';
import Reviews from '@/components/Reviews';
import StoreFooter from '@/components/StoreFooter';
import { PuentifyApi } from '@/lib/puentifyApi';

const Store: React.FunctionComponent = ({ store }) => {
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

export async function getServerSideProps(context) {
  const router = context.req.url;
  const storeSlug = router.split('/').pop();
  const data = await PuentifyApi.storeFront(storeSlug);

  return {
    props: {
      store: data,
    },
  };
}

export default Store;
