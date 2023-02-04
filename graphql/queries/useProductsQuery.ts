import {gql, useQuery} from '@apollo/client';

const GET_PRODUCTS = gql`
	query GetProducts {
		products {
			id
			name
			description
		}
	}
`;


export const useProductsQuery = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  return {
    data,
    loading,
    error,
  };
}
