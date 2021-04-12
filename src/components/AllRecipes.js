import React from 'react'
import RecipesList from './RecipesList'
import TagsList from "./TagList"
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  {
    allContentfulRecipe(sort: {fields: title, order: ASC}) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
    const { allContentfulRecipe: { nodes: recipes } } = useStaticQuery(query)
    // const recipes = data.allContentfulRecipe.nodes
    return (
        <div>
            <h3>All recipes </h3>
            <TagsList recipes={recipes} />
            <RecipesList recipes={recipes} />
        </div>
    )
}

export default AllRecipes
