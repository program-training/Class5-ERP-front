import { gql } from "@apollo/client";

export const MUTATION_ADD_USER = gql`
mutation RegisterUser($input: UserInput!) {
  registerUser(input: $input) {
    email
  }
}
`;

export const MUTATION_LOGIN_USER = gql`
mutation LoginUser($input: UserInput!) {
  loginUser(input: $input) {
    resData {
      token
    }
  }
}
`

// export const QUERY_GET_INVENTORY = gql`
// query 
// `