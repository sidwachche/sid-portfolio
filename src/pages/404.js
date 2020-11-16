import React from 'react';
import "./404.css";
import { Link } from "gatsby";

function PageNotFound() {
    return (
        <div className="not-found-container">
            <h1 className="not-found-header">404</h1>
            <p className="not-found-msg">Oops! Something is wrong.</p>
            <Link to="/" target="_blank" className="not-found-button">Back to Home</Link>
        </div>
    )
}

export default PageNotFound
