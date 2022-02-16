import React from 'react'

function About() {
  return (
    <section className="home-section" id="about">
      <section className="about-me">

        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about white-border text-primary">
          Frontend Developer based out of India
        </p>

        <div className="about-me__body text-left">
          <p>
            Passionate UI developer with 7 years of experience in software
            development. Love working in JavaScript ecosystem.
          </p>
          <p>
            Proficient in building performant React apps, managing complex state, creating beautiful and responsive UI.
          </p>
          <p>
            Thrive in a scaling startup, can decompose tricky problems, work intentionally towards a clean solution and have fun building high-quality code.
          </p>


          <h3 className="text-primary">Awards</h3>
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


          <h3 className="text-primary">Certificates</h3>
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

        </div>
        <div className="skill-set">
          <h2 className="section__title section__title--skill">Skill Set</h2>
          <div className="skills__body">
            <ul>
              <li className="skills__title text-primary">Frontend</li>
              <li className="skills__item">
                React, Redux, JavaScript, Gatsby
              </li>
              <li className="skills__item">HTML, CSS, SCSS, Web Vitals, Angular</li>
              <li className="skills__item">ES6, Typescript, Webpack 5, Material UI</li>
              <li className="skills__item">Jest, Enzyme, React Testing library</li>
            </ul>

            <ul>
              <li className="skills__title text-primary">Backend</li>
              <li className="skills__item">Node.JS, Express</li>
              <li className="skills__item">Graphql, Apollo</li>
              <li className="skills__item">Azure devops, search, serverless</li>
              <li className="skills__item">Rest API, Load testing K6.io</li>
            </ul>

            <ul>
              <li className="skills__title text-primary">Tools</li>
              <li className="skills__item">Git, NPM, SEO, Jira, storybook</li>
              <li className="skills__item">TDD, SQL, Linux, High Charts</li>
              <li className="skills__item">Webpack 4, ES Lint, tailwind</li>
              <li className="skills__item">Performance/Page load Optimization</li>
            </ul>
          </div>
        </div>

      </section>
    </section>
  )
}

export default About
