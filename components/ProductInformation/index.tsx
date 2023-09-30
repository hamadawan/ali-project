import { arrayToOptions } from '@/utils/arrayToOptions';
import Link from 'next/link';
import * as React from 'react';
import { Button } from '../ui/button';
import ProductQuantityTable from '@/components/ProductInformation/ProductQuantityTable';
import ProductVariantSelect from '@/components/ProductInformation/ProductVariantSelect';
import { iProduct } from '@/interface/iProduct';

const ProductInformation: React.FunctionComponent<{ product: iProduct }> = ({ product }) => {
  const [selectedProductVariants, setSelectedProductVariants] = React.useState({});

  const handleSetSelectedProductVariant = (variant, value) => {
    setSelectedProductVariants({
      ...selectedProductVariants,
      [variant]: value,
    });
  };

  return (
    <div>
      <div className="text-[#170F49] text-[42px] font-bold tracking-[0.42px]">
        {product.name}
      </div>
      <div className="mt-6 text-base font-medium uppercase text-[#26B9F1]">
        <Link href={`/store/${product.manufacturer.slug}`}>{product?.manufacturer?.name}</Link>
      </div>
      <p className="mt-7 text-lg font-normal text-[#576D99]">
        {product.description}
      </p>
      <ProductQuantityTable />
      <div className="flex gap-x-6 mt-9">
        { product.formatted_variants.map((variant) => (
          <ProductVariantSelect
            key={variant.name}
            id={variant.name}
            label={variant.name}
            value={selectedProductVariants[variant.name]}
            options={arrayToOptions(variant.values)}
            onChange={(value) => handleSetSelectedProductVariant(variant.name, value)}
          />
        ))}
        <Button className="w-[270px] h-[73.6px] text-white mb-1">
          Contactar al vendedor
        </Button>
      </div>
    </div>
  );
};

export default ProductInformation;
