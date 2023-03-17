import React from 'react';

interface Order {
  id: string;
  name: string;
  item: string;
  numberOfUnits: number;
  totalPrice: number;
}

interface OrderTableProps {
  orders: Order[];
  onRowClick: (order: Order) => void;
}

const OrderTable: React.FC<OrderTableProps> = ({ orders, onRowClick }) => {
  return (
    <table className="min-w-full table-auto">
      <thead className="bg-gray-800 text-white">
      <tr>
        <th className="px-6 py-3 text-left">Order ID</th>
        <th className="px-6 py-3 text-left">Name</th>
        <th className="px-6 py-3 text-left">Item</th>
        <th className="px-6 py-3 text-left">Number of Units</th>
        <th className="px-6 py-3 text-left">Total Price</th>
      </tr>
      </thead>
      <tbody className="bg-white">
      {orders.map((order) => (
        <tr
          key={order.id}
          className="hover:bg-gray-100 cursor-pointer"
          onClick={() => onRowClick(order)}
        >
          <td className="px-6 py-4">{order.id}</td>
          <td className="px-6 py-4">{order.name}</td>
          <td className="px-6 py-4">{order.item}</td>
          <td className="px-6 py-4">{order.numberOfUnits}</td>
          <td className="px-6 py-4">{order.totalPrice}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
