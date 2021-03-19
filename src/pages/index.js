import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Server from "../components/Server"
import { Row, Col } from "reactstrap"

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to Aberrant Winds!" pageId="index">
      <SEO title="Home" />
      <StaticQuery
        query={indexQuery}
        render={data => {
          return (
            <div>
              <Row>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <Col md="6">
                    <Server
                      key={node.id}
                      title={node.frontmatter.title}
                      author={node.frontmatter.author}
                      slug={node.fields.slug}
                      date={node.frontmatter.date}
                      body={node.excerpt}
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                      status={node.frontmatter.status}
                    />
                  </Col>
                ))}
              </Row>
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
      sort: { fields: [frontmatter___status, frontmatter___title], order: [ASC, ASC] }
      limit: 10
      filter: { frontmatter: { type: { eq: "server" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            type
            status
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
