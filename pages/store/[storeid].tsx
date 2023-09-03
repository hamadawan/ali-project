import Head from "next/head";
import StoreHeader from "@/components/StoreHeader";
import StoreBanner from "@/components/store/StoreBanner";
import ProductSlider from "@/components/ProductSlider";
import StoreInfo from "@/components/store/CompanyInfo";
import DashboardHeader from "@/components/DashboardHeader";
import Reviews from "@/components/Reviews";

export default function Home() {
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
      <DashboardHeader />
      <StoreHeader
        name="HS Uniforms"
        rating={4.5}
        products={50}
        customers={100}
      />
      <div className="container mx-auto py-6">
        <StoreBanner />
        <ProductSlider className="py-24" />
        <StoreInfo />
        <Reviews />
      </div>
    </div>
  );
}
