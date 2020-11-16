import React from 'react';
import About from './About';
import Intro from './Intro';
import Layout from './Layout'
import Projects from './Projects';
import WorkExp from './WorkExp';

function Home() {
    return (
        <div className="home-page">
            <Layout>
                {/* <!-- Introduction --> */}
                <Intro></Intro>

                {/* <!-- My services --> */}
                <WorkExp/>

                {/* <!-- About me --> */}
                <About></About>

                {/* <!-- My Work --> */}
                <Projects></Projects>

                {/* <!-- Footer --> */}
            </Layout>
        </div>
    )
}

export default Home
