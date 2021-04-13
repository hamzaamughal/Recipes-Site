import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from '../components/RecipesList'
import Seo from '../components/SEO'

const About = ({ data: { allContentfulRecipe: { nodes: recipes } } }) => {

  return (
    <Layout>
      <Seo title="About" description="this is about page description" />
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
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
