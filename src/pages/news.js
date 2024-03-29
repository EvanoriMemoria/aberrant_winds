import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"
import PaginationLinks from "../components/PaginationLinks"

const newsPage = () => {
  const postsPerPage = 6
  let numberOfPages

  return (
    <Layout pageTitle="News" pageId="news">
      <Seo title="Aberrant Winds News" />
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
                  tags={node.frontmatter.tags}
                />
              ))}
              <PaginationLinks
                currentPage={1}
                numberOfPages={numberOfPages}
                pageType="/news/"
                homePage="/news/"
              />
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
      sort: {frontmatter: {date: DESC}}
      filter: { frontmatter: { type: { eq: "post" } } }
      limit: 6
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
            tags
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

export default newsPage
