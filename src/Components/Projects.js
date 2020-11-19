import React from 'react'
import { Link } from "gatsby"

function Projects() {
  return (
    <section className="home-section my-work" id="work">
      <h2 className="section__title section__title--work">My work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
        </p>

      <div className="portfolio">
        <Link to="/Calculator" target="_blank" className="portfolio__item">
          <img src="img/Calc.webp" alt="" className="portfolio__img" />
          {/* <div className="project__name">Calculator</div> */}
        </Link>
        <Link to="/drum-machine" target="_blank" className="portfolio__item">
          <img src="img/drum.webp" alt="" className="portfolio__img" />
          {/* <div className="project__name">Calculator</div> */}
        </Link>
        <Link to="/RandomQuote" target="_blank" className="portfolio__item">
          <img src="img/quote.webp" alt="" className="portfolio__img" />
          {/* <div className="project__name">Calculator</div> */}
        </Link>
        <Link to="/markdown-preview" target="_blank" className="portfolio__item">
          <img src="img/markdown.webp" alt="" className="portfolio__img" />
          {/* <div className="project__name">Calculator</div> */}
        </Link>
        <Link to="/Pomodoro" target="_blank" rel="noreferrer noopener" className="portfolio__item">
          <img src="img/pomo.webp" alt="" className="portfolio__img" />
          {/* <div className="project__name">Calculator</div> */}
        </Link>

      </div>
    </section>
  )
}

export default Projects
