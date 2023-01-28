import * as React from 'react';

interface FilterChipProps {
  id: string;
  title: string;
  active?: boolean;
  onClick: (id?: string) => void;
}

const FilterChip: React.FC<FilterChipProps> = ({
  id,
  title,
  active,
  onClick,
}) => (
  <p
    onClick={() => onClick(id)}
    className={`${active ? 'bg-purple-200' : null} px-4 py-2 border rounded-full cursor-pointer hover: shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100`}>
    {title}
  </p>
);
  export default FilterChip;
