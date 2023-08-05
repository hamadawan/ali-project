export interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  options: { name: string; value: string }[];
}

const Select = ({ options, onChange, value, ...props }: SelectProps) => {
  return (
    <select onChange={onChange} {...props} value={value}>
      <option defaultChecked>Select</option>
      {options?.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  
  );
};

export default Select;
