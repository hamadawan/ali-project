import React from 'react';
import ProductCard from './ProductCard';
import { useProductsQuery } from '@/graphql/queries/useProductsQuery';
import ProductsTable from '@/components/Products/ProductsTable';

type ProductData = {
  id: string;
  name: string;
  imageUrl: string;
};

type ProductListProps = {
  products: ProductData[];
  onOptionsClick: (id: string) => void;
  viewMode?: string;
};

const ProductsList: React.FC<ProductListProps> = ({
  products,
  onOptionsClick,
  viewMode = 'card',
}) => {
  const { data } = useProductsQuery();

  if (viewMode === 'table') {
    return <ProductsTable products={data?.products ?? []} />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          imageUrl={product.imageUrl}
          onOptionsClick={onOptionsClick}
        />
      ))}
    </div>
  );
};

export default ProductsList;
