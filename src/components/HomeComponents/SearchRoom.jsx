import React, { useState } from "react";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import { useQuery } from "@apollo/client";
import { GET_ROOMS } from "../../api/query";
import { Link } from "react-router-dom";
import { utils } from "react-modern-calendar-datepicker";
import DatePicker from "react-modern-calendar-datepicker";
import BeatLoader from "react-spinners/BeatLoader";

const SearchRoom = () => {
  const { data, loading, error } = useQuery(GET_ROOMS);
  const [selectedDayIn, setSelectedDayIn] = useState(null);
  const [selectedDayOut, setSelectedDayOut] = useState(null);
  const [guest, setGuest] = useState("0");
  const [modal, setModal] = useState(false);

  function handleInput(e) {
    setGuest(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(selectedDayIn, selectedDayOut, guest);
    toggle();
  }

  function toggle() {
    setModal(!modal);
  }

  const renderInCustomInput = ({ ref }) => (
    <ul className="form-table clearfix">
      <li className="form-field">
        <input
          readOnly
          ref={ref} // necessary
          placeholder="Arrivée"
          value={
            selectedDayIn
              ? `${selectedDayIn.day}/${selectedDayIn.month}/${selectedDayIn.year}`
              : ""
          }
          style={{ height: 40, width: "auto", fontSize: 18 }}
          required
        />
      </li>
    </ul>
  );

  const renderOutCustomInput = ({ ref }) => (
    <ul className="form-table clearfix">
      <li className="form-field">
        <input
          readOnly
          ref={ref} // necessary
          placeholder="Départ"
          value={
            selectedDayOut
              ? `${selectedDayOut.day}/${selectedDayOut.month}/${selectedDayOut.year}`
              : ""
          }
          style={{ height: 40, width: "auto", fontSize: 18 }}
          required
        />
      </li>
    </ul>
  );

  return (
    <div className="container">
      <div className="sc-hb-rooms-search style-01">
        <div className="hotel-booking-search style-01">
          <form onSubmit={handleSubmit} className="">
            <ul className="hb-form-table">
              <li className="hb-form-field hb-form-check-in">
                {/* <div className="label">Date d'arrivée</div> */}
                <div className="hb-form-field-input hb_input_field">
                  <DatePicker
                    value={selectedDayIn}
                    onChange={setSelectedDayIn}
                    minimumDate={utils().getToday()}
                    renderInput={renderInCustomInput}
                    shouldHighlightWeekends
                  />
                </div>
              </li>
              <li className="hb-form-field hb-form-check-out">
                {/* <div className="label">Date de départ</div> */}
                <div className="hb-form-field-input hb_input_field">
                  <DatePicker
                    value={selectedDayOut}
                    onChange={setSelectedDayOut}
                    minimumDate={utils().getToday()}
                    renderInput={renderOutCustomInput}
                    shouldHighlightWeekends
                  />
                </div>
              </li>
              <li className="hb-form-field hb-form-number">
                <div className="label">Voyageur(s)</div>
                <div id="guests" className="hb-form-field-input hb_input_field">
                  <input
                    type="text"
                    value={guest}
                    name="guest"
                    onChange={handleInput}
                    style={{
                      height: 40,
                      padding: 10,
                      fontSize: 18,
                      width: "auto",
                    }}
                  />
                  {/* <input className="month" type="text" defaultValue="pers" /> */}
                </div>
              </li>
            </ul>
            <p className="hb-submit">
              <span className="contact-info">
                Ou appelez: <span>(+225) 05-222-222</span>
              </span>
              <button type="submit">Verifier la disponibilité</button>
            </p>
          </form>
        </div>
      </div>
      <>
        <MDBContainer>
          <MDBModal
            isOpen={modal}
            toggle={toggle}
            fullHeight
            frame
            position="bottom"
            size="fluid"
          >
            <MDBModalHeader toggle={toggle}>Chambre disponible</MDBModalHeader>
            <MDBModalBody>
              <div className="room-wrapper">
                {loading && !data ? (
                  <BeatLoader
                    size={20}
                    margin={3}
                    color={"#2e9f26"}
                    loading={true}
                  />
                ) : (
                  data.rooms
                    .filter((item) => Number(guest) === item.capacity)
                    .map((m) => (
                      <div className="rooms-content-search row" key={m.id}>
                        <main className="site-main col-sm-12 col-md-9 flex-first">
                          <div className="room-wrapper">
                            <div className="">
                              <div className="room col-sm-12 clearfix">
                                <div className="room-item clearfix">
                                  <div className="room-media">
                                    <Link to={`/room-single/${m.name}`}>
                                      <img
                                        // src={m.img}
                                        src={m.cover.filename}
                                        alt={`${m.name}`}
                                        style={{
                                          width: "300px",
                                          height: "250px",
                                        }}
                                      />
                                    </Link>
                                  </div>
                                  <div className="room-summary">
                                    <h3 className="room-title">
                                      <Link to={`/room-single/${m.name}`}>
                                        {m.name}
                                      </Link>
                                    </h3>
                                    <ul className="info">
                                      <li>
                                        <span>CAPACITE:</span> {m.capacity}
                                      </li>
                                      <li>
                                        <span>PRIX:</span> {m.price} FCFA
                                      </li>
                                    </ul>
                                    <p className="description">
                                      {m.description}
                                    </p>
                                    <div className="btn btn-outline-success">
                                      <Link
                                        type="submit"
                                        to={{
                                          pathname: `/room-single/${m.name}`,
                                          state: {
                                            check_in_date: selectedDayIn
                                              ? { ...selectedDayIn }
                                              : "",
                                            check_out_date: selectedDayOut
                                              ? { ...selectedDayOut }
                                              : "",
                                            guest: guest,
                                          },
                                        }}
                                        className="book-room"
                                      >
                                        Réserver cette chambre
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </main>
                      </div>
                    ))
                )}
              </div>
            </MDBModalBody>
          </MDBModal>
        </MDBContainer>
      </>
    </div>
  );
};

export default SearchRoom;
