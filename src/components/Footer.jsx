import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer id="colophon" className="site-footer">
    <div className="footer-top">
    </div>
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="widget-text">
              <div className="footer-location">
                <img src="images/logo1-footer.png" alt="" width={130} />
                <p>
                  Vous avez des questions concernant nos services, nos
                  horaires, nos tarifs ? Contactez-nous, nous serons heureux
                  de vous aider !
                </p>
                <ul className="info">
                  <li>
                    <i className="ion-ios-location" />{" "}
                    <span>
                      Route de Jacqueville, Abidjan, Côte d'Ivoire.
                    </span>
                  </li>
                  <li>
                    <i className="ion-ios-telephone" />
                    <a href="tel:0022505222222">(+225) 05-222-222</a>
                  </li>
                  <li>
                    <i className="ion-email" />
                    <a href="mailto:songonpark@hotmail.com">
                      songonpark@hotmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="widget-menu">
              <h3 className="widget-title">Nos Services</h3>
              <ul className="menu">
                <li>
                  <Link to="/rooms">Chambres et Suites</Link>
                </li>
                <li>
                  <Link to="#">Restaurant</Link>
                </li>
                <li>
                  <Link to="#">Détente et Fitness</Link>
                </li>
                <li>
                  <Link to="/about">Galerie</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="widget-menu">
              <h3 className="widget-title">A propos de nous</h3>
              <ul className="menu">
                <li>
                  <Link to="/about">Notre histoire</Link>
                </li>
                <li>
                  <Link to="/events">Blog & Evènements</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="widget-menu">
              <h3 className="widget-title">Suivez-nous</h3>
              <ul className="list-social">
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/complexesongonpark"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a className="instagram" href="https://www.instagram.com/songonpark_/">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="copyright-content col-sm-12">
            <p className="copyright-text">
              © {new Date().getFullYear()} <Link href="https://www.socialoop.me/">Socialoop</Link> - Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
