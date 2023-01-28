import * as React from 'react';
import { useRouter } from 'next/router';

const Manufacturer = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Manufacturer {id}</div>;
};

export default Manufacturer;
