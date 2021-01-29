import React from "react";
import { Link } from "react-router-dom"

const Welcome2 = () => (
    <div className="site-content no-padding">
        <div className="page-content">
            <div className="container">
                <div className="empty-space" />
                <div className="about-info row">
                    <div className="col-sm-6">
                        <div className="sc-heading">
                            <h3 className="second-title text-uppercase mb-3" style={{ lineHeight: "1.5" }}>Passez un séjour unique et mémorable à Songon Park</h3>
                        </div>

                        <p>
                            Songon Park est un complexe hôtelier figurant parmi les sites de référence de la métropôle du grand Abidjan. Alliant nature, culture et modernité, le site se positionne comme l'endroit où il fait bon vivre et que chaque ivoirien ou touriste doit impérativement connaître et fréquenter au moins une fois. 
                        </p>
                        <p>
                            Alliant nature, culture et modernité, le site se positionne comme l'endroit où il fait bon vivre et que chaque ivoirien ou touriste doit impérativement connaître et fréquenter au moins une fois. 
                        </p>
                        <div className="sc-heading mb-3">
                            <Link to="/about" className="first-title">Nous connaître</Link>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="col">
                            <Link to="/"><img src="images/home/h1-img1.jpg" alt="Piscine Songon Park"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Welcome2