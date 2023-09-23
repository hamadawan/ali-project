import * as React from "react";
import { Button } from "../../ui/button";
import UserReview from "../../UserReview";
import ProductInformation from "../../ProductInformation";
import Imagegallery from "../../Imagegallery";
import Table from "../../Table";
import Tabs from "@/components/Tabs";
import Reviews from "@/components/Reviews";
import CompanyInfo from "@/components/store/CompanyInfo";
import PdfView from "@/components/PdfView";
import { PuentifyApi } from "@/lib/puentifyApi";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

const TABS = ["Detalles del producto", "Reseñas", "Información del fabricante"];

const AboutProduct: React.FunctionComponent = ({ store }) => {
  const itemsData = [
    {
      name: "Username",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex non magna tristique pharetra a quis libero. Donec imperdiet justo sapien, vel tincidunt ante aliquet quis.",
    },
  ];
  const [tab, setTab] = React.useState(TABS[0]);

  return (
    <div>
      <div className="flex gap-x-[103px]">
        <Imagegallery />
        <div>
          <ProductInformation />
          <div className="mt-7">
            {itemsData.map((item, index) => (
              <UserReview key={index} name={item.name} rating={item.rating} review={item.review} />
            ))}
          </div>
        </div>
      </div>
      <Tabs className="mt-14" selected={tab} options={TABS} setSelected={setTab} />
      <hr />
      {tab === TABS[0] && (
        <>
          <Table />
          <div className="max-w-[8] mt-5 rounded-2xl p-1 bg-white">
            <PdfView pdf="/sample.pdf"/>
          </div>
          <div className="flex justify-center mt-28">
            <Button variant="primary" className="w-[270px]" type="submit">
              Ver más
            </Button>
          </div>
        </>
      )}
      {tab === TABS[1] && (
        <>
          <Reviews
            overall_rating={store?.manufacturer?.overall_rating}
            reviews={store?.manufacturer?.reviews}
          />
        </>
      )}
      {tab === TABS[2] && <CompanyInfo className="text-[#576D99] mt-[60px] border-[#576D99]" manufacturer={store?.manufacturer} />}
    </div>
  );
};

export async function getServerSideProps(context) {
  const router = context.req.url;
  const storeSlug = router.split("/").pop();
  const data = await PuentifyApi.storeFront(storeSlug);

  return {
    props: {
      store: data,
    },
  };
}

export default AboutProduct;
