import { gql } from "@apollo/client";

export const GET_CHANGE = gql`
  query ($getProductStatisticsId: String!) {
    getProductStatistics(id: $getProductStatisticsId) {
      product_id
      changed_on
      current_quantity
    }
  }
`;
