import React from "react"
import { Helmet } from "react-helmet"
import RevolutionSlider from "../components/HomeComponents/RevolutionSlider"
import SearchRoom from "../components/HomeComponents/SearchRoom"
import VideoArea from "../components/HomeComponents/VideoArea"
import Welcome2 from "../components/HomeComponents/Welcome2"
import ServicesArea from "../components/HomeComponents/ServicesArea"
import Discount from "../components/HomeComponents/Discount"
import Testimonials from "../components/HomeComponents/Testimonials"
import Layout from "../components/Layout"
import Instagram from "../components/HomeComponents/Instagram"
import Rooms from "../components/HomeComponents/Rooms"

const Home = () => (
    <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Bienvenue à Songon Park Hotel</title>
      </Helmet>

        <div id="main-content" className="main-content">
            <div id="home-main-content" className="home-main-content home-1">
                <RevolutionSlider />
                <SearchRoom />
                <Welcome2 />
                <div className="empty-space"></div>
                <VideoArea />
                <div className="empty-space"></div>
                <Rooms />
                <div className="empty-space"></div>
                <Discount />
                <ServicesArea />
                <Testimonials />
                <div className="empty-space"></div>
                <Instagram />
            </div>
        </div>
    </Layout>
)

export default Home