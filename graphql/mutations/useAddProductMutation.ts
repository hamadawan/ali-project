import { gql, useMutation } from '@apollo/client';

interface AddProductMutationVariables {
  name: string;
  price: number;
  description: string;
  minQuantity: number;
  maxQuantity: number;
}

interface AddProductMutationData {
  createProduct: {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
  }
}

const ADD_PRODUCT_MUTATION = gql`
  mutation AddProductMutation($input: ProductInput!) {
    createProduct(input: $input) {
      id
      name
      price
      description
      image
      minQuantity
      maxQuantity
    }
  }
`;

export const useAddProductMutation = (input) => {
  const [mutate, result] = useMutation<AddProductMutationData, AddProductMutationVariables>(ADD_PRODUCT_MUTATION);
  const createProduct = () => mutate(input);

  return [createProduct, result]
}
