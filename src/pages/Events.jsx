import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet'

export default function Events() {
  return (
    <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Evènements et Actualités - Songon Park Hotel</title>
        </Helmet>

        <div id="main-content">
            <div 
                className="page-title-wrapper" 
                data-stellar-background-ratio="0.5"
                style={{height: "500px", backgroundPosition: "center", backgroundImage: 'url(images/event-bg.jpg)'}}
            >
                <div className="content container">
                    <h1 className="heading_primary">Evènements</h1>
                </div>
            </div>

        <div className="site-content container">
            <div className="events-content">
                <div className="sc-events list-style">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="happening" role="tabpanel">
                            <div className="event">
                                <div className="row tm-flex">
                                    <div className="col-lg-2 col-md-2">
                                        <div className="time-from">
                                            <span className="date">14</span>
                                            <span className="month">Octobre</span>
                                        </div>
                                    </div>
                                <div className="col-lg-6 col-md-5">
                                    <div className="event-content">
                                        <h3 className="title"><Link to="https://www.facebook.com/complexesongonpark/photos/a.2444678262268489/3294319063971067/">Cuisine de Stars</Link></h3>
                                        <div className="meta">
                                            <span className="time"> <i className="fa fa-clock-o"></i> 10:00 - 22:00</span>
                                            <span className="location"> <i className="fa fa-map-marker"></i>Songon Park</span>
                                        </div>
                                        <div className="event-desc">retrouvez l’émission @cuisinedestars qui a été tournée chez nous sur vos écrans DIFFUSION:⁠ Mercredi à 20h30 sur 2STV à Dakar (211) - Redif:Ven 23h. Jeudi à 21h sur RTI2 à Abidjan (202) - Redif: Dim 12h. Vendredi à 21h30 sur Évasion à Conakry (241) - Redif: Dim 22h30. Samedi à 18h30 sur BF1 à Ouaga (251). Redif: Dim 12h30⁠. Samedi 21h sur AFRICABLE à Bamako(45) - Redif: Dim 13h30 ⁠ </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-5">
                                    <div className="thumbnail">
                                        <a href="https://www.facebook.com/complexesongonpark/photos/a.2444678262268489/3294319063971067/"><img src={require('../assets/grillades.jpg')} alt="Cuisine de Stars"/></a>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="event">
                                <div className="row tm-flex">
                                    <div className="col-lg-2 col-md-2">
                                        <div className="time-from">
                                            <span className="date">03</span>
                                            <span className="month">Septembre</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-5">
                                        <div className="event-content">
                                            <h3 className="title"><a href="https://www.facebook.com/complexesongonpark/photos/pcb.3162509100485398/3162508967152078/">Cancun Chill by Songon Park</a></h3>
                                            <div className="meta">
                                                <span className="time"> <i className="fa fa-clock-o"></i> 8:00 - 17:00</span>
                                                <span className="location"> <i className="fa fa-map-marker"></i>Songon Park</span>
                                            </div>
                                            <div className="event-desc">C'était le 🔥à #cancunchillbysongonpark "épisode I" avec notre @deejayyvess13_kiffnobeat aux platines en présence de nos partenaires @nostalgieci_officiel & @martini. Crédit 📸 : @davys_photographies #songonpark📍 #chillzone #cigarezone #abidjanbynight #chill #stationbalnéaire #abidjan #dabou #jacqueville </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-5">
                                        <div className="thumbnail">
                                            <a href="https://www.facebook.com/complexesongonpark/photos/pcb.3162509100485398/3162508967152078/"><img src={require('../assets/carnaval.jpg')} alt="Cancun Chill"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="event">
                                <div className="row tm-flex">
                                    <div className="col-lg-2 col-md-2">
                                        <div className="time-from">
                                            <span className="date">02</span>
                                            <span className="month">Septembre</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-5">
                                        <div className="event-content">
                                            <h3 className="title"><a href="https://www.facebook.com/complexesongonpark/photos/pcb.3161001593969482/3161001510636157/"> Cancun Chill by Songon Park</a></h3>
                                            <div className="meta">
                                                <span className="time"> <i className="fa fa-clock-o"></i> 08:00 - 15:00</span>
                                                <span className="location"> <i className="fa fa-map-marker"></i>Songon Park</span>
                                            </div>
                                            <div className="event-desc">#cancunchillbysongonpark "épisode I" avec @deejayyvess13_kiffnobeat aux platines en présence de nos partenaires @nostalgieci_officiel & @martini. Crédit 📸 : @davys_photographies #songonpark📍 #chillzone #cigarezone #abidjanbynight #chill #stationbalnéaire #abidjan #dabou #jacqueville </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-5">
                                        <div className="thumbnail">
                                            <a href="https://www.facebook.com/complexesongonpark/photos/pcb.3161001593969482/3161001510636157/"><img src={require('../assets/cancun.jpg')} alt="Cancun Songon Park"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
}
