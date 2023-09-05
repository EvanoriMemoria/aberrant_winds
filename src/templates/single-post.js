import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Seo from "../components/seo"
import {
  Badge,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
} from "reactstrap"
import { slugify } from "../util/utilityFunctions"
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
      authorImageFluid={data.file.childImageSharp.gatsbyImageData}
    >
      <Seo title={post.title} />
      <Card>
        <CardBody>
        <span className="post-date">{post.date}</span>
          <CardSubtitle>
              By <span className="text-highlight">{post.author}</span>
          </CardSubtitle>
          <CardText></CardText>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          <ul className="post-tags">
            {post.tags.map(tag => (
              <li key={tag}>
                <Link to={`/tag/${slugify(tag)}`}>
                  <Badge className="badge-colors">{tag}</Badge>
                </Link>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
      <h3 className="text-center">Share this Post</h3>
      <div className="text-center social-share-links">
        <ul className="blanklist">
          <li>
            <a
              href={
                "https://www.facebook.com/sharer/sharer.php?u=" +
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
  );
}

export const postQuery = graphql`query blogPostBySlug($slug: String!, $imageUrl: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    id
    html
    frontmatter {
      title
      author
      date(formatString: "MMM Do YYYY")
      tags
      address
      modsDownload
      image {
        childImageSharp {
          gatsbyImageData(width: 700, layout: CONSTRAINED)
        }
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

export default SinglePost
