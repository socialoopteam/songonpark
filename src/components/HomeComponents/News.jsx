import React from "react";
import { Link } from "react-router-dom";

const News = () => (
  <div className="group-destination">
    <div className="sc-content-overlay">
      <div className="container">
        <div className="empty-space"></div>
        <div className="sc-heading style-01 text-center">
          <h3 className="title">Evènements</h3>
        </div>
        <div className="sc-posts style-01">
          <div className="row">
            <div className="item-first col-sm-12 col-md-6">
              <div className="post col-sm-12 col-md-12">
                <div className="inner">
                  <div className="thumbnail">
                    <a href="blog-single.html">
                      <img src="images/gallery/img-1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="category">
                      <a href="#">People</a>
                    </div>
                    <h3 className="title">
                      {" "}
                      <a href="blog-single.html">
                        {" "}
                        Visite du rappeur Kaaris
                      </a>
                    </h3>
                    <div className="date">
                      <i className="ion-android-calendar"></i>15 Juillet 2019
                    </div>
                    <div className="summary">
                      Nous avons hébergé pendant une semaine, la star du rap français Kaaris qui a passé d'excellents moments, sûrement inoubliables sur nos sites. Il a lui-même témoigné de la qualité de nos services et de notre professionnalisme.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item col-sm-12 col-md-6">
              <div className="post col-sm-6 col-md-6">
                <div className="inner">
                  <div className="thumbnail">
                    <a href="blog-single.html">
                      <img src="images/gallery/img-2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="category">
                      <a href="#">Soirées</a>
                    </div>
                    <h3 className="title">
                      {" "}
                      <a href="blog-single.html">Rumba</a>
                    </h3>
                    <div className="summary">
                      Soirées africaines au rythme de la rumba.
                    </div>
                  </div>
                </div>
              </div>
              <div className="post col-sm-6 col-md-6">
                <div className="inner">
                  <div className="thumbnail">
                    <a href="blog-single.html">
                      <img src="images/gallery/img-3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="category">
                      <a href="#">Plein air</a>
                    </div>
                    <h3 className="title">
                      {" "}
                      <a href="blog-single.html">Bar flottant</a>
                    </h3>
                    <div className="summary">
                      Des moments de détente et de convivialité exceptionnels.
                    </div>
                  </div>
                </div>
              </div>
              <div className="post col-sm-6 col-md-6">
                <div className="inner">
                  <div className="thumbnail">
                    <a href="blog-single.html">
                      <img src="images/gallery/img-4.jpg" alt="" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="category">
                      <a href="#">Kids</a>
                    </div>
                    <h3 className="title">
                      {" "}
                      <a href="blog-single.html">Songon Kids</a>
                    </h3>
                    <div className="summary">
                      Les tout petits trouvent toujours leur bonheur sur nos sites.
                    </div>
                  </div>
                </div>
              </div>
              <div className="post col-sm-6 col-md-6">
                <div className="inner">
                  <div className="thumbnail">
                    <a href="blog-single.html">
                      <img src="images/gallery/img-5.jpg" alt="" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="category">
                      <a href="#">Exclusivité</a>
                    </div>
                    <h3 className="title">
                      {" "}
                      <a href="blog-single.html">Vous êtes à la une</a>
                    </h3>
                    <div className="summary">
                      Chaque mois, nous mettons en avant nos fidèles clients.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="empty-space"></div>
    </div>
  </div>
)

export default News
