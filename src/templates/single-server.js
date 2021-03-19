import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import {
  Badge,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap"
import Img from "gatsby-image"
import authors from "../util/authors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SinglePost = ({ data, pageContext }) => {
  const post = data.markdownRemark.frontmatter
  const author = authors.find(x => x.name === post.author)

  const baseUrl = "https://aberrantwinds.xyz"
  const message =
    "Come check out this modded Minecraft server by Aberrant Winds!%0A"

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
          <CardTitle>
            Ip Address: <span className="text-highlight">{post.address}</span>
          </CardTitle>
          <CardSubtitle>
            Publicity: <span className="text-highlight">{post.publicity}</span>
          </CardSubtitle>
          <CardSubtitle>
            Created by <span>{post.creator}</span>
          </CardSubtitle>
          
          <CardText></CardText>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          <Button
            className="btn btn-outline-light float-right text-uppercase"
            color="$navbar-text"
            href={post.modsDownload}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </Button>
          <Badge className={post.status==="Active" ? "active-highlight" : "inactive-highlight"}>{post.status}</Badge>
        </CardBody>
      </Card>
      <h3 className="text-center">Share this Server</h3>
      <div className="text-center social-share-links">
        <ul>
          <li>
            <a
              href={
                "https://www.facebook.com/sharer/sharer.php?u=" +
                message +
                baseUrl +
                "/" +
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
                message +
                baseUrl +
                "/" +
                pageContext.slug +
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
                "https://www.linkedin.com/shareArticle?url=" +
                message +
                baseUrl +
                "/" +
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
  query serverPostBySlug($slug: String!, $imageUrl: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        address
        status
        creator
        publicity
        modsDownload
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
