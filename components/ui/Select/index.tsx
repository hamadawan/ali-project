export interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string | number }[];
  error?: string;
  containerClass?: string;
}

const Select = ({
  options,
  onChange,
  value,
  error,
  containerClass,
  ...props
}: SelectProps) => {
  return (
    <div className={containerClass}>
      <select onChange={onChange} {...props} value={value}>
        <option defaultChecked>Select</option>
        {options?.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-600 pt-1">{error}</p>}
    </div>
  );
};

export default Select;
