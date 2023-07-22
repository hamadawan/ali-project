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
            type="calle"
            id="calle"
            label="Calle"
            name="calle"
            placeholder="Calle"
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
            type="ciudad"
            id="ciudad"
            label="Ciudad"
            name="ciudad"
            placeholder="Ciudad"
          />
        </div>
        <div>
          <Input
            required={true}
            type="estado"
            id="estado"
            label="Estado"
            name="estado"
            placeholder="Estado"
          />
        </div>
        <div>
          <Input
            required={true}
            type="pais"
            id="Pais"
            label="Pais"
            name="pais"
            placeholder="Pais"
          />
        </div>
        <div>
          <Input
            required={true}
            type="codigo postal"
            id="codigo postal"
            label="Codigo postal"
            name="codigo postal"
            placeholder="Codigo postal"
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
