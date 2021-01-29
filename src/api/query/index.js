import {gql} from "@apollo/client";

export const GET_ROOMS = gql`
  query {
    rooms {
      id
      name
      price
      quantity
      capacity
      description
      position
      cover{
        filename
      }
    }
  }
`;

export const GET_ROOM = gql`
  query getRoom($input: ID!) {
    room(id: $input) {
      id
      name
      price
      quantity
      capacity
      description
      position
      cover {
        filename
      }
    }
  }
`;

export const GET_BOOKINGS = gql`
  query {
    bookings {
      id
      name
      # email
      phone
      # address
      roomName
      check_in_date
      check_out_date
    }
  }
`;

export const GET_USERS = gql`
  query {
    users {
      name
      email
      phone
      role
    }
  }
`;