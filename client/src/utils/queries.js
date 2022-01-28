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

export const QUERY_LIKES = gql`
  query($id: Int!, $userId: String!) {
    Post(where: { id: { _eq: $id } }) {
      Likes_aggregate {
        aggregate {
          count
        }
      }
      Likes(where: { user_id: { _eq: $userId } }) {
        id
      }
    }
  }
`;


export const QUERY_FOLLOWERS = gql`
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


