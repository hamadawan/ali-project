import { gql, useMutation } from '@apollo/client';

interface UpdateProductMutationVariables {
  id: number;
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

interface UpdateProductMutationData {
  createProduct: {
    id: string;
    name: string;
    price: number;
    description: string;
    status: number;
  }
}

const UPDATE_PRODUCT_MUTATION = gql`
  mutation AddProductMutation($id: ID, $input: ProductInput!) {
    createProduct(id: $id ,attributes: $input) {
      id
      name
      price
      description
      status
    }
  }
`;

export const useAddProductMutation = () => {
  return useMutation<UpdateProductMutationData, UpdateProductMutationVariables>(UPDATE_PRODUCT_MUTATION);
}
