import React, { useState, useEffect } from "react";
import "../styles/login.css";
import { Container, Row, Col, Input, Form, Button } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import { ClipLoader } from "react-spinners";
import HomeAdmin from "./HomeAdmin";
import "react-toastify/dist/ReactToastify.min.css";
// import firebase from "../config";
import { LOGIN_USER } from '../api/mutation'
import { useMutation } from '@apollo/client'

export default function Login() {
  const [credential, setCredential] = useState({ email: "", password: "" });
  const [token, setToken] = useState('')
  const [role, setRole] = useState('')
  const [spinner, setSpinner] = useState(false);
  const [login, { data }] = useMutation(LOGIN_USER);

  useEffect(() => verifyIdentity(), []);

  const verifyIdentity = () => {
    const usertoken = localStorage.getItem("@token");
    const role_user = localStorage.getItem("@role");
    if(usertoken && role_user){
      setToken(usertoken);
      setRole(role_user);
    } 
    return;
    // firebase.auth().onAuthStateChanged((currentUser) => {
    //   if (currentUser) setUser(currentUser);
    // });
  };

  const notifyFailed = (e) => {
    toast.error(
      `${e.message}`,
      {
        position: "top-right",
        autoClose: "5000",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
    setCredential({ email: "", password: "" });
  };

  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSpinner(!spinner);
      const user = await login({
        variables: { input: credential },
      });
      if(user){
        localStorage.setItem("@token", user.data.login.token);
        localStorage.setItem("@role", user.data.login.role);
        setToken(user.data.login.token);
        setRole(user.data.login.role);
        setSpinner(false);
        return;
      }   
    } catch (e) {
      setSpinner(false)
      notifyFailed(e)
      return;
    }    
    // setCredential({
    //   email:'',
    //   password: ''
    // })
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(
    //     credential.email.toString().trim(),
    //     credential.password.toString().trim()
    //   )
    //   .then((success) => {
    //     if (success) setLoading(false);
    //     setCredential({ email: "", password: "" });
    //   })
    //   .catch((e) => {
    //     if (e) {
    //       setLoading(false);
    //       notifyFailed();
    //     }
    //   });
  };

  const logout = () => {
    localStorage.removeItem("@token")
    localStorage.removeItem("@role")
    window.location = window.location.origin;
  };

  return (
    <div>
      {token && role && token.length && role.length > 0 ? (
        <div className="">
          <HomeAdmin logout={logout} data={data ? data : ""} />
        </div>
      ) : (
        <div className="login-header">
          <Container>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange
              draggable
              pauseOnHover
            />
            <Row>
              <Col sm="5">
                <Form onSubmit={handleSubmit} className="form-card">
                  <img
                    src={require("../assets/logo2.png")}
                    className="img-fluid"
                    alt="logo"
                  />
                  <h4 className="h4-responsive text-center center font-weight-bold my-2">
                    Connexion d'utilisateur
                  </h4>
                  <Input
                    name="email"
                    type="text"
                    value={credential.email}
                    placeholder="Adresse e-mail"
                    required
                    onChange={handleChange}
                    className="my-2"
                  />
                  <Input
                    name="password"
                    type="password"
                    value={credential.password}
                    placeholder="Mot de passe"
                    required
                    onChange={handleChange}
                    className="my-2"
                  />
                  <Button type="submit" color="success" className="myform mb-3">
                    Connexion
                  </Button>
                  <ClipLoader size={30} color={"#000"} loading={spinner} />
                </Form>
              </Col>
              <Col sm="7"></Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
}
