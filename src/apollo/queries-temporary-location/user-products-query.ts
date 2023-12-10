import { gql } from "@apollo/client";

export const QUERY_MY_PRODUCTS = gql`
query GetMyProducts {
  getMyProducts {
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