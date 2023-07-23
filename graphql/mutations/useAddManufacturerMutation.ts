import { gql, useMutation } from '@apollo/client';

interface AddManufacturerMutationVariables {
  input: {
    name: string
    companySize: string
    industry: string
    street: string
    city: string
    state: string
    zipCode: string
    yearEstablished: string
    pointOfContactId: string
  }
}

interface AddManufacturerMutationData {
  createManufacturer: {
    id: string
    name: string
  }
}

const ADD_MANUFACTURER_MUTATION = gql`
  mutation AddManufacturer($input: ManufacturerInput!) {
    createManufacturer(attributes: $input) {
      id
      name
    }
  }
`;

export const useAddManufacturerMutation = () => {
  return useMutation<AddManufacturerMutationData, AddManufacturerMutationVariables>(ADD_MANUFACTURER_MUTATION);
}
