import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Server from "../components/Server"
import { Row, Col } from "reactstrap"
import PaginationLinks from "../components/PaginationLinks"

const IndexPage = () => {
  const serversPerPage = 5
  let numberOfPages

  return (
    <Layout pageTitle="Aberrant Winds Server List" pageId="index">
      <Seo title="Aberrant Winds Servers" />
      <Card>
        Aberrant Winds is a community full of fantastic people who have bonded
        over our love of games. My goal is to add a little extra spice into the
        mix, with your help of course. The vision is to create a community and
        space where players can all band together and enjoy starting and playing
        through games together, as well as reminisce on old ones. Every several
        months we vote to create a new server to be hosted on a game of your
        choice. The best part is that you already have a community built in, so
        you don't need to worry about finding new people or new friends to play
        with. There will be both new and old faces, new teams and rivalries, new
        gaming experiences, new builds, as well as the comfort of some of your
        favourite games. From time to time community favorites will be revisited
        and maybe even become a permanent addition to our dedicated server pool.
      </Card>
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
      sort: {
        fields: [frontmatter___status, frontmatter___title]
        order: [ASC, ASC]
      }
      limit: 5
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
