import React from "react"
import Layout from "../components/layout"
import Post from "../components/Post"
import { graphql } from "gatsby"
import authors from "../util/authors"

// Page which displays posts by author
const authorPosts = ({ data, pageContext }) => {
  const { totalCount } = data.allMarkdownRemark
  const author = authors.find(x => x.name === pageContext.authorName)
  const pageHeader = `${totalCount} Posts/Servers by: ${pageContext.authorName}`

  return (
    <Layout
      pageTitle={pageHeader}
      postAuthor={author}
      authorImageFluid={data.file.childImageSharp.gatsbyImageData}
    >
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Post
          key={node.id}
          slug={node.fields.slug}
          title={node.frontmatter.title}
          author={node.frontmatter.author}
          date={node.frontmatter.date}
          body={node.excerpt}
          tags={node.frontmatter.tags}
        />
      ))}
    </Layout>
  );
}

export const authorQuery = graphql`query ($authorName: String!, $imageUrl: String!) {
  allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {author: {eq: $authorName}}}
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
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
  file(relativePath: {eq: $imageUrl}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
}
`

export default authorPosts
