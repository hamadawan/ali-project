import Head from "next/head";
import StoreBanner from "@/components/store/StoreBanner";
import ProductSlider from "@/components/ProductSlider";
import StoreInfo from "@/components/store/CompanyInfo";
import DashboardHeader from "@/components/DashboardHeader";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Puentify</title>
        <meta name="description" content="Puente - Your Bridge to Mexican Manufacturing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardHeader />
      <div className="container mx-auto py-6">
        <StoreBanner />
        <ProductSlider />
        <StoreInfo />
      </div>
    </div>
  );
}
