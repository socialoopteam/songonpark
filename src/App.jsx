import React from 'react'
import Home from "./pages/Home"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About"
import Rooms from "./pages/Rooms"
import Events from "./pages/Events"
import Contact from "./pages/Contact"
import RoomSingle from "./pages/RoomSingle"
import Login from "./pages/Login"

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/rooms" component={Rooms} />
      <Route path="/events" component={Events} />
      <Route path="/contact" component={Contact} />
      {/* <Route path="/room-single" component={RoomSingle} /> */}
      <Route
        path="/room-single/:roomName"
        render={(props) => <RoomSingle {...props} />}
      />
      <Route path="/cpanel/connexion" component={Login} />
    </Switch>
  </Router>
);

export default App