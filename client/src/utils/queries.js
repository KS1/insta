import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;

export const FETCH_FOLLWERS = gql`
  query($followingId: String!, $userId: String!) {
    Follow(
      where: {
        follower_id: { _eq: $userId }
        following_id: { _eq: $followingId }
      }
    ) {
      id
    }
  }
`;

export const QUERY_LIKE = gql`
  mutation($postId: Int!, $userId: String!) {
    insert_Like(objects: [{ 
      post_id: $postId, 
      user_id: $userId }]) {
      affected_rows
    }
  }
`;

export const QUERY_DELETE_LIKE = gql`
  mutation($postId: Int!, $userId: String!) {
    delete_Like(
      where: { 
        user_id: { _eq: $userId },
         post_id: { _eq: $postId } }
    ) {
      affected_rows
    }
  }
`;
