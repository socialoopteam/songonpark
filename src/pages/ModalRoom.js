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
import { useMutation } from "@apollo/client";
import { ADD_ROOM } from "../api/mutation";
import "../styles/event_input.css";

export default function ModalRoom(props) {
  const [createRoom] = useMutation(ADD_ROOM);
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    breakfast: "Oui",
    quantity: "",
    capacity: "",
    position: "",
  });
  const [formfiles, setFormFiles] = useState({
    imagePreviewUrl: "",
    imageMimeType: ""
  });

  const handleFiles = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFormFiles({
        imagePreviewUrl: reader.result,
        imageMimeType: file.type
      });
      
    };
    reader.readAsDataURL(file);
  };

  const handleInput = e => {
    setForm({ ...form, [e.target.name]: [e.target.value].toString().trim() });
  };
  const handleSubmit = event => {
    event.preventDefault();
    createRoom({
      variables: {
        input: {
          ...form,
          cover: {
            filename: formfiles.imagePreviewUrl,
            mimetype: formfiles.imageMimeType,
            encoding: "base64",
          },
        },
      },
    });
    setForm({
      name: "",
      price: "",
      description: "",
      breakfast: "",
      quantity: "",
      capacity: "",
      position: "",
    });
    setFormFiles({
      imagePreviewUrl: "",
      imageMimeType: "",
    });
  };

  return (
    <Modal isOpen={props.state} toggle={props.start}>
      <ModalHeader
        toggle={props.start}
        className="h5-responsive font-weight-bold"
      >
        {" "}
        Ajouter une nouvelle chambre{" "}
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <Row form>
            <Col sm={6}>
              <FormGroup>
                <Label>Nom de la chambre</Label>
                <Input
                  title="Nom de la chambre"
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
                <Label>Prix (FCFA)</Label>
                <Input
                  type="number"
                  value={form.price}
                  name="price"
                  onChange={handleInput}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col sm={6}>
              <FormGroup>
                <Label>Capacité</Label>
                <Input
                  type="number"
                  value={form.capacity}
                  name="capacity"
                  onChange={handleInput}
                  required
                />
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <Label>Petit déjeuner ?</Label>
                <Input
                  type="text"
                  value={form.breakfast}
                  name="breakfast"
                  onChange={handleInput}
                  required
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <FormGroup>
                <Label>Quantité disponible</Label>
                <Input
                  type="number"
                  value={form.quantity}
                  name="quantity"
                  onChange={handleInput}
                  required
                />
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <Label>Localisation</Label>
                <Input
                  type="text"
                  value={form.position}
                  name="position"
                  onChange={handleInput}
                  required
                />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col sm={12}>
              <FormGroup>
                <Label>Image d'affiche</Label>
                <Input
                  type="file"
                  className="file-upload"
                  title="Photo de couverture"
                  onChange={handleFiles}
                  accept="image/png, image/jpeg, image/jpg, image/webp"
                  required
                />
                {formfiles.imagePreviewUrl === "" ? (
                  null
                ) : (
                  <img
                    alt={formfiles.imageMimeType}
                    src={formfiles.imagePreviewUrl}
                    style={{ height: 60, width: 60 }}
                  />
                )}
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col sm="12">
              <FormGroup>
                <Label>Description</Label>
                <Input
                  title="Description"
                  type="textarea"
                  value={form.description}
                  name="description"
                  onChange={handleInput}
                  required
                />
              </FormGroup>
            </Col>
          </Row>

          <div className="btn-form">
            <Button
              disabled={
                (form.name &&
                  form.description &&
                  form.price &&
                  form.capacity &&
                  form.quantity &&
                  form.description &&
                  form.breakfast &&
                  form.position &&
                  formfiles.imagePreviewUrl) === ""
                  ? true
                  : false
              }
              title="Ajouter"
              color="success"
              type="submit"
            >
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
