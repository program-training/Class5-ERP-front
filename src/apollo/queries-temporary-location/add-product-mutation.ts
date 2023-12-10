import { gql } from "@apollo/client";

export const MUTATION_ADD_PRODUCT = gql`
mutation AddProduct($input: addProductInput!) {
  addProduct(input: $input) {
    id
    name
    salePrice
    quantity
    description
    category
    discountPercentage
    imageUrl
    imageAlt
    isForSale
    costPrice
    supplier
    createdBy
  }
}
`