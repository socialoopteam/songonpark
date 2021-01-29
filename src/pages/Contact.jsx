import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet'

export default function Contact() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contactez Nous - Songon Park Hotel</title>
      </Helmet>

      <div className="page-title">
        <div 
          className="page-title-wrapper" 
          data-stellar-background-ratio="0.5"
          style={{height: "500px", backgroundPosition: "center", backgroundImage: 'url(images/contact-bg.jpg)'}}
        >
          <div className="content container">
            <h1 className="heading_primary">Contact</h1>
          </div>
        </div>
      </div>
      <div className="site-content no-padding">
        <div className="page-content">
          <div className="container">
            <div className="empty-space"></div>
            <div className="row tm-flex">
              <div className="col-sm-6">
                <div className="sc-heading">
                  <p className="first-title">ENVOYEZ UN</p>
                  <h3 className="second-title">MESSAGE</h3>
                  <p className="description">
                    Avez-vous quelque chose à nous dire? <br />
                    N'hésitez pas à nous contactez à travers ce formulaire.
                  </p>
                </div>

                <div className="sc-contact-form">
                  <form action="#" id="ajaxform" method="post">
                    <input
                      type="text"
                      name="your-name"
                      required
                      placeholder="Votre nom*"
                    />
                    <input
                      type="email"
                      name="your-email"
                      required
                      placeholder="Votre email*"
                    />
                    <input
                      type="tel"
                      name="your-phone"
                      required
                      placeholder="Votre téléphone*"
                    />
                    <textarea
                      name="your-message"
                      id="your-message"
                      cols="30"
                      rows="10"
                      required
                      placeholder="Votre message*"
                    />
                    <input type="submit" className="submit" value="Envoyez" />
                  </form>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="sc-contact-info">
                  <div className="sc-heading">
                    <p className="first-title">Entrez en contact</p>
                    <p className="description">
                      <Link to="/contact">
                        Route de Jacqueville, 500m avant le pont de Jacqueville,
                        Cote d'ivoire.
                      </Link>
                    </p>
                  </div>
                  <p className="phone">
                    <Link to="#"> (+225) 05 22 22 22 / (+225) 03 58 92 13</Link>
                  </p>
                  <p className="email">
                    <Link href="mailto:info@songonpark.com">
                      songonpark@hotmail.com
                    </Link>
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.812737025707!2d-4.247361085908958!3d5.2918949377226285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1c62200c00001%3A0xdd24aabdc272a017!2sSongon%20Park%20Hotel!5e0!3m2!1sfr!2sci!4v1601569509715!5m2!1sfr!2sci"
                    width="600"
                    height="450"
                    frameborder="0"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                    title="songonpark"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          {/* <div className="sc-google-map" id="sc-google-map">
              <div className="empty-space"></div>
              <div id="google-map"></div>
            </div> */}
        </div>
      </div>
    </Layout>
  );
}
