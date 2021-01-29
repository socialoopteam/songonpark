import React from 'react'
import { Link } from 'react-router-dom'

const BookNow = () => (
    <div className="d-flex justify-content-center p-5">
        <Link to="/rooms" className="btn-book" style={{ padding: "25px", fontSize: "1.15em", fontWeight: "bold", letterSpacing: "4px" }}>
          RESERVER MAINTENANT
        </Link>
    </div>
)

export default BookNow