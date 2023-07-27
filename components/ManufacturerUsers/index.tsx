import { useManufacturerUsersQuery } from '@/graphql/queries/useManufacturerUserQuery';

export interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  manufacturerId: number;
  id: string;
}

const ManufacturerUsers = ({ manufacturerId, onChange, ...props }: SelectProps) => {
  const { data } = useManufacturerUsersQuery(manufacturerId);
  return (
    <select onChange={onChange} {...props}>
      <option defaultChecked>Select user</option>
      {data?.manufacturerUsers?.map((user) => (
        <option value={user.id} key={user.id}>{user.name}</option>
      ))}
    </select>
  );
};

export default ManufacturerUsers;
