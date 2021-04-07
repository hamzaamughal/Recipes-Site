import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
    return (
        <Layout>
            <main className="page">
                <section className="about-page">
                    <article>
                        <h2>Prism edison bulb vaporware normcore</h2>
                        <p>Pickled tbh farm-to-table keytar freegan, ennui hell of coloring book food truck cornhole echo park</p>
                        <p>Semiotics iPhone craft beer mlkshk meditation pinterest bespoke</p>
                        <Link to="/contact" className="btn">contact</Link>
                    </article>
                    <StaticImage src="../assets/images/about.jpeg" alt="aboutimg" className="about-img" placeholder="blurred" />
                </section>
            </main>
        </Layout>
    )
}

export default About
