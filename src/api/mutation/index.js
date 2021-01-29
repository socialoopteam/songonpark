import { gql } from "@apollo/client";

export const ADD_ROOM = gql`
  mutation newRoom($input: roomInput!) {
    createRoom(input: $input) {
      name
      price
      description
      breakfast
      quantity
      position
      capacity
      cover {
        filename
        mimetype
        encoding
      }
    }
  }
`;

export const ADD_BOOKING = gql`
  mutation newReservation($input: reservationInput!) {
    createReservation(input: $input) {
      id
      name
      email
      phone
      address
      check_in_date
      check_out_date
      roomName
      date
    }
  }
`;

export const ADD_USER = gql`
  mutation newUser($input: userInput!) {
    createUser(input: $input) {
    name
    email
    role
    phone
    password
    }
  }
`;

export const LOGIN_USER = gql`
  mutation newLogin($input: loginInput!) {
    login(input: $input) {
      name
      role
      token
    }
  }
`;

export const DELETE_ROOM = gql`
  mutation roomDelete($id: ID!) {
    deleteRoom(id: $id) {
      id
      name
      price
      description
      breakfast
      quantity
      position
      capacity
      cover {
        filename
        mimetype
        encoding
      }
    }
  }
`;
