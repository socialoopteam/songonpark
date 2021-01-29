import React from 'react'
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => (
    <div id="wrapper-container" className="content-pusher">
        <div className="overlay-close-menu"></div>
        <Header />
        { children }
        <Footer />
    </div>
)

export default Layout