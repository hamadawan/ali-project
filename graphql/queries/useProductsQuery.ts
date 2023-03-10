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
	console.log('useProductsQuery');
  const result = useQuery(GET_PRODUCTS);
	const { data, loading, error } = result;
	console.log(result)
  return {
    data,
    loading,
    error,
  };
}
