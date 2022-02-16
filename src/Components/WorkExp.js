import React from 'react'

function Work() {
  return (
    <section className="home-section my-services text-center" id="skills">
      <h2 className="section__title section__title--services text-primary">
        Work Experience
      </h2>
      <div className="services">
        <h3 className="text-center dark-border">
          Senior Frontend Engineer @ BuyerAssist
        </h3>
        <div className="text-left">
          <p>
            <i class="fas fa-bullseye"></i> Lead a team of 4 to build a Buyer engagement and customer collaboration platform for the sales team.
          </p>
          <p> <i class="fas fa-bullseye"></i>Took ownership of codebase and architected <strong>React SPA</strong> to make it scalable, maintainable, and extensible.</p>
          <p> <i class="fas fa-bullseye"></i>Collaborated with UX designer to implement a design system and component library. Published a storybook for faster, consistent UI development, improved reusability.</p>
          <p> <i class="fas fa-bullseye"></i><strong>Optimized the page load time </strong>by 50% with code splitting, preloading, image optimization, profiling.</p>
          <p> <i class="fas fa-bullseye"></i>Built <strong>optimistic UI</strong>, updates the UI immediately on the action and syncs in the background. This resulted in a better user experience with quick response time.</p>
          <p> <i class="fas fa-bullseye"></i>Implemented <strong>Redux-toolkit</strong> to scale for complex and large data by normalizing it into relational data. It helped develop state management efficiently, reduced code boilerplate by 40%.</p>
          <p> <i class="fas fa-bullseye"></i>Saved 30% development time by implementing HMR [updates app without a browser reload] with Webpack 5, improving the developer experience.</p>
        </div>

      </div>
      <div className="services services-grid">
        <div className="service">
          <h3>
            Senior Frontend Developer
            <br></br>@ JLL India
          </h3>
          <p className="text-left">
            Working as senior UI developer for Global Property Solution, a research application, designed for real estate brokers across the world. Aims to make an accurate, complete commercial property data platform.
            <br></br>
            <br></br>
            Developed a single-page React application with
            Apollo-graphql for large data set, involved in designing the
            architecture for scalability and maintainability.
          </p>
        </div>

        <div className="service">
          <h3>
            Senior Software Engineer <br></br>@ Hashedin
          </h3>
          <p className="text-left">
            Worked on Honeywell Building Management Solution
            &nbsp; is portfolio of the connected devices to track real-time
            performance, ensure buildings continue operate optimally and help
            focus maintenance activities.
            <br></br>
            <br></br>
            Architected and Developed a single-page
            React

            application with Redux and integrated complex api
            from GraphQL, elastic search, O-data, REST web-services.
          </p>
        </div>

        <div className="service">
          <h3>
            Delivery Software Associate <br></br>@ Mphasis
          </h3>
          <p className="text-left">
            Worked on Multiple FedEx projects. Visa
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
