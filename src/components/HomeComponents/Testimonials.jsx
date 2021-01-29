import React from "react";

const Testimonials = () => (
  <div className="h1-bg-testimonial">
    <div className="sc-content-overlay">
      <div className="container rectangle-overlay">
        <div className="sc-testimonials style-01">
          <h3 className="heading">
            Ce que nos clients disent <br /> de nous
          </h3>
          <div
            className="testimonial-slider"
            data-itemsvisible={3}
            data-nav="false"
          >
            <div className="item">
              <div className="content">
                <div className="image">
                  <img src="images/blog/author.jpg" alt="" />
                </div>
                <div className="rating-star" />
                <div className="description">
                  " Songon Park est un endroit merveilleux. J'ai beaucoup
                  apprécié le professionnalisme de leur personel et la
                  manière dont j'ai été traité. Ils étaient à mes petits
                  soins dans les moindres détails. "
                </div>
                <div className="user-info">
                  <h4 className="name">Evrard Kouassi</h4>
                  <div className="regency">Entrepreneur</div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="content">
                <div className="image">
                  <img src="images/blog/author1.jpg" alt="" />
                </div>
                <div className="rating-star" />
                <div className="description">
                  " Si vous voulez faire plaisir un week-end à vos enfants,
                  je vous recommande fortement le complexe hotelier Songon
                  Park. Dans un cadre naturel, il offre des commodités qui
                  leur plairont forcement. "
                </div>
                <div className="user-info">
                  <h4 className="name">Roxanne Traoré</h4>
                  <div className="regency">Mère de 2 enfants</div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="content">
                <div className="image">
                  <img src="images/blog/author2.jpg" alt="" />
                </div>
                <div className="rating-star" />
                <div className="description">
                  " Les soirées à Songon Park resteront gravés dans ma
                  mémoire comme de très beaux souvenirs. Ambiance
                  chaleureuse, gastronomie spéciale, artistes d'ici et
                  d'ailleurs, j'ai beaucoup apprécié. "
                </div>
                <div className="user-info">
                  <h4 className="name">Claude Essoh</h4>
                  <div className="regency">Disc Joker</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
