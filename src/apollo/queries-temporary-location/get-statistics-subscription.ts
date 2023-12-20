import { gql } from "@apollo/client";

export const STATISTICS_SUBSCRIPTION = gql`
  subscription Subscription($productId: ID!) {
  statisticChanged(productId: $productId) {
    changed_on
    current_quantity
    product_id
  }
}
`