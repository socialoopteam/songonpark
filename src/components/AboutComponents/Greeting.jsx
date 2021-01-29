import React from "react";
import WhyChoose from "./WhyChoose"

const Greeting = () => (
  <div className="site-content no-padding">
    <div className="page-content">
      <div className="container">
        <div className="empty-space" />
        <div className="sc-heading">
          <p className="first-title">BIENVENUE</p>
          <h3 className="second-title">CHEZ VOUS</h3>
        </div>
        <div className="about-info row">
          <div className="col-sm-6">
            <p>
              Songon Park est un complexe hôtelier ayant une capacité de plus de mille cinq cent personnes (1500), figurant parmi les sites de référence de la métropôle du grand Abidjan. Alliant nature, culture et modernité, le site se positionne comme un endroit où il fait bon vivre et que chaque touriste doit impérativement connaître et fréquenter au moins une fois. 
            </p>
            <p>
              Apportant une réelle valeur ajoutée à sa clientèle par un personnel professionnel, des actions concrètes et des infrastructures de pointe, Songon Park Village est sûrement l'endroit qu'il faut à vous, votre famille, vos amis pour un moment de détente, de paix et de repos.
            </p>
          </div>
          <div className="col-sm-6">
            <p>
              En termes d'infrastructures, le site comprend des salles de conférences qui ont une capacité de trente (30) personnes pour la plus petite et trois cent (300) personnes pour la plus grande. nous avons des jeux nautiques, un mini parc animalier composé d’oies, de paons, de canards, d’ânes…, le jardin botanique qui compte plus de quarante espèces d’arbres fruitiers et un sous-bois très bien entretenu.
            </p>
            <p>
              Côté restauration, nous vous faisons voyager aux quatre coins du monde avec nos mets divers et variés. Nous mettons toutefois l’accent sur la culture ivoirienne avec notre kédjénou au vin de palm ou encore le Gouagouassou façon Songon Park… 
              Nous ne sommes pas en reste avec nos cocktails qui allient tradition et modernisme avec des cocktails fait à base de koutoukou ou de bangui.
            </p>
          </div>
        </div>
        <WhyChoose />
        <div className="sc-about-slides row">
          <ul className="slides owl-theme owl-carousel">
            <li>
              <img src="images/gallery/about-1.jpg" alt="Grillades" />
            </li>
            <li>
              <img src="images/gallery/about-2.jpg" alt="Grilladine" />
            </li>
            <li>
              <img src="images/gallery/about-3.jpg" alt="Vins et spiritueux" />
            </li>
            <li>
              <img src="images/gallery/about-4.jpg" alt="Chambres" />
            </li>
            <li>
              <img src="images/gallery/about-5.jpg" alt="Bouffe" />
            </li>
            <li>
              <img src="images/gallery/about-6.jpg" alt="Entrée" />
            </li>
            <li>
              <img src="images/gallery/about-7.jpg" alt="Terrasse" />
            </li>
            <li>
              <img src="images/gallery/about-8.jpg" alt="Soirées" />
            </li>
          </ul>
        </div>
      </div>
      <div className="empty-space" />
      <div className="sc-counter-box">
        <div className="sc-content-overlay">
          <div className="container">
            <div className="wrapper clearfix">
              <div className="item">
                <div className="number">
                  <span className="counter-up" data-number={93}>
                    0
                  </span>
                </div>
                <div className="text">Suites</div>
              </div>
              <div className="item">
                <div className="number">
                  <span className="counter-up" data-number={77}>
                    0
                  </span>
                </div>
                <div className="text">pros</div>
              </div>
              <div className="item">
                <div className="number">
                  <span className="counter-up" data-number={96}>
                    0
                  </span>
                </div>
                <div className="text">Menus</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Greeting;
