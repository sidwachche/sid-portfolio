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
          development. Love working in JavaScript ecosystem.
           Expert in MERN stack, JAM stack, complex state management, performant web apps, responsive web design.
          </p>
          <h3>Certificates</h3>
        <p>
          Completed 3 <strong>FreeCodeCamp certifications</strong> for web
            development, each certificate curriculum should take approximately
            300 hours to complete and includes 5 required projects.
            <br></br>
          <a
            href="https://www.freecodecamp.org/certification/fccdc4368d0/front-end-libraries"
            target="_blank"
            rel="noreferrer"
            className="about-me__certificate"
          >
            <i className="fa fa-certificate" aria-hidden="true"></i>
              Front End Libraries (React, Redux, Sass, Bootstrap, jQuery)
            </a>
          <a
            rel="noreferrer"
            href="https://www.freecodecamp.org/certification/fccdc4368d0/responsive-web-design"
            target="_blank"
            className="about-me__certificate"
          >
            <i className="fa fa-certificate" aria-hidden="true"></i>
              Algorithms and Data Structures (with JavaScript)
            </a>
          <a
            rel="noreferrer"
            href="https://www.freecodecamp.org/certification/fccdc4368d0/javascript-algorithms-and-data-structures"
            className="about-me__certificate"
            target="_blank"
          >
            <i className="fa fa-certificate" aria-hidden="true"></i>
              Responsive Web Design (HTML, CSS, Flexbox, CSS Grid)
            </a>
        </p>
        <h3>Awards</h3>
        <p className="about-me__award-description">
          <i className="fa fa-medal" aria-hidden="true"></i>
            Got Certificate of Appreciation at JLL Ovations for Q1 2020 @ JLL given for solving complex state management with redux.
          </p>
        <p className="about-me__award-description">
          <i className="fa fa-medal" aria-hidden="true"></i>
              Got Spot Award (July 2019) @ HashedIn Technologies given for migrating state management of the entire app from Mobx to Redux.
          </p>
        <p className="about-me__award-description">
          <i className="fa fa-medal" aria-hidden="true"></i>
            	Got Summit Award (May 2018, June 2017) twice in Mphasis given for exceptional contribution and client satisfaction.
          </p>

      </div>
    </section>
  )
}

export default About
