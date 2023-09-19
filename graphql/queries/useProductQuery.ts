import { gql, useQuery } from '@apollo/client';

const GET_PRODUCT = gql`
	query GetProducts($id: ID!) {
		product(id: $id) {
			id
			name
			description
			price
			currency
			images
			reviews {
				id
			}
			productVariants {
				id
				variant {
					id
					name
				}
				variantValue {
					id
					value
				}
			}
		}
	}
`;


export const useProductQuery = (id: number) => {
	const result = useQuery(GET_PRODUCT, { variables: { id } });
	const { data, loading, error } = result;
	return {
		data,
		loading,
		error,
	};
};
