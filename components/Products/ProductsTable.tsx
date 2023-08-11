import React from 'react';
import Image from 'next/image';
type ProductData = {
  id: string;
  name: string;
  imageUrl: string;
};

type ProductTableProps = {
  products: ProductData[];
};

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  return (
    <table className="table-auto w-full">
      <thead>
      <tr className="bg-gray-200">
        <th className="px-4 py-2">Image</th>
        <th className="px-4 py-2">Name</th>
      </tr>
      </thead>
      <tbody>
      {products.map((product, index) => (
        <tr
          key={product.id}
          className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
        >
          <td className="px-4 py-2">
            <Image
              src={product.imageUrl || 'https://via.placeholder.com/100x75'}
              alt={product.name}
              className="w-16 h-12 object-cover"
              width="200"
              height="200"
            />
          </td>
          <td className="px-4 py-2">{product.name}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
