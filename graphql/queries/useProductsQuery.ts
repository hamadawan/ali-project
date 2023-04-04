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
  const result = useQuery(GET_PRODUCTS);
	const { data, loading, error } = result;
  return {
    data,
    loading,
    error,
  };
}
