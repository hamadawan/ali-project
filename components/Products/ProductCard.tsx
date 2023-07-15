
import React from 'react';

type ProductProps = {
  id: string;
  name: string;
  imageUrl: string;
  onOptionsClick: (id: string) => void;
};

const ProductCard: React.FC<ProductProps> = ({
  id,
  name,
  imageUrl,
  onOptionsClick,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <a href={`/product/${id}`}>
        <img
          className="w-full h-48 object-cover rounded-lg"
          src={imageUrl || 'https://via.placeholder.com/300x200'}
          alt={name}
        />
      </a>
      <div className="flex justify-between mt-2">
        <div className="text-xl font-bold">{name}</div>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={() => onOptionsClick(id)}
        >
          <i className="fas fa-ellipsis-v"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
