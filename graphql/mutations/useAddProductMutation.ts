import { gql, useMutation } from '@apollo/client';

interface AddProductMutationVariables {
  input: {
    name: string;
    description: string;
    price: number;
    status: number;
    currency: string;
    productVariants: ProductVariant[];
  }
}

interface ProductVariant {
  name: string;
  description: string;
  price: number;
  status: number;
  currency: string;
  productVariants: ProductVariant[];
}

interface AddProductMutationData {
  createProduct: {
    id: string;
    name: string;
    price: number;
    description: string;
    status: number;
  }
}

const ADD_PRODUCT_MUTATION = gql`
  mutation AddProductMutation($input: ProductInput!) {
    createProduct(attributes: $input) {
      id
      name
      price
      description
      status
    }
  }
`;

export const useAddProductMutation = () => {
  return useMutation<AddProductMutationData, AddProductMutationVariables>(ADD_PRODUCT_MUTATION);
}
