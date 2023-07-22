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
            id="company_name"
            label={t('company_name')}
            name="company_name"
            placeholder="Introducir nombre de la empresa"
          />
        </div>
        <div>
          <Input
            required={true}
            type="text"
            id="contact_name"
            label={t('Contact_name')}
            name="contact_name"
            placeholder="Nombre completo"
            list="data"
          />
          <datalist id="data">
            {data.map((op) => (
              <option key={op}>{op}</option>
            ))}
          </datalist>
        </div>
        <div>
          <Input
            required={true}
            type="number"
            id="company_size"
            label={t('company_size')}
            name="company_size"
            placeholder="Mediana"
          />
        </div>
        <div>
          <Input
            required={true}
            type="text"
            id="industry"
            label={t('Industry')}
            name="industry"
            placeholder="Textil"
          />
        </div>
        <div>
          <Input
            required={true}
            type="text"
            id="street"
            label={t('Street')}
            name="street"
            placeholder="Calle"
          />
        </div>
        <div>
          <Input
            required={true}
            type="number"
            id="operation_year"
            label={t('Operation_year')}
            name="operation_year"
            placeholder="Textil"
          />
        </div>
        <div>
          <Input
            required={true}
            type="text"
            id="city"
            label={t('City')}
            name="city"
            placeholder="Ciudad"
          />
        </div>
        <div>
          <Input
            required={true}
            type="text"
            id="state"
            label={t('State')}
            name="state"
            placeholder="Estado"
          />
        </div>
        <div>
          <Input
            required={true}
            type="text"
            id="country"
            label={t('Country')}
            name="country"
            placeholder="Pais"
          />
        </div>
        <div>
          <Input
            required={true}
            type="number"
            id="zipcode"
            label={t('Zipcode')}
            name="zipcode"
            placeholder="Codigo postal"
          />
        </div>
      </div>
      <Button variant="primary" className="mt-5 mb-8">
       {t('ButtonText')}
      </Button>
    </div>
  );
};


export default ManufacturerInformation;
