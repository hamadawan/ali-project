import { gql, useMutation } from '@apollo/client';

interface UpdateStorefrontVariables {
  slug: string;
  input: {
    isActive: boolean
    slug: string;
    manufacturerId: string;
  }
}

interface UpdateStorefrontData {
  updateStorefront: {
    id: string
    slug: string
    manufacturerId: string
  }
}

const UPDATE_STOREFRONT_MUTATION = gql`
  mutation UpdateStorefront($slug: String!, $input: StorefrontInput!) {
    updateStorefront(slug: $slug, attributes: $input) {
      id
      slug
      isActive
    }
  }
`;

export const useUpdateStorefrontMutation = () => {
  return useMutation<UpdateStorefrontData, UpdateStorefrontVariables>(UPDATE_STOREFRONT_MUTATION);
}
