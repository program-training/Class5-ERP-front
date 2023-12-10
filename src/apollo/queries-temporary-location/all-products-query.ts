import { gql } from "@apollo/client";

export const QUERY_ALL_PRODUCT = gql`
query GetProducts {
  getProducts {
  category
  costPrice
  createdBy
  description
  discountPercentage
  id
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