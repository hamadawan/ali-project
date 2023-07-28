import * as React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const ManufacturerInformation: React.FunctionComponent = () => {
  return (
    <div>
      <div className="mt-[25px] font-[Roboto] text-sm font-extrabold leading-[21px] text-[#170F49]">
        https://www.puentify.com/
        <span className="font-normal text-[#0860C6]">nombre-de-mi-tienda</span>
      </div>
      <Input
        required={true}
        type="email"
        id="email"
        name="email"
        placeholder="nombre-de-mi-tienda"
        className="w-full mt-2"
      />
      <Button variant="primary" className="mt-5" disabled={true}>
        Agregar dominio personalizado
      </Button>
      <Button variant="primary" className="mt-5 mb-8">
        Guardar
      </Button>
    </div>
  );
};

export default ManufacturerInformation;
