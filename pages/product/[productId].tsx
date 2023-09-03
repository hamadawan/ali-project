import Head from "next/head";
import DashboardHeader from "@/components/DashboardHeader";
import AboutProduct from "@/components/Product/AboutProduct";
import StoreHeader from "@/components/StoreHeader";
export default function Home() {
  return (
    <div className=" bg-[#F7F8FA]">
      <Head>
        <title>Puentify</title>
        <meta name="description" content="Puente - Your Bridge to Mexican Manufacturing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardHeader />
      <StoreHeader name="HS Uniforms" rating={4.5} products={50} customers={100} />
      <div className="container mx-auto py-6">
        <AboutProduct />
      </div>
    </div>
  );
}
