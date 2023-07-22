import * as React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useTranslation } from 'next-i18next';

const ManufacturerInformation: React.FunctionComponent = () => {
  const data = ['1123413', '2123213', '31312323'];
  const { t } = useTranslation('dashboard');
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5 mt-[25px]">
        <div>
          <Input
            required={true}
            type="text"
            id="companyName"
            label={t('companyName')}
            name="companyName"
            placeholder="Introducir nombre de la empresa"
          />
        </div>
        <div>
          <label
            htmlFor="countries"
            className="block font-normal text-sm mb-2 leading-5 text-[#6F6C90]"
          >
            {t('contactName')}
          </label>
          <select
            id="contactName"
            required={true}
            name="contactName"
            placeholder="Nombre completo"
            className="w-full border px-4 py-4 rounded-[10px] text-sm font-normal leading-5 bg-[#fff] border-[#D2DAE2] text-[#576D99] focus:border-[#D2DAE2] focus:outline-none"
          >
            {data.map((op) => (
              <option key={op}>{op}</option>
            ))}
          </select>
        </div>
        <div>
          <Input
            required={true}
            type="number"
            id="companySize"
            label={t('companySize')}
            name="companySize"
            placeholder="Mediana"
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
          />
        </div>
        <div>
          <Input
            required={true}
            type="text"
            id="country"
            label={t('country')}
            name="country"
            placeholder="Pais"
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
          />
        </div>
      </div>
      <Button variant="primary" className="mt-5 mb-8">
        {t('buttonText')}
      </Button>
    </div>
  );
};

export default ManufacturerInformation;
