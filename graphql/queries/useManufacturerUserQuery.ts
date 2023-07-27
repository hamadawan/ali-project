import { gql, useQuery } from '@apollo/client';

const GET_MANUFACTURER_USERS = gql`
	query GetManufacturerUser($manufacturerId: ID!) {
		manufacturerUsers(manufacturerId: $manufacturerId) {
      name
      id
      email
    }
	}
`;


export const useManufacturerUsersQuery = (manufacturerId: number) => {
  const result = useQuery(GET_MANUFACTURER_USERS, { variables: { manufacturerId } });
  const { data, loading, error } = result;
  return {
    data,
    loading,
    error,
  };
}
