import { gql } from "@apollo/client";

export const statisticChanged = gql`
  subscription statisticChanged($productId: ID!) {
    commentAdded(productId: $productId) {
        product_id
        changed_on
        current_quantity
    }
  }
`