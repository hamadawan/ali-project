import { gql, useMutation } from '@apollo/client';

interface UpdateManufacturerMutationVariables {
  manufacturerId: string;
  input: {
    name: string
    companySize: number
    industry: string
    street: string
    city: string
    state: string
    zipCode: string
    yearEstablished: number
    pointOfContactId: number
  }
}

interface UpdateManufacturerMutationData {
  updateManufacturer: {
    id: string
    name: string
  }
}

const UPDATE_MANUFACTURER_MUTATION = gql`
	mutation UpdateManufacturer($manufacturerId: ID!, $input: ManufacturerInput!) {
		updateManufacturer(id: $manufacturerId, input: $input) {
			id
			name
		}
	}
`;

export const useUpdateManufacturerMutation = () => {
  return useMutation<UpdateManufacturerMutationData, UpdateManufacturerMutationVariables>(UPDATE_MANUFACTURER_MUTATION);
};
