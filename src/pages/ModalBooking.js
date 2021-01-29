// @ts-nocheck
import React, { useState } from "react";
import {
  Modal,
  Row,
  Col,
  ModalBody,
  ModalHeader,
  Button,
  Form,
  Input,
  Label,
  FormGroup
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_BOOKING } from "../api/mutation";
import { GET_ROOMS } from "../api/query";
import "../styles/event_input.css";

export default function ModalBooking(props) {
  const [createReservation] = useMutation(ADD_BOOKING);
   const { data, loading, error } = useQuery(GET_ROOMS);
  //  const [modal, setModal] = useState(props.sate)

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    check_out_date: "",
    check_in_date: "",
    roomName: "",
  });
  const handleInput = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('form: ', form)
    createReservation({
      variables: { input: form }
    });
    setForm({
      name: "",
      email: "",
      address: "",
      phone: "",
      check_out_date: "",
      check_in_date: "",
      roomName: "",
    });
  };

  if(loading) return "Veuillez patienter"
  if(error) return 'erreur'
  
  return (
    <Modal
      isOpen={props.state}
      toggle={props.start}
    >
      <ModalHeader
        toggle={props.start}
        className="h5-responsive font-weight-bold"
      >
        {" "}
        Faire une reservation{" "}
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <Row form>
            <Col sm={6}>
              <FormGroup>
                <Label>Nom et prenoms </Label>
                <Input
                  type="text"
                  value={form.name}
                  name="name"
                  onChange={handleInput}
                  required
                />
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <Label>E-mail</Label>
                <Input
                  type="email"
                  value={form.email}
                  name="email"
                  onChange={handleInput}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col sm={6}>
              <FormGroup>
                <Label>Adresse</Label>
                <Input
                  type="text"
                  value={form.address}
                  name="address"
                  onChange={handleInput}
                  required
                />
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <Label>Telephone</Label>
                <Input
                  type="text"
                  value={form.phone}
                  name="phone"
                  onChange={handleInput}
                  required
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <FormGroup>
                <Label>Date d'arrivée</Label>
                <Input
                  type="date"
                  value={form.check_in_date}
                  name="check_in_date"
                  onChange={handleInput}
                  required
                />
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <Label>Date de départ</Label>
                <Input
                  type="date"
                  value={form.check_out_date}
                  name="check_out_date"
                  onChange={handleInput}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <select name="roomName" onChange={handleInput} value={form.roomName} className="form-control">
                {data.rooms.map((m) => (
                  <option key={m.id} value={m.name}>
                    {m.name}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
          <div className="btn-form mt-2">
            <Button title="Ajouter" color="success" type="submit">
              Ajouter <FontAwesomeIcon icon={faPlusCircle} />
            </Button>
            <Button onClick={props.start} color="danger">
              ANNULER <FontAwesomeIcon icon={faMinusCircle} />
            </Button>
          </div>
        </Form>
      </ModalBody>
    </Modal>
  );
}
