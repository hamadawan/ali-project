import * as React from 'react';
import { useProductsQuery } from '@/graphql/queries/useProductsQuery';
import ProductsList from '@/components/Products/ProductsList';
import AddProductModal from '@/components/Products/AddProductModal';


type ViewMode = 'card' | 'table';

const Products = () => {
  const { data } = useProductsQuery();
  const [isOpen, setIsModalOpen] = React.useState(false);
  const [viewMode, setViewMode] = React.useState<ViewMode>('card');

  return (
    <div>
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <button
              onClick={() => setViewMode('card')}
              className={`px-4 py-2 mr-2 rounded-md ${
                viewMode === 'card' ? 'bg-[#26b9f1] text-white' : 'bg-gray-200'
              }`}
            >
              Card View
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-4 py-2 rounded-md ${
                viewMode === 'table' ? 'bg-[#26b9f1] text-white' : 'bg-gray-200'
              }`}
            >
              Table View
            </button>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#26b9f1] text-white px-6 py-2 rounded-md"
          >
            Add Product
          </button>
        </div>
        <ProductsList products={data?.products ?? []} onOptionsClick={console.log} viewMode={viewMode} />
        <AddProductModal isOpen={isOpen} setIsOpen={setIsModalOpen} />
    </div>
    </div>


  );
};

export default Products;
