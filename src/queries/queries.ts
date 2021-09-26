import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    d_users {
      id
      name
      mail
      users_sns {
        sns_id
        url
      }
    }
  }
`;
