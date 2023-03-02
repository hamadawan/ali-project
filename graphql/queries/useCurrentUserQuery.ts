import {gql, useQuery} from '@apollo/client';

const GET_CURRENT_USER = gql`
	query GetCurrentUser {
		currentUser {
			id
			name
		}
	}
`;


export const useCurrentUserQuery = () => {
  const { data, loading, error } = useQuery(GET_CURRENT_USER);

  return {
    data,
    loading,
    error,
  };
}
