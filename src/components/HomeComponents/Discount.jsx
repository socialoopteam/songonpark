import React from "react"
import { Link } from "react-router-dom"

const Discount = () => (
  <div className="h1-banner">
    <div className="sc-content-overlay">
      <div className="container rectangle-overlay">
        <div className="sc-box style-01 text-center">
          <h3 className="title">
            25% de réduction sur votre
            <br /> prochain séjour
          </h3>
          <p className="description">
            Sélectionnez le package qui vous convient et obtenez une remise
            <br /> Exceptionnelle de 25% sur votre prochain séjour à Songon
            Park Village. <br /> Nous vous attendons hativement pour vous
            offrir le meilleur.
          </p>
          <div className="button-box">
            <Link to="/rooms" className="btn-box">
              Réserver maintenant
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Discount;
