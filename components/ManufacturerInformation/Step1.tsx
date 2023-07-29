import { useUpdateManufacturerMutation } from '@/graphql/mutations/useUpdateManufacturerMutation';
import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useTranslation } from 'next-i18next';
import UserSelect from '../UserSelect';
import { useCurrentUserQuery } from '@/graphql/queries/useCurrentUserQuery';

const ManufacturerInformation: React.FunctionComponent<{
  manufacturerId: string,
  handleStepClick: Function;
}> = ({ handleStepClick, manufacturerId }) => {
  const { t } = useTranslation('dashboard');
  const [updateManufacturer] = useUpdateManufacturerMutation();
  const { data } = useCurrentUserQuery();

  const [companyName, setCompanyName] = useState('');
  const [companySize, setCompanySize] = useState<number | null>(null);
  const [industry, setIndustry] = useState('');
  const [operationYear, setOperationYear] = useState<number | null>(null);
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [pointOfContactId, setPointOfContactId] = useState<number | null>(null);
  const [errors, setErrors] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await updateManufacturer({
      variables: {
        manufacturerId,
        input: {
          name: companyName,
          companySize: companySize || 0,
          industry,
          yearEstablished: operationYear || 0,
          street,
          state,
          city,
          zipCode,
          pointOfContactId: pointOfContactId || 0,
        },
      },
    });

    if (result.data?.updateManufacturer) {
      handleStepClick(1);
    } else {
      setErrors(['Something went wrong!']);
    }
  };

  return (
    <>
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
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-5 mt-[25px]">
          <div>
            <Input
              required={true}
              type="text"
              id="companyName"
              label={t('companyName')}
              name="companyName"
              placeholder="Introducir nombre de la empresa"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="countries"
              className="block font-normal text-sm mb-2 leading-5 text-[#6F6C90]"
            >
              {t('manufacturerUsers')}
            </label>
            <UserSelect
              manufacturerId={+data?.currentUser?.currentManufacturer?.id}
              onChange={(e) => setPointOfContactId(+e.target.value)}
              id="manufacturerUsers"
              required={true}
              name="manufacturerUsers"
              placeholder="Manufacturer Users"
              className="w-full border px-4 py-4 rounded-[10px] text-sm font-normal leading-5 bg-[#fff] border-[#D2DAE2] text-[#576D99] focus:border-[#D2DAE2] focus:outline-none"
            />
          </div>
          <div>
            <Input
              required={true}
              type="number"
              id="companySize"
              label={t('companySize')}
              name="companySize"
              placeholder="Mediana"
              value={companySize}
              onChange={(e) => setCompanySize(+e.target.value)}
            />
          </div>
          <div>
            <Input
              required={true}
              type="text"
              id="industry"
              label={t('industry')}
              name="industry"
              placeholder="Textil"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
          </div>
          <div>
            <Input
              required={true}
              type="text"
              id="street"
              label={t('street')}
              name="street"
              placeholder="Calle"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div>
            <Input
              required={true}
              type="number"
              id="operationYear"
              label={t('operationYear')}
              name="operationYear"
              placeholder="Textil"
              value={operationYear}
              onChange={(e) => setOperationYear(+e.target.value)}
            />
          </div>
          <div>
            <Input
              required={true}
              type="text"
              id="city"
              label={t('city')}
              name="city"
              placeholder="Ciudad"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <Input
              required={true}
              type="text"
              id="state"
              label={t('state')}
              name="state"
              placeholder="Estado"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div>
            <Input
              required={true}
              type="number"
              id="zipCode"
              label={t('zipCode')}
              name="zipCode"
              placeholder="Codigo postal"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
        </div>
        <Button variant="primary" className="mt-5 mb-8" type="submit">
          {t('buttonText')}
        </Button>
      </form>
    </>
  );
};

export default ManufacturerInformation;
