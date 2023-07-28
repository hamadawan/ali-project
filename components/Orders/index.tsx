import React, { useState } from 'react';
import OrderTable from './OrderTable';

const initialOrders = [
  {
    id: '1',
    name: 'John Doe',
    item: 'Laptop',
    numberOfUnits: 1,
    totalPrice: 1200,
  },
  // Add more orders here
];

function Orders() {
  const [orders] = useState(initialOrders);

  const handleRowClick = (order) => {
    console.log('Selected order:', order);
    // Open the order component here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>
      <OrderTable orders={orders} onRowClick={handleRowClick} />
    </div>
  );
}

export default Orders;
