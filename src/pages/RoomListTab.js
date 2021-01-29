// @ts-nocheck
import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ROOMS } from "../api/query";
import { DELETE_ROOM } from "../api/mutation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUndoAlt,
} from "@fortawesome/free-solid-svg-icons";
import MoonLoader from "react-spinners/MoonLoader";
import "../styles/roomlist.css";
//import "../styles/home.css";
import {
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/roomlist.css";
import "../styles/home.css";
import { Button } from "reactstrap";


export default function RoomListTab(props) {
  const { loading, error, data, refetch } = useQuery(GET_ROOMS, {
    pollInterval: 200,
  });
  const [deleteRoom] = useMutation(DELETE_ROOM);

  if (loading) {
    return (
      <div className="loader-div">
        <p className="text-center mx-3 center font-weight-bold mt-2">
          Chargement des données. Veuillez patienter...
        </p>
        <MoonLoader size={50} color={"#00c851"} loading={props.start} />
      </div>
    );
  }
  if (error) {
    return (
      <div className="error-div">
        <p className="text-center font-weight-bold">
          {" "}
          {`Impossible de récupérer les données. Veuillez vérifier votre connexion internet.`}
        </p>
          <FontAwesomeIcon icon={faUndoAlt} color="#d32f2f " onClick={() => refetch()}/>
      </div>
    );
  }
  
  const handleDeleteRoom = (args) => {
    console.log(args)
    deleteRoom({
      variables: { id: args },
      update: refetch,
    });
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol sm="12" className="card-col">
          {data.rooms.map((m) => (
            <MDBCard style={{ width: "22rem", margin: 9 }} key={m.id}>
              <MDBCardImage
                className="img-fluid"
                src={m.cover.filename}
                waves
                style={{ width: "370px", height: "270px" }}
              />
              <MDBCardBody>
                <MDBCardTitle className="font-weight-bold">
                  {" "}
                  {m.name}
                </MDBCardTitle>
                <hr />
                <MDBCardText>{m.description}</MDBCardText>
                <span>Prix: {m.price} FCFA</span> <br />
                <span>Petit déjeuner: {m.breakfast}</span>
                <br />
                <span>Quantité: {m.quantity} chambre(s)</span> <br />
                <span>Capacité: {m.capacity} personne(s)</span>
              </MDBCardBody>
              <div className="rounded-bottom  text-center pt-3">
                <ul className="list-unstyled list-inline font-small">
                  <li className="list-inline-item pr-4 white-text">
                    <Button disabled={props.typeUser === 'ADMIN' ? false : true} className="white-text" onClick={() => handleDeleteRoom(m.id)}>
                      <FontAwesomeIcon icon={faTrashAlt}/> Supprimer
                    </Button>
                  </li>
                  {/* <li className="list-inline-item pr-4">
                    <Link to="#" className="white-text">
                      <FontAwesomeIcon icon={faEdit}/> Modifier
                    </Link>
                  </li> */}
                </ul>
              </div>
            </MDBCard>
          ))}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
