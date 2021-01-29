import React from "react"
import { Link } from "react-router-dom"

const Header = () => {   
  return (
    <>
      <header id="masthead" className="header-default affix-top sticky-header ">
        <div className="row">
          <div className="header-menu col-sm-12 tm-table">
            <div
              className="menu-mobile-effect navbar-toggle"
              data-effect="mobile-effect"
            >
              <div className="icon-wrap">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </div>
            </div>
            <div className="width-logo sm-logo table-cell text-center">
              <Link
                to="/"
                className="no-sticky-logo"
                title="Hotel HTML Template"
              >
                <img className="logo" src="/images/logo1.png" alt="Logo Songon Park Hotel" />
                <img
                  className="mobile-logo"
                  src="/images/logo1-sticky.png"
                  alt
                />
              </Link>
              <Link to="/" className="sticky-logo">
                <img src="/images/logo1-sticky.png" alt />
              </Link>
            </div>
            <div className="width-navigation navigation table-cell">
              <div className="top-toolbar clearfix">
                <div className="toolbar-info pull-left col-sm-6">
                  <i className="ion-ios-telephone" />{" "}
                  <span className="label">Besoin d'aide ? Appelez-nous au:</span>
                  <a className="value" href="tel:+22505222222">
                    {" "}
                    (+225) 05 222 222
                  </a>
                </div>
                <div className="toolbar-right pull-right col-sm-6">
                  <ul className="top-menu">
                    <li className="menu-item">
                      <Link to="/about">Notre Histoire</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/events">Evenements</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/about">Galerie</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="nav main-menu">
                <li className="menu-item">
                  <Link to="/">Accueil</Link>
                </li>
                <li className="menu-item">
                  <Link to="/about">A propos</Link>
                </li>
                <li className="menu-item">
                  <Link to="/rooms">Chambres</Link>
                </li>
                <li className="menu-item">
                  <Link to="/events">Evenements</Link>
                </li>
                <li className="menu-item">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
              <div className="header-right">
                <Link to="/rooms" className="btn-book">
                  Réservation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav
        className="visible-xs mobile-menu-container mobile-effect" itemScope itemType="http://schema.org/SiteNavigationElement"
      >
        <div className="inner-off-canvas">
          <div className="menu-mobile-effect navbar-toggle">
            Fermer <i className="fa fa-times" />
          </div>
          <ul className="nav main-menu">
            <li className="menu-item">
              <Link to="/" className="menu-mobile-effect navbar-toggle text-left">Accueil</Link>
            </li>
            <li className="menu-item">
              <Link to="/about" className="menu-mobile-effect navbar-toggle text-left">A propos</Link>
            </li>
            <li className="menu-item">
              <Link to="/rooms" className="menu-mobile-effect navbar-toggle text-left">Chambres</Link>
            </li>
            <li className="menu-item">
              <Link to="/events" className="menu-mobile-effect navbar-toggle text-left">Evenements</Link>
            </li>
            <li className="menu-item">
              <Link to="/contact" className="menu-mobile-effect navbar-toggle text-left">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;