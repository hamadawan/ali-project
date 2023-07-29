import React, { useState } from 'react';
import { Button } from '../ui/button';
import { useUpdateStorefrontMutation } from '@/graphql/mutations/useUpdateStoreFrontMutation';

const ManufacturerInformation: React.FunctionComponent<{
  slug: string;
  manufacturerId: string;
  handleStepClick: Function;
}> = ({ slug, manufacturerId, handleStepClick }) => {
  const [updateStorefront] = useUpdateStorefrontMutation();
  const [errors, setErrors] = useState<any>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await updateStorefront({
      variables: {
        slug,
        input: {
          slug,
          isActive: true,
          manufacturerId,
        },
      },
    });

    if (result?.data?.updateStorefront) {
      handleStepClick(4);
    } else {
      setErrors(['Something went wrong!']);
    }
  };
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
      <Button variant="secondary" className="mt-6 mb-8">
        Publicar ahora
      </Button>
    </form>
  );
};

export default ManufacturerInformation;
