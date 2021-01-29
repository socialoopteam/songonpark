// @ts-nocheck
import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from "reactstrap";
import classnames from "classnames";
import BookingListTab from "./BookingListTab.js";
import RoomListTab from "./RoomListTab.js";
import UserListTab from "./UserListTab.js";
import "../styles/event_pills.css";

const HomePills = ({ userType}) => {
  const [isloading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      setIsLoading(!isloading);
    }
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            LISTE DES CHAMBRES
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            GESTION DE RESERVATIONS
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            GESTION DES UTILISATEURS
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row className="mt-4 pills-col">
            <RoomListTab start={isloading} typeUser={userType}/>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row className="mt-4 pills-col">
            <BookingListTab start={isloading} />
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row className="mt-4 pills-col">
            <UserListTab start={isloading} />
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default HomePills;
