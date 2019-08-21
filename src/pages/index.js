import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} style={{marginBottom:'4rem'}}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title} 
              </h3>
              <p style={{
                fontSize:'.9rem',
                color:'#777777'
              }}>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
