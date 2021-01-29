import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import HomePills from "./HomePills";
import ModalRoom from "./ModalRoom";
import ModalBooking from "./ModalBooking";
import ModalUser from "./ModalUser";

export default function HomeEvent({ logout }) {

  const [modal, setModal] = useState(false);
  const [usertype, setUserType] = useState('')
  const [modalroom, setModalRoom] = useState(false);
  const [modaluser, setModalUser] = useState(false);
  const toogle = () => setModal(!modal);
  const toogleRoom = () => setModalRoom(!modalroom);
  const toogleUser = () => setModalUser(!modaluser);

  useEffect(() => {
    setUserType(localStorage.getItem("@role"));
  }, [])

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol sm="10" className="mt-2">
          <h1 className="h1-responsive text-center font-weight-bold">
            {" "}
            SONGON PARK HOTEL
          </h1>
        </MDBCol>
        <MDBCol sm="2" className="mt-3">
          <MDBBtn
            size="sm"
            rounded
            color="red"
            title="Se deconnecter"
            onClick={() => logout()}
          >
            <FontAwesomeIcon icon={faPowerOff} />
          </MDBBtn>
        </MDBCol>
      </MDBRow>
      <hr className="hr-light" />

      <MDBRow className="my-3">
        <MDBCol sm="4">
          <MDBBtn onClick={() => setModalRoom(!modalroom)}  disabled={usertype === 'ADMIN' ? false : true}>
            Ajouter une chambre <i className="fa fa-home"></i>
          </MDBBtn>
        </MDBCol>

        <MDBCol sm="4">
          <MDBBtn onClick={() => setModal(!modal)} color="success">
            Faire une reservation <i className="fa fa-bed"></i>
          </MDBBtn>
        </MDBCol>

        <MDBCol sm="4">
          <MDBBtn color="secondary" onClick={() => setModalUser(!modaluser)} disabled={usertype === 'ADMIN' ? false : true}>
            Ajouter un utilisateur <i className="fa fa-user"></i>
          </MDBBtn>
        </MDBCol>

        <ModalBooking state={modal} start={toogle} />
        <ModalRoom state={modalroom} start={toogleRoom} />
        <ModalUser state={modaluser} start={toogleUser} />
      </MDBRow>

      <MDBRow className="my-3">
        <MDBCol sm="12" className="my-3">
          <h3 className="h3-responsive text-center font-weight-bold">
            {" "}
            GESTION DES CHAMBRES, RESERVATIONS ET UTILISATEURS
          </h3>
          <hr style={{ width: "40%" }} />
        </MDBCol>
      </MDBRow>
      <HomePills userType={usertype}/>
    </MDBContainer>
  );
}
