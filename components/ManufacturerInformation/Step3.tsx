import * as React from 'react';
import { Button } from '../ui/button';

const ManufacturerInformation: React.FunctionComponent<{ handleStepClick: Function }> = ({
  handleStepClick,
}) => {
  return (
    <div>
      <Button variant="primary" className="mt-6 mb-8" onClick={() => handleStepClick(3)}>
        Agregar primer producto
      </Button>
    </div>
  );
};

export default ManufacturerInformation;
