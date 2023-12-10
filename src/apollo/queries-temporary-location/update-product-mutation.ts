import { gql } from "@apollo/client";

const MUTATION_UPDATE_PRODUCT = gql`
mutation UpdateProduct($input: updateProductInput) {
  updateProduct(input: $input) {
    id
    category
    costPrice
    createdBy 
    description
    discountPercentage
    imageAlt
    imageUrl
    isForSale
    name
    quantity
    salePrice
    supplier
  }
}
`

export default MUTATION_UPDATE_PRODUCT