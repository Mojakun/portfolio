import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    d_users {
      id
      name
      original_id
      mail
      password
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

export const GET_USER_BY_ORIGINAL_ID = gql`
  query GetUserByOriginalId($original_id: String!) {
    d_users(where: { original_id: { _eq: $original_id } }) {
      id
      name
      original_id
      mail
      password
      content
      users_sns {
        sns_id
        url
      }
    }
  }
`;

export const GET_M_CATEGORIES = gql`
  query GetMCategories {
    m_categories_header {
      id
      name
      m_categories_details {
        id
        header_id
        name
      }
    }
  }
`;
