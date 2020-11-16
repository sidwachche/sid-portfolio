import React from 'react'

function Intro() {
    return (
        <section className="home-section intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Sid Wachche</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">
                front-end dev
        </p>
            <img
                src="img/primary.webp"
                alt="Sid Wachche smiling"
                className="intro__img"
            />
        </section>

    )
}

export default Intro
