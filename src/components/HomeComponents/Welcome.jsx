import React from "react";

const Welcome = () => (
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-1">
        <div className="col-md-7 heading-section text-center ftco-animate">
          <span className="subheading">Bienvenue à Songon Park</span>
          <h2 className="mb-4">Venez et rêvez éveillé</h2>
        </div>
      </div>
      <div
        className="row"
        style={{
          border: "20px solid #2e9f26",
          padding: "50px"
        }}
      >
        <p
          style={{
            letterSpacing: "5px"
          }}
        >
        </p>
          SONGON PARK
        <div className="row">
          <div className="col">
            <h3
              style={{
                fontSize: "3em",
                lineHeight: "50px",
                fontWeight: "bold"
              }}
            >
              Tout y est pour un séjour parfait
            </h3>
            <br />
            <p
              style={{
                fontSize: "1.1em",
                textAlign: "justify"
              }}
            >
              Complexe hôtelier en pleine nature situé juste en bordure de lagune, Songon Park Village est
              un petit paradis, un havre de paix et de gaieté parfait pour vous évader loin du tumulte du
              centre ville. Sécurisé, facilement accessible et conviviable, ce cadre unique offre des
              avantages et commodités dignes d'un complexe hôtelier.
            </p>
             <p
              style={{
                  fontSize: "1.1em",
                  textAlign: "justify"
              }}
             >
              Tout est mis en place pour que vous, notre aimable clientèle passiez un séjour inoubliable et
              ce n'est pas juste une phrase mais une réalité.
              Sorties détentes entre amis, famille, moments de repos, d'évasion, découvertes, rencontres
              d'affaires, évènements, peu importe le motif qui vous amène sur notre site, vous serez traités
              comme de véritables rois car c'est à juste titre ce que vous êtes et resterez toujours à nos yeux.
          </p>
          </div>
          <div className="col">
            <p
              style={{
                fontSize: "1.1em",
                color: "#fff",
                textAlign: "justify"
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              atque provident id iste. Assumenda, minima. Excepturi mollitia
              eligendi labore voluptates doloremque velit veritatis iure hic
              quis Lorem ipsum dolor{" "}
            </p>
            <p
            style={{
                fontSize: "1.1em"
              }}
            >
              Espaces verts, aires de jeux pour enfants, Jetskis, grande piscine en plein air juste en face de
              la lagune, restaurants avec une gastronomie unique, salle de sport, salle de détente, connexion internet
              haut débit, bar flottant sur l'eau, casino, SPA... nous avons tout ce qu'il faut pour vous satisfaire.
              Nous n'attendons plus que vous.
            </p>
            <br />
            <a
              href="/rooms"
              className="d-flex align-items-center"
              style={{
                backgroundColor: "#2e9f26",
                height: "60px",
                border: "none",
                padding: "30px",
                color: "#fff",
                fontSize: "1.2em",
                width: "220px",
                letterSpacing: "5px"
              }}
            >
              RESERVATION
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Welcome;