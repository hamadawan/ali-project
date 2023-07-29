import { gql, useMutation } from '@apollo/client';

interface AddStorefrontVariables {
  input: {
    slug: string
    manufacturerId: string
  }
}

interface AddStorefrontData {
  createStorefront: {
    id: string
    slug: string
    manufacturerId: string;
  }
}

const ADD_STOREFRONT_MUTATION = gql`
  mutation AddStorefront($input: StorefrontInput!) {
    createStorefront(attributes: $input) {
      id
      slug
    }
  }
`;

export const useAddStorefrontMutation = () => {
  return useMutation<AddStorefrontData, AddStorefrontVariables>(ADD_STOREFRONT_MUTATION);
}
