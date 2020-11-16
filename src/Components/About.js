import React from 'react'

function About() {
    return (
        <section className="home-section about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">
          Web developer based out of Bengaluru
        </p>

        <div className="about-me__body">
          <p>
            Passionate UI developer with 5.5 years of experience in software
            development. Highly skilled in JavaScript, React, Typescript, HTML,
            CSS, Page load optimization, Responsive web design.
          </p>
          <p>
            <i className="fa fa-medal" aria-hidden="true"></i>
            Got Certificate of Appreciation at JLL Ovations for Q1 2020 @ JLL given for solving complex state management with redux.
            Converted the existing search module to Redux based configuration driven architecture to onboarded 5 new modules. Potential 60% lines of code reduction and faster feature delivery.
          </p>
          <p>
            <i className="fa fa-medal" aria-hidden="true"></i>
              Got Spot Award (July 2019) @ HashedIn Technologies given for migrating state management of the entire app from Mobx to Redux.
          </p>
          <p>
            <i className="fa fa-medal" aria-hidden="true"></i>
            	Got Summit Award (May 2018, June 2017) twice in Mphasis given for exceptional contribution and client satisfaction.
          </p>
          <p>
            Completed 3 <strong>FreeCodeCamp certifications</strong> for web
            development, each certificate curriculum should take approximately
            300 hours to complete and includes 5 required projects.
            <br></br>
            <a
              href="https://www.freecodecamp.org/certification/fccdc4368d0/front-end-libraries"
              target="_blank"
              rel="noreferrer"
              className="certificate"
            >
              <i className="fa fa-certificate" aria-hidden="true"></i>
              Front End Libraries (React, Redux, Sass, Bootstrap, jQuery)
            </a>
            <a
              rel="noreferrer"
              href="https://www.freecodecamp.org/certification/fccdc4368d0/responsive-web-design"
              target="_blank"
              className="certificate"
            >
              <i className="fa fa-certificate" aria-hidden="true"></i>
              Algorithms and Data Structures (with JavaScript.)
            </a>
            <a
              rel="noreferrer"
              href="https://www.freecodecamp.org/certification/fccdc4368d0/javascript-algorithms-and-data-structures"
              className="certificate"
              target="_blank"
            >
              <i className="fa fa-certificate" aria-hidden="true"></i>
              Responsive Web Design (HTML, CSS, Flexbox, CSS Grid)
            </a>
          </p>
        </div>

        <img
          src="img/secondary.webp"
          alt="Sid leaning against a tree"
          className="about-me__img"
        />
      </section>
    )
}

export default About
