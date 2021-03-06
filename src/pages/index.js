import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"
import PaginationLinks from "../components/PaginationLinks"

const IndexPage = () => {
  const postsPerPage = 10
  let numberOfPages

  return (
    <Layout pageTitle="Welcome to Aberrant Winds!" pageId="index">
      <SEO title="Home" />
      <StaticQuery
        query={indexQuery}
        render={data => {
          numberOfPages = Math.ceil(
            data.allMarkdownRemark.totalCount / postsPerPage
          )
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post
                  key={node.id}
                  title={node.frontmatter.title}
                  author={node.frontmatter.author}
                  slug={node.fields.slug}
                  date={node.frontmatter.date}
                  body={node.excerpt}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                  tags={node.frontmatter.tags}
                />
              ))}
              <PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
            </div>
          )
        }}
      />
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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

export default IndexPage
