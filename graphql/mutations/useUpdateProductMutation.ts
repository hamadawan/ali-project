import { gql, useMutation } from '@apollo/client';

interface UpdateProductMutationVariables {
  id: number;
  input: {
    name: string;
    description: string;
    price: number;
    status: string;
    currency: string;
    productVariants: ProductVariant[];
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

interface UpdateProductMutationData {
  updateProduct: {
    id: string;
    name: string;
    price: number;
    description: string;
    status: string;
  }
}

const UPDATE_PRODUCT_MUTATION = gql`
  mutation AddProductMutation($id: ID, $input: ProductInput!) {
    updateProduct(id: $id ,attributes: $input) {
      id
      name
      price
      description
      status
    }
  }
`;

export const useUpdateProductMutation = () => {
  return useMutation<UpdateProductMutationData, UpdateProductMutationVariables>(UPDATE_PRODUCT_MUTATION);
}
