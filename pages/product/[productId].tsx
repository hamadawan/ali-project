import Head from "next/head";
import DashboardHeader from "@/components/DashboardHeader";
import StoreHeader from "@/components/StoreHeader";
import AboutProduct from "@/components/AboutProduct";
import StoreFooter from "@/components/StoreFooter";
import ProductSlider from "@/components/ProductSlider";
import Breadcrumb from "@/components/Breadcrumb";
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
        <Breadcrumb options={["Home","Sales","Hoodie"]} className="pb-7"/>
        <AboutProduct />
        <ProductSlider className="mt-8" />
      </div>
      <div className="mt-16">
        <StoreFooter />
      </div>
    </div>
  );
}
