import React from 'react'

function Work() {
  return (
    <section className="home-section my-services" id="skills">
      <div className="skill-set">
        {/* <h2 className="section__title section__title--services">Skill Set</h2> */}
        <h2 className="section__title section__title--skill">Skill Set</h2>
        <div className="skills__body">
          <ul>
            <li className="skills__title">Frontend</li>
            <li className="skills__item">
              React, Redux, JavaScript, Gatsby
              </li>
            <li className="skills__item">ES6, Typescript, Redux-Saga</li>
            <li className="skills__item">HTML, CSS, SCSS, Web Vitals, Angular</li>
            <li className="skills__item">Jest, Enzyme, React Testing library</li>
          </ul>

          <ul>
            <li className="skills__title">Backend</li>
            <li className="skills__item">Node.JS, Express</li>
            <li className="skills__item">Graphql, Apollo</li>
            <li className="skills__item">Azure devops, search, serverless</li>
            <li className="skills__item">Rest API, Load testing K6.io</li>
          </ul>

          <ul>
            <li className="skills__title">Tools</li>
            <li className="skills__item">Git, NPM, SEO, Jira</li>
            <li className="skills__item">TDD, SQL, Linux</li>
            <li className="skills__item">Webpack 4, ES Lint</li>
            <li className="skills__item">Materiel UI, High Charts</li>
          </ul>
        </div>
      </div>
      <h2 className="section__title section__title--services">
        Work Experience
            </h2>
      <div className="services">
        <div className="service">
          <h3>
            Senior Web Developer
              <br></br>@ JLL India
            </h3>
          <p className="text-left">
            Working as senior member of the front-end team for&nbsp;
              <strong>Global Property Solution</strong>, which is designed for
              real estate brokers across the world, as a research application.
              Aims to make accurate, and complete commercial property and
              interest data platform.
              <br></br>
            <br></br>
              Developed a single-page <strong>React</strong> application with
              Apollo-graphql for large data set, involved in designing the
              architecture for scalability and maintainability.
            </p>
        </div>

        <div className="service">
          <h3>
            Senior Software Engineer <br></br>@ Hashedin
            </h3>
          <p className="text-left">
            Worked on <strong>Honeywell Building Management Solution</strong>
              &nbsp; is portfolio of the connected devices to track real-time
              performance, ensure buildings continue operate optimally and help
              focus maintenance activities.
              <br></br>
            <br></br>
              Architected and Developed a single-page <strong>
              React
              </strong>{" "}
              application with <strong>Redux</strong> and integrated complex api
              from GraphQL, elastic search, O-data, REST web-services.
            </p>
        </div>

        <div className="service">
          <h3>
            Delivery Software Associate <br></br>@ Mphasis
            </h3>
          <p className="text-left">
            Worked on Multiple <strong>FedEx</strong> projects. Visa
              Management System for maintaining visa details of enterprise
              employees in APAC, EMEA, and the US region and tracking the
              preemptive expiry date.
              <br></br>
              <br></br>
              Logistics Enhanced Operations for FedEx
              operations related to pickup, delivery, and station
              inbound/outbound.
            </p>
        </div>
      </div>

      {/* <Link to="#work"></Link> */}
      <a href="#work" className="btn">
        My Work
        </a>
    </section>

  )
}

export default Work
