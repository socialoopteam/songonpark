import React from "react"
import { Link } from "react-router-dom"

const Rooms = () => (
  <div className="container">
    <div className="sc-heading style-04 text-center">
      <h3 className="title">Un aperçu de nos chambres</h3>
      <p className="description">
        Il y'a plus d'une raison pour que vous séjourniez chez nous
      </p>
    </div>
    <div className="sc-tourist style-02">
      <div className="row">
      <div className="col-sm-4">
          <div className="item">
            <div className="image">
              <Link to="/rooms">
                <img src="images/home/h4-travel-1.jpg" alt="Bungalow" />
              </Link>
            </div>
            <div className="inner">
              <div className="content">
                <div className="title">
                  <Link to="/rooms">Bungalow</Link>
                </div>
                <ul className="meta">
                  <li>Parfait pour les petits budgets</li>
                </ul>
              </div>
              <div className="review clearfix">
                <div className="rating">
                  <span className="rating-star" />
                </div>
                <div className="sale">
                  <i className="ion-ios-time-outline" /> 15% DE REDUCTION
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="item">
            <div className="image">
              <Link to="/rooms">
                <img src="images/home/h4-travel-3.jpg" alt="Demi VIP" />
              </Link>
            </div>
            <div className="inner">
              <div className="content">
                <div className="title">
                  <Link to="/rooms">Demi VIP</Link>
                </div>
                <ul className="meta">
                  <li>Meilleur rapport qualité prix</li>
                </ul>
              </div>
              <div className="review clearfix">
                <div className="rating">
                  <span className="rating-star"> </span>
                </div>
                <div className="sale">
                  <i className="ion-ios-time-outline" /> 25% DE REDUCTION
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="item">
            <div className="image">
              <Link to="/rooms">
                <img src="images/home/h4-travel-2.jpg" alt="Suite VIP" />
              </Link>
            </div>
            <div className="inner">
              <div className="content">
                <div className="title">
                  <Link to="/rooms">Chambre VIP</Link>
                </div>
                <ul className="meta">
                  <li>Pour les personnes VIP</li>
                </ul>
              </div>
              <div className="review clearfix">
                <div className="rating">
                  <span className="rating-star" />
                </div>
                <div className="sale">
                  <i className="ion-ios-time-outline" /> 20% DE REDUCTION
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="view-all text-center">
        <Link to="/rooms" style={{ backgroundColor: "dodgerblue" }} className="btn p-3 text-white">
          Voir toutes les chambres {">"}
        </Link>
      </div>
    </div>
  </div>
);

export default Rooms;