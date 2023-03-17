import React, { useState } from 'react';
import { useAddProductMutation } from '@/graphql/mutations/useAddProductMutation';

type AddProductFormProps = {

};

const AddProductForm: React.FC<AddProductFormProps> = () => {
  const [addProduct, { loading, error }] = useAddProductMutation();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [minQuantity, setMinQuantity] = useState(0);
  const [maxQuantity, setMaxQuantity] = useState(0);

  const [imageUrl, setImageUrl] = useState('');

  const onSubmit = () => {
    console.log('hi', { name, description, price, minQuantity, maxQuantity, imageUrl}, 'hi')
  addProduct({ variables: { name, description, price, minQuantity, maxQuantity, imageUrl}})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
    setName('');
    setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Product Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
         Price
        </label>
        <input
          type="number"
          id="price"
          value={minQuantity}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="minQuantity" className="block text-sm font-medium text-gray-700">
          Min Quantity
        </label>
        <input
          type="number"
          id="minQuantity"
          value={minQuantity}
          onChange={(e) => setMinQuantity(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="maxQuantity" className="block text-sm font-medium text-gray-700">
          Max Quantity
        </label>
        <input
          type="number"
          id="maxQuantity"
          value={maxQuantity}
          onChange={(e) => setMaxQuantity(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
