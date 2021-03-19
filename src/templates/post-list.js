import React from "react"
import Layout from "../components/layout"
import Post from "../components/Post"
import { graphql } from "gatsby"
import PaginationLinks from '../components/PaginationLinks'

const postList = (props) => {
  const posts = props.data.allMarkdownRemark.edges
  const { currentPage, numberOfPages } = props.pageContext

  return (
    <Layout pageTitle={`Page: ${currentPage}`}>
      {posts.map(({ node }) => (
        <Post
          key={node.id}
          slug={node.fields.slug}
          title={node.frontmatter.title}
          author={node.frontmatter.author}
          date={node.frontmatter.date}
          body={node.excerpt}
          status={node.frontmatter.status}
          tags={node.frontmatter.tags}
        />
      ))}
      <PaginationLinks currentPage={currentPage} numberOfPages={numberOfPages}/>
    </Layout>
  )
}

export const postListQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "post" } } }
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
            status
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

export default postList
