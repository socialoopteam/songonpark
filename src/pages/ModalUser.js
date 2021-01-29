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
  FormGroup,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_USER } from "../api/mutation";
import { GET_USERS } from "../api/query";
import "../styles/event_input.css";

export default function ModalUser(props) {
  const [createUser] = useMutation(ADD_USER);
  const { loading, error } = useQuery(GET_USERS);
//   const [modal, setModal] = useState(props.sate);

  const roleuser = ['', 'ADMIN', 'UTILISATEUR']

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    password: ""
  });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser({
      variables: { input: form },
    });
    setForm({
      name: "",
      email: "",
      phone: "",
      role: "",
      password: ""
    });
  };

  if (loading) return "Veuillez patienter";
  if (error) return "erreur";
  return (
    <Modal isOpen={props.state} toggle={props.start}>
      <ModalHeader
        toggle={props.start}
        className="h5-responsive font-weight-bold"
      >
        {" "}
        Ajouter un utilisateur{" "}
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
                <Label>Mot de passe</Label>
                <Input
                  type="password"
                  value={form.password}
                  name="password"
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
            <Col sm={12}>
              <Label>Statut</Label>
              <select
                name="role"
                onChange={handleInput}
                value={form.role}
                required
                className="form-control"
              >
                {roleuser.map((m, key) => (
                  <option key={key} value={m}>
                    {m}
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
