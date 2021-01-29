import React from "react";

const AboutSection = () => (
  <section className="ftco-section ftc-no-pb ftc-no-pt">
    <div className="container">
      <div className="row d-flex justify-content-between">
        <div
          className="col-md-5 p-md-5"
          style={{
            backgroundImage: "url(images/f.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "400px"
          }}
        >
        </div>
        <div className="col-md-6 py-5 wrap-about pb-md-5 ftco-animate">
          <div className="heading-section heading-section-wo-line pt-md-5 mb-5">
            <div className="ml-md-0">
              <div className="sc-heading">
              <p className="first-title">BIENVENUE DANS</p>
              <h3 className="second-title">NOTRE HOTEL</h3>
            </div>
            </div>
          </div>
          <div className="pb-md-5">
            <p>
              Songon Park est un complexe hôtelier figurant parmi les sites de référence de la métropôle du grand Abidjan. Alliant nature, culture et modernité, le site se posistionne comme l'endroit où il fait bon vivre et où que chaque ivoirien ou touriste doit impérativemebt connaître et fréquenter au moins une fois. 
            </p>
            <p>
              Apportant une réelle valeur ajoutée à sa clientèle par un personnel professionnel, des actions concrètes et des infrastructures de pointe, Songon Park Village est sûrement l'endroit qu'il faut à vous, votre famille, vos amis pour un moment de détente, de paix et de repos.
            </p>
            <p>
              Notre but ultime est d'impacter positivement le domaine de l'hotellerie et des loisirs en Côte d'Ivoire en tranformant notre dénomination en véritable label.
            </p>
            <ul className="ftco-social d-flex">
              <li className="ftco-animate">
                <a href="#">
                  <span className="icon-facebook" />
                </a>
              </li>
              <li className="ftco-animate">
                <a href="#">
                  <span className="icon-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
