import * as React from 'react';
import { Button } from '../../ui/button';
import UserReview from '../../UserReview';
import ProductInformation from '../../ProductInformation';
import Imagegallery from '../../Imagegallery';
import Table from '../../Table';
import Tabs from '@/components/Tabs';
import Reviews from '@/components/Reviews';
import CompanyInfo from '@/components/store/CompanyInfo';
import PdfView from '@/components/PdfView';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { iProduct } from '@/interface/iProduct';

const AboutProduct: React.FunctionComponent<{ product: iProduct }> = ({ product }) => {
  const [tabs, setTabs] = React.useState([
    { id: 'details', name: 'Detalles del producto', active: true },
    { id: 'review', name: 'Reseñas', active: false },
    { id: 'information', name: 'Información del fabricante', active: false },
  ]);

  const setActiveTab = (index: number) => {
    setTabs(
      tabs.map((tab, i) => {
        tab.active = index === i;
        return tab;
      }),
    );
  };

  return (
    <div>
      <div className="flex gap-x-[103px]">
        <Imagegallery images={product.images} />
        <div>
          <ProductInformation product={product} />
          <div className="mt-7">
            {product.reviews.slice(0, 1).map((item, index) => (
              <UserReview
                key={index}
                name={item?.reviewer?.name ?? 'Juan Perez'}
                rating={item.rating}
                body={item.body}
              />
            ))}
          </div>
        </div>
      </div>
      <Tabs className="mt-14" options={tabs} onClick={setActiveTab} />
      <hr />
      {tabs[0].active && (
        <>
          <Table />
          <div className="max-w-[8] mt-5 rounded-2xl p-1 bg-white">
            <PdfView pdf="/sample.pdf" />
          </div>
          <div className="flex justify-center mt-28">
            <Button variant="primary" className="w-[270px]" type="submit">
              Ver más
            </Button>
          </div>
        </>
      )}
      {tabs[1].active && (
        <>
          <Reviews
            overall_rating={product?.overall_rating}
            reviews={product?.reviews}
          />
        </>
      )}
      {tabs[2].active && (
        <CompanyInfo
          className="text-[#576D99] mt-[60px] border-[#576D99]"
          manufacturer={product?.manufacturer}
        />
      )}
    </div>
  );
};

export default AboutProduct;
