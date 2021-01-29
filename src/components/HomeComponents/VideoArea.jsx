import React from "react";

const VideoArea = () => (
  <div className="h1-video rectangle-overlay">
    <div className="sc-video">
      <div className="background-video">
        <div className="cover-image" />
        <div className="content container">
          <h3 className="title">
            Découvrez la beauté du <br /> complexe
          </h3>
          <i className="video-play ion-ios-play" />
          <span className="text-icon">Lancer la Video</span>
        </div>
        <video loop className="full-screen-video" data-autoplay>
          <source src="images/home/hotel.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="sc-list-box style-01">
      <div className="container">
        <div className="list-box-slider owl-carousel owl-theme">
          <div className="box-item">
            <i className="ion-ribbon-a " />
            <h5 className="box-title">Chambres</h5>
            <p className="description">
              Des chambres spacieuses aérées et confortables pour votre
              tranquilité.
            </p>
          </div>
          <div className="box-item">
            <i className="ion-ios-flower" />
            <h5 className="box-title">Piscine</h5>
            <p className="description">
              Une grande piscine en plein air en face de la lagune pour
              votre baignade.
            </p>
          </div>
          <div className="box-item">
            <i className="ion-ios-nutrition " />
            <h5 className="box-title">Restaurants</h5>
            <p className="description">
              Une gastronomie exceptionnelle dont nous seuls avons le
              secret.
            </p>
          </div>
          <div className="box-item">
            <i className="ion-wifi " />
            <h5 className="box-title">Wifi</h5>
            <p className="description">
              Une connexion très haut débit pour vous permettre d'être
              toujours connecté.
            </p>
          </div>
          <div className="box-item">
            <i className="ion-bonfire " />
            <h5 className="box-title">Activités</h5>
            <p className="description">
              Vous ne vous ennuierez jamais ici. Un cocktail d'activités
              vous attend.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default VideoArea;
