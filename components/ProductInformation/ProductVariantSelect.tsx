import * as React from 'react';
import Select from '@/components/ui/Select';

interface ProductVariantSelectProps {
  id: string;
  label: string;
  value: string;
  options: { label: string, value: string }[];
  onChange: (id: string) => void;
}

const ProductVariantSelect: React.FC<ProductVariantSelectProps> = ({
  id,
  label,
  value,
  options,
  onChange,
}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="text-[#7D7D7D] text-base font-semibold uppercase text-center pt-3 w-[103px] h-[74px] rounded-[10px] border border-solid border-[#00000033]">
      { label }
      <Select
        onChange={handleChange}
        required={true}
        id="cantidad"
        type="number"
        className="border-none bg-transparent"
        options={options}
      />
    </div>
  );
};

export default ProductVariantSelect;
