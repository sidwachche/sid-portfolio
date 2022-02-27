import React from 'react'

function Intro() {
    return (
        <section className="home-section intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Sid Wachche</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">
                Frontend Developer
            </p>
            <picture className="intro__img">
                <source srcset="img/siddha.webp" alt="Siddhaling Wachche" />
                <img src="img/siddha.jpeg" alt="Siddhaling Wachche" />
            </picture>
        </section>
    )
}

export default Intro
