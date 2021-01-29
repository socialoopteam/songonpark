import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { GET_ROOMS } from "../api/query";
import { useQuery } from "@apollo/client";
import ImageSpinner from '../components/RoomsComponents/ImageSpinner'
import { Helmet } from 'react-helmet'

const Rooms = () => {
  const { error, loading, data } = useQuery(GET_ROOMS);
  if (loading) return <ImageSpinner />;
  if (error) return `Erreur! Veuillez verifier votre connexion internet`;
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nos chambres et suites - Songon Park Hotel</title>
      </Helmet>

      <div id="main-content">
        <div className="page-title">
          <div
            className="page-title-wrapper"
            data-stellar-background-ratio="0.5"
            style={{height: "550px", backgroundPosition: "center", backgroundImage: 'url(images/rooms-bg.jpg)'}}
          >
            <div className="content container">
              <h1 className="heading_primary">CHAMBRES</h1>
            </div>
          </div>
        </div>

        <div className="site-content container">
          <div className="rooms-content layout-grid style-02">
            <div className="row">
              {data.rooms.map((m, k) => (
                <div className="room col-sm-4 clearfix" key={m.id}>
                  <div className="room-item">
                    <div className="room-media">
                      <Link to={`/room-single/${m.name}`}>
                        <img
                          src={m.cover.filename}
                          alt={`${m.name}`}
                          style={{width: '370px', height: '250px'}}
                        />
                      </Link>
                    </div>
                    <div className="room-summary">
                      <h3 className="room-title">
                        <Link to={`/room-single/${m.name}`}>{m.name}</Link>
                      </h3>
                      <ul className="room-info">
                        <li>{m.position}</li>
                      </ul>
                      <div className="line"></div>
                      <div className="room-meta clearfix">
                        <div className="price">
                          <span className="title-price">PRIX:</span>
                          <span className="price_value price_min">
                            {m.price} FCFA
                          </span>
                        </div>
                        {k >= 1 ? (
                          <div className="rating">
                            <span className="star"></span>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Rooms;
