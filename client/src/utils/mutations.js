import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

const FOLLOW_USER = gql`
  mutation($followingId: String!, $userId: String!) {
    insert_Follow(
      objects: [{ follower_id: $userId, following_id: $followingId }]
    ) {
      affected_rows
    }
  }
`;

const UNFOLLOW_USER = gql`
  mutation($followingId: String!, $userId: String!) {
    delete_Follow(
      where: {
        follower_id: { _eq: $userId }
        following_id: { _eq: $followingId }
      }
    ) {
      affected_rows
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