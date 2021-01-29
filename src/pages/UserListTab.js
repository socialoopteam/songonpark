// @ts-nocheck
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBDataTable } from "mdbreact";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../api/query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import MoonLoader from "react-spinners/MoonLoader";
import "../styles/roomlist.css";

export default function UserListTab(props) {
  const { loading, error, data, refetch } = useQuery(GET_USERS, {
    pollInterval: 500,
  });

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
    console.log(error)
    return (
      <div className="error-div">
        <p className="text-center font-weight-bold">
          {" "}
          {`Veuillez vérifier votre connexion internet.`}
        </p>
        <FontAwesomeIcon
          icon={faUndoAlt}
          color="#d32f2f "
          onClick={() => refetch()}
        />
      </div>
    );
  }
  const dataRows = {
    columns: [
      {
        label: "Nom & prenoms",
        field: "name",

        width: 200,
      },
      {
        label: "Email",
        field: "email",

        width: 200,
      },
      {
        label: "Téléphone",
        field: "phone",

        width: 100,
      },
      {
        label: "Statut",
        field: "role",

        width: 200,
      },
    ],
    rows: [...data.users],
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol sm="12">
          <MDBDataTable striped bordered sortable data={dataRows} responsive />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
