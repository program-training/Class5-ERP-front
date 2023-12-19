import { gql } from "@apollo/client";

export const STATISTICS_SUBSCRIPTION = gql`
  subscription statisticChanged($productId: String!) {
    statisticChanged(productId: $productId) {
        product_id
        changed_on
        current_quantity
    }
  }
`