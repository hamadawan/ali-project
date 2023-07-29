import { gql, useQuery } from '@apollo/client';

const GET_CURRENT_USER = gql`
	query GetCurrentUser {
		currentUser {
			id
			firstName
      currentManufacturer {
        id
        name
        email
      }
		}
	}
`;


export const useCurrentUserQuery = () => {
  const result = useQuery(GET_CURRENT_USER);
  const { data, loading, error } = result;

  return {
    data,
    loading,
    error,
  };
};
