import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { Badge, Card, CardBody, CardSubtitle, CardText } from "reactstrap"
import Img from "gatsby-image"
import { slugify } from "../util/utilityFunctions"
import authors from "../util/authors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SinglePost = ({ data, pageContext }) => {
  const post = data.markdownRemark.frontmatter
  const author = authors.find(x => x.name === post.author)

  const baseUrl = "https://gatsbytutorial.co.uk"

  return (
    <Layout
      pageTitle={post.title}
      postAuthor={author}
      authorImageFluid={data.file.childImageSharp.fluid}
    >
      <SEO title={post.title} />
      <Card>
        <Img
          className="card-image-top"
          fluid={post.image.childImageSharp.fluid}
        />
        <CardBody>
          <CardSubtitle>
             Ip Address:{' '} <span className="text-info">{post.address}</span>
          </CardSubtitle>
          <CardText></CardText>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          <ul className="post-tags">
            {post.tags.map(tag => (
              <li key={tag}>
                <Link to={`/tag/${slugify(tag)}`}>
                  <Badge color="primary">{tag}</Badge>
                </Link>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
      <h3 className="text-center">Share this Server</h3>
      <div className="text-center social-share-links">
        <ul>
          <li>
            <a
              href={
                "https://www.facebook.com/sharer/sharer.php?u=" +
                baseUrl +
                pageContext.slug
              }
              className="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
            </a>
          </li>
          <li>
            <a
              href={
                "https://twitter.com/share?url=" +
                baseUrl +
                pageContext.slug +
                "&text=" +
                post.title +
                "&via" +
                "twitterHandle"
              }
              className="twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
            </a>
          </li>
          <li>
            <a
              href={
                "https://plus.google.com/shar?url=" + baseUrl + pageContext.slug
              }
              className="google"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "google"]} size="2x" />
            </a>
          </li>
          <li>
            <a
              href={
                "https://www.linkedin.com/shareArticle?url=" +
                baseUrl +
                pageContext.slug
              }
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!, $imageUrl: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
        address
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    file(relativePath: { eq: $imageUrl }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default SinglePost
