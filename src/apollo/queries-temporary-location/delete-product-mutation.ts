import { gql } from "@apollo/client";

const MUTATION_DELETE_PRODUCT = gql`
mutation DeleteProduct($input: deleteProductInput) {
  deleteProduct(input: $input) {
    id
  }
}
`

export default MUTATION_DELETE_PRODUCT