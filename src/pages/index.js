import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Server from "../components/Server"
import { Row, Col } from "reactstrap"
import PaginationLinks from "../components/PaginationLinks"

const IndexPage = () => {
  const serversPerPage = 7
  let numberOfPages

  return (
    <Layout pageTitle="Aberrant Winds Server List" pageId="index">
      <Seo title="Aberrant Winds Servers" />
      <StaticQuery
        query={indexQuery}
        render={data => {
          numberOfPages = Math.ceil(
            data.allMarkdownRemark.totalCount / (serversPerPage + 1)
          )
          return (
            <div>
              <Row className="justify-content-md-center">
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <Col md={node.frontmatter.seasonal === "true" ? "12" : "6"}>
                    <Server
                      key={node.id}
                      title={node.frontmatter.title}
                      author={node.frontmatter.author}
                      slug={node.fields.slug}
                      date={node.frontmatter.date}
                      body={node.excerpt}
                      seasonal={node.frontmatter.seasonal}
                      fluid={
                        node.frontmatter.image.childImageSharp.gatsbyImageData
                      }
                      status={node.frontmatter.status}
                    />
                  </Col>
                ))}
              </Row>
              <PaginationLinks
                currentPage={1}
                numberOfPages={numberOfPages}
                pageType="/servers/"
                homePage="/"
              />
            </div>
          )
        }}
      />
    </Layout>
  )
}
const indexQuery = graphql`
  {
    allMarkdownRemark(
      sort: [{frontmatter: {status: ASC}}, {frontmatter: {title: ASC}}]
      limit: 7
      filter: {frontmatter: {type: {eq: "server"}}}
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
            seasonal
            image {
              childImageSharp {
                gatsbyImageData(width: 600)
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
