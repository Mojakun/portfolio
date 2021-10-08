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

export const GET_USER_BY_ID = gql`
  query GetUserById($id: uuid!) {
    d_users_by_pk(id: $id) {
      id
      name
      users_sns {
        sns_id
        url
      }
    }
  }
`;
