import React from 'react'

function Footer() {
    return (
        <footer className="footer">
            <a href="mailto:sidwachche@outlook.com" className="footer__link">
                sidwachche@outlook.com
        </a>

            <ul className="social-list">
                <li className="social-list__item">
                    <a
                        className="social-list__link"
                        href="https://www.linkedin.com/in/siddhaling-wachche-a3764a75/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a
                        className="social-list__link"
                        href="https://codepen.io/sidwachche"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-codepen"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a
                        className="social-list__link"
                        href="https://www.instagram.com/sidwachche"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a
                        className="social-list__link"
                        href="https://twitter.com/sidwachche"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a
                        className="social-list__link"
                        href="https://github.com/sidwachche"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </li>
            </ul>
        </footer>

    )
}

export default Footer
