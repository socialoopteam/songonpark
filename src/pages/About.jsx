import React, { memo, useState } from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import PhotoGallery from "../components/AboutComponents/PhotoGallery"
import Greetings from "../components/AboutComponents/Greeting"
import Filtering from "../components/AboutComponents/Filtering"

const About = () => {
  let [rooms, setRooms] = useState(19)
  const [menus, setMenus] = useState(23)
  const [staff, setStaff] = useState(190)

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>A propos de nous - Songon Park Hotel</title>
      </Helmet>
      
      <div className="page-title">
        <div className="page-title-wrapper" style={{backgroundImage: "url(images/bg_2.jpg)", backgroundPosition: "center", height: "500px", backgroundSize: "cover"}}>
          <div className="content container">
            <h1 className="heading_primary">QUI SOMMES NOUS</h1>
          </div>
        </div>
      </div>

      <Greetings />

      <div className="site-content no-padding">
        <div className="page-content">
          <div className="container">
            <div className="empty-space" />
            <div className="sc-heading">
              <p className="first-title">NOTRE GALERIE</p>
              <h3 className="second-title">Songon Park en images</h3>
            </div>
          </div>
          <div className="empty-space" />
        </div>
      </div>
      {/* <PhotoGallery id="gallery" /> */}
      <Filtering />
    </Layout>
  );
}

export default memo(About)