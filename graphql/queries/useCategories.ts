import { gql, useQuery } from '@apollo/client';

const GET_CATEGORIES = gql`
	query GetCategories {
		categories {
			createdAt
			id
			name
			updatedAt
		}
	}
`;


export const useCategories = () => {
	const result = useQuery(GET_CATEGORIES);
	const { data, loading, error } = result;
	return {
		data,
		loading,
		error,
	};
};
