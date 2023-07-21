import * as React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const ManufacturerInformation: React.FunctionComponent = () => {
  const data = ['1123413', '2123213', '31312323'];
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 mt-[25px]">
        <div>
          <Input
            required={true}
            type="Nombre de la empresa"
            id="Nombre de la empresa"
            label="Nombre de la empresa"
            name="Nombre de la empresa"
            placeholder="Introducir nombre de la empresa"
          />
        </div>
        <div>
          <Input
            required={true}
            type="Nombre de contácto"
            id="Nombre de contácto"
            label="Nombre de contácto"
            name="Nombre de contácto"
            placeholder="Nombre completo"
            list="data"
          />
          <datalist id="data">
            {data.map((op) => (
              <option>{op}</option>
            ))}
          </datalist>
        </div>
        <div>
          <Input
            required={true}
            type="Tamaño de la empresa"
            id="Tamaño de la empresa"
            label="Tamaño de la empresa"
            name="Tamaño de la empresa"
            placeholder="Mediana"
          />
        </div>
        <div>
          <Input
            required={true}
            type="Industria"
            id="Industria"
            label="Industria"
            name="Industria"
            placeholder="Textil"
          />
        </div>
        <div>
          <Input
            required={true}
            type="street"
            id="street"
            label="Street"
            name="street"
            placeholder="Textil"
          />
        </div>
        <div>
          <Input
            required={true}
            type="Año de funcionamiento"
            id="Año de funcionamiento"
            label="Año de funcionamiento"
            name="Año de funcionamiento"
            placeholder="Textil"
          />
        </div>
        <div>
          <Input
            required={true}
            type="city"
            id="city"
            label="City"
            name="city"
            placeholder="City"
          />
        </div>
        <div>
          <Input
            required={true}
            type="state"
            id="state"
            label="State"
            name="state"
            placeholder="State"
          />
        </div>
        <div>
          <Input
            required={true}
            type="country"
            id="country"
            label="Country"
            name="country"
            placeholder="Country"
          />
        </div>
        <div>
          <Input
            required={true}
            type="zipcode"
            id="zipcode"
            label="Zipcode"
            name="zpicode"
            placeholder="Zipcode"
          />
        </div>
      </div>
      <Button variant="primary" className="mt-5 mb-[31px]">
        Guardar
      </Button>
    </div>
  );
};

export default ManufacturerInformation;
