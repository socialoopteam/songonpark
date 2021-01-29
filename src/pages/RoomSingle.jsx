import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { ADD_BOOKING } from "../api/mutation";
import { useMutation} from '@apollo/client'
import CarouselRoom from '../components/RoomSingleComponents/CarouselRoom'
import {
  carouselStandard,
  carouselBungalow,
  carouselBungalowVIP,
  carouselDemiSuite,
  carouselMoyenStanding
} from "../containers/chambres";
import { utils } from "react-modern-calendar-datepicker";
import DatePicker from "react-modern-calendar-datepicker";


export default function SingleRoom({ match, location }) {
  const { state } = location
  const [createReservation] = useMutation(ADD_BOOKING);
  const [msg, setMsg] = useState('')
  const [selectedDayIn, setSelectedDayIn] = useState(null);
  const [selectedDayOut, setSelectedDayOut] = useState(null);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

    function handleChange(e) {
      setUser({ ...user, [e.target.name]: e.target.value })
    }

  function handleSubmit(e) {
    e.preventDefault();
    createReservation({
      variables: {
        input: {
          ...{
            ...user,
            date: new Date(),
            ...{check_out_date:
                state
                  ? `${state.check_out_date.day}/${state.check_out_date.month}/${state.check_out_date.year}/`: selectedDayOut
                  ? `${selectedDayOut.day}/${selectedDayOut.month}/${selectedDayOut.year}`
                  : ""},
            ...{check_in_date:
                state
                  ? `${state.check_in_date.day}/${state.check_in_date.month}/${state.check_in_date.year}/`
                  : selectedDayIn
                  ? `${selectedDayIn.day}/${selectedDayIn.month}/${selectedDayIn.year}`
                  : ""
                }
          },
          roomName: match.params.roomName,
        },
      },
    });
    setMsg(
      `Votre réservation a été prise en compte. L'hotel Songon Park vous souhaite la bienvenue`
    );
    setUser({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
    setTimeout(() => {
      setMsg('')
    }, 10000)
  }

  const renderInCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      value={
        state
          ?`${state.check_in_date.day}/${state.check_in_date.month}/${state.check_in_date.year}`
          : selectedDayIn ? `${selectedDayIn.day}/${selectedDayIn.month}/${selectedDayIn.year}`:""
      }
      required
      type="text"
      id="popup_check_in_date"
      className="check_in_date"
      disabled={state ? true : false}
      style={{ width: "370px" }}
    />
  );

  const renderOutCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      value={
        state
          ?`${state.check_out_date.day}/${state.check_out_date.month}/${state.check_out_date.year}`
          : selectedDayOut ? `${selectedDayOut.day}/${selectedDayOut.month}/${selectedDayOut.year}`:""
      }
      required
      disabled={state ? true : false}
      type="text"
      id="popup_check_out_date"
      className="check_out_date"
      style={{width: '370px'}}
    />
  );

  const returnCarousel = () => {
    console.log(match.params.roomName)
    if(match.params.roomName === 'Chambre Standard'){
      return <CarouselRoom images={carouselStandard} /> 
    }
     if (match.params.roomName === "Bungalow simple") {
       return <CarouselRoom images={carouselBungalow} />;
     }
     if (match.params.roomName === "Bungalow VIP") {
       return <CarouselRoom images={carouselBungalowVIP} />;
     }
     if (match.params.roomName === "Demi-suite VIP") {
       return <CarouselRoom images={carouselDemiSuite} />;
     }
     if (match.params.roomName === "Chambre Moyen standing") {
       return <CarouselRoom images={carouselMoyenStanding} />;
     }
  }

  return (
    <Layout>
      <div id="main-content">
        <div className="page-title">
          <div
            className="page-title-wrapper"
            data-stellar-background-ratio="0.5"
            style={{ backgroundPosition: "center", backgroundImage: 'url(/images/rooms-bg.jpg)' }}
          >
            <div className="content container">
              <h1 className="heading_primary">{match.params.roomName}</h1>
            </div>
          </div>
        </div>

        <div className="site-content container">
          <div className="room-single row">
            <main className="site-main col-sm-12 col-md-12 flex-first">
              <div className="room-wrapper">
                <div className="title-share clearfix">
                  <h2 className="title">{match.params.roomName}</h2>
                </div>
                {returnCarousel()}
                <div className="room_price">
                  <span className="price_value price_min">$100.0</span>
                  <span className="unit">Night</span>
                </div>
                <div className="description">
                  <p style={{ textAlign: "justify" }}>
                    This large suite in the courtyard adobe has a Queen-size
                    built-in platform bed and a large indoor/outdoor stone tub
                    with a rain shower. The suite features a full kitchen with
                    breakfast bar, a spacious sitting area with a wood burning
                    fireplace. The private patio offers dramatic views of the
                    San Jacinto Mountains. The suite features a full kitchen
                    with breakfast bar, a spacious sitting area with a wood
                    burning fireplace. The private patio offers dramatic views
                    of the San Jacinto Mountains.
                  </p>
                  <p>
                    The suite features a full kitchen with breakfast bar, a
                    spacious sitting area with a wood burning fireplace. The
                    private patio offers dramatic views of the San Jacinto
                    Mountains.
                  </p>
                </div>
                <div className="room_additinal">
                  <h3 className="title style-01">AMENITIES AND SERVICES</h3>
                  <div className="row">
                    <div className="col-sm-4">
                      <ul>
                        <li>
                          <i className="fa fa-check"></i>Priviliged in Bruges
                        </li>
                        <li>
                          <i className="fa fa-check"></i>High satisfaction
                        </li>
                        <li>
                          <i className="fa fa-check"></i>Unparalleded service
                        </li>
                        <li>
                          <i className="fa fa-check"></i>Aenean sollicitudin
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-4">
                      <ul>
                        <li>
                          <i className="fa fa-check"></i>Priviliged in Bruges
                        </li>
                        <li>
                          <i className="fa fa-check"></i>High satisfaction
                        </li>
                        <li>
                          <i className="fa fa-check"></i>Unparalleded service
                        </li>
                        <li>
                          <i className="fa fa-check"></i>Aenean sollicitudin
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-4">
                      <ul>
                        <li>
                          <i className="fa fa-check"></i>Priviliged in Bruges
                        </li>
                        <li>
                          <i className="fa fa-check"></i>High satisfaction
                        </li>
                        <li>
                          <i className="fa fa-check"></i>Unparalleded service
                        </li>
                        <li>
                          <i className="fa fa-check"></i>Aenean sollicitudin
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <aside
              id="secondary"
              className="widget-area col-sm-12 col sticky-sidebar"
            >
              <div className="wd wd-book-room">
                <Link to="#" className="book-room">
                  Réserver cette chambre
                </Link>
                <div id="form-popup-room" className="form-popup-room">
                  <div className="popup-container">
                    <Link to="#" className="close-popup">
                      {/* <i className="ion-android-close"></i> */}
                    </Link>
                    
                    <form
                      onSubmit={handleSubmit}
                      id="hotel-popup-results"
                      name="hb-search-single-room"
                      className="hotel-popup-results datepicker"
                    >
                      <div className="room-head">
                        <h3 className="room-title">{match.params.roomName}</h3>
                        <p className="description">
                          Veuillez entrer vos informations pour réserver cette
                          chambre.
                        </p>
                      </div>
                      <div className="search-room-popup">
                        <ul className="form-table clearfix">
                          <li className="form-field">
                            <label className="label">
                              Nom et prénoms
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              value={user.name}
                              required
                              className="name"
                              onChange={handleChange}
                            />
                          </li>
                          <li className="form-field">
                            <label className="label">
                              Votre Email<span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={user.email}
                              id="email"
                              required
                              className="email"
                              onChange={handleChange}
                            />
                          </li>
                          <li className="form-field">
                            <label className="label">
                              Votre téléphone
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={user.phone}
                              id="phone"
                              required
                              className="phone"
                              onChange={handleChange}
                            />
                          </li>
                          <li className="form-field">
                            <label className="label">
                              Votre adresse
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="text"
                              name="address"
                              id="address"
                              value={user.address}
                              required
                              onChange={handleChange}
                              className="add"
                            />
                          </li>
                          <li className="form-field">
                            <label className="label">
                              Date d'arrivée
                              <span style={{ color: "red" }}>*</span>
                            </label> <br/>
                            <DatePicker
                              value={selectedDayIn}
                              onChange={setSelectedDayIn}
                              minimumDate={utils().getToday()}
                              renderInput={renderInCustomInput}
                              shouldHighlightWeekends
                            />
                          </li>
                          <li className="form-field">
                            <label className="label">
                              Date de départ
                              <span style={{ color: "red" }}>*</span>
                            </label><br/>
                            <DatePicker
                              value={selectedDayOut}
                              onChange={setSelectedDayOut}
                              minimumDate={utils().getToday()}
                              renderInput={renderOutCustomInput}
                              shouldHighlightWeekends
                            />
                          </li>

                          <li className="form-field room-submit">
                            <button
                              id="check_date"
                              className="submit"
                              type="submit"
                            >
                              Réserver
                            </button>
                          </li>
                        </ul>
                      </div>
                    </form>
                    <p style={{ color: "#35a82e", fontWeight: "bold" }}>
                      {msg}
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  );
}