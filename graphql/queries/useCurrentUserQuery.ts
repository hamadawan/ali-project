import {gql, useQuery} from '@apollo/client';

const GET_CURRENT_USER = gql`
	query GetCurrentUser {
		currentUser {
			id
			firstName
		}
	}
`;


export const useCurrentUserQuery = () => {
  const result = useQuery(GET_CURRENT_USER);
  const { data, loading, error } = result;
  console.log(result)

  return {
    data,
    loading,
    error,
  };
}
