import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useAddStorefrontMutation } from '@/graphql/mutations/useAddStoreFrontMutation';

const ManufacturerInformation: React.FunctionComponent<{
  handleStepClick: Function;
  setSlug: Function;
  manufacturerId: string;
  slug: string;
}> = ({ handleStepClick, manufacturerId, setSlug, slug }) => {
  const [createStorefront] = useAddStorefrontMutation();
  const [errors, setErrors] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await createStorefront({
      variables: {
        input: {
          slug,
          manufacturerId,
        },
      },
    });

    if (result?.data?.createStorefront) {
      handleStepClick(2);
    } else {
      setErrors(['Something went wrong!']);
    }
  };

  console.log('nombre de mi tienda', slug)
  return (
    <form onSubmit={handleSubmit}>
      {errors && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Please fix the following:</strong>
          <ul>
            {errors?.map((error: any) => (
              <span key={error} className="block sm:inline">
                {error}
              </span>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-[25px] font-[Roboto] text-sm font-extrabold leading-[21px] text-[#170F49]">
        <p>https://www.puentify.com/{slug.length > 0 ? slug : 'nombre-de-mi-tienda'}</p>
      </div>
      <Input
        required={true}
        type="text"
        id="slug"
        name="slug"
        placeholder="nombre-de-mi-tienda"
        className="w-full mt-2"
        onChange={(e) => setSlug(e.target.value)}
      />
      <Button type="submit" variant="primary" className="mt-5 mb-8">
        Guardar
      </Button>
    </form>
  );
};

export default ManufacturerInformation;
