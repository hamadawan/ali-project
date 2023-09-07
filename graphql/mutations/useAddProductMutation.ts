import { gql, useMutation } from '@apollo/client';

interface AddProductMutationVariables {
  input: {
    name: string;
    description: string;
    categoryId: string;
    price?: number;
    status?: string;
    currency?: string;
    productVariants?: ProductVariant[];
  }
}

interface ProductVariant {
  name: string;
  description: string;
  price: number;
  status: string;
  currency: string;
  productVariants: ProductVariant[];
}

interface AddProductMutationData {
  createProduct: {
    id: string;
    name: string;
    price: number;
    description: string;
  }
}

const ADD_PRODUCT_MUTATION = gql`
  mutation AddProductMutation($input: ProductInput!) {
    createProduct(attributes: $input) {
      id
      name
      price
      description
    }
  }
`;

export const useAddProductMutation = () => {
  return useMutation<AddProductMutationData, AddProductMutationVariables>(ADD_PRODUCT_MUTATION);
}
