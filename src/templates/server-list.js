import React from "react"
import Layout from "../components/layout"
import Server from "../components/Server"
import { graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import PaginationLinks from "../components/PaginationLinks"

const serverList = props => {
  const posts = props.data.allMarkdownRemark.edges
  const { serverCurrentPage, numberOfServerPages } = props.pageContext

  return (
    <Layout pageTitle={`Servers Page: ${serverCurrentPage}`}>
      <Row>
        {posts.map(({ node }) => (
          <Col md="6">
            <Server
              key={node.id}
              slug={node.fields.slug}
              title={node.frontmatter.title}
              author={node.frontmatter.author}
              date={node.frontmatter.date}
              body={node.excerpt}
              status={node.frontmatter.status}
              alt={node.frontmatter.image_alt}
              fluid={node.frontmatter.image.childImageSharp.gatsbyImageData}
            />
          </Col>
        ))}
      </Row>
      <PaginationLinks
        currentPage={serverCurrentPage}
        numberOfPages={numberOfServerPages}
        homePage="/"
        pageType="/servers/"
      />
    </Layout>
  );
}

export const serverListQuery = graphql`query serverListQuery($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: {fields: [frontmatter___status, frontmatter___title], order: [ASC, ASC]}
    filter: {frontmatter: {type: {eq: "server"}}}
    limit: $limit
    skip: $skip
  ) {
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
          image_alt
          image {
            childImageSharp {
              gatsbyImageData(
                width: 650
              )
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

export default serverList
