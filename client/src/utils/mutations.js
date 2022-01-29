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

export const ADD_PHOTO = gql`
  mutation addPhoto($photoFile: String!)
    addPhoto(photoFile: $photoFile) {
      _id
      photoFile
      photoAuthor
      createdAt
      comments {S
        _id
        commentText
      }
      likes {
        _id
      }
      followers {
        follower_id
        following_id
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($photoId: ID!, $commentText: String!) {
    addComment(photoId: $photoId, commentText: $commentText) {
      _id
      photoFile
      photoAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($photoId: ID!, $commentText: String!) {
    removeComment(photoId: $photoId, commentText: $commentText) {
      _id
      photoFile
      photoAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;



export const ADD_FOLLOWER = gql`
  mutation addFollower($followingId: String!, $userId: String!) {
    insert_Follow(
      objects: [{ follower_id: $userId, following_id: $followingId }]
    ) {
      affected_rows
    }
  }
`;

export const REMOVE_FOLLOWER = gql`
  mutation removeFollower($followingId: String!, $userId: String!) {
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

export const ADD_LIKE = gql`
  mutation addLike($postId: Int!, $userId: String!) {
    insert_Like(objects: [{ 
      post_id: $postId, 
      user_id: $userId }]) {
      affected_rows
    }
  }
`;

export const REMOVE_LIKE = gql`
  mutation removeLike($postId: Int!, $userId: String!) {
    delete_Like(
      where: { 
        user_id: { _eq: $userId },
         post_id: { _eq: $postId } }
    ) {
      affected_rows
    }
  }
`;