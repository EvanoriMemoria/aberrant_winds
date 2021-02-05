import React from "react"
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Form,
  FormGroup,
  Input,
} from "reactstrap"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Sidebar = ({ author, authorFluid }) => (
  <div>
    {author && (
      <Card>
        <Img className="card-image-top" fluid={authorFluid} />
        <CardBody>
          <CardTitle className="text-center text-uppercase mb-3">
            {author.name}
          </CardTitle>
          <CardText>{author.bio}</CardText>
          <div className="author-social-links text-center">
            <ul>
              <li>
                <a
                  href={author.facebook}
                  targe="_blank"
                  rel="noopener noreferrer"
                  className="facebook"
                >
                  <FontAwesomeIcon icon={["fab", "facebook"]} size="lg" />
                </a>
                <a
                  href={author.twitter}
                  targe="_blank"
                  rel="noopener noreferrer"
                  className="twitter"
                >
                  <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
                </a>
                <a
                  href={author.instagram}
                  targe="_blank"
                  rel="noopener noreferrer"
                  className="instagram"
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
                </a>
                <a
                  href={author.google}
                  targe="_blank"
                  rel="noopener noreferrer"
                  className="google"
                >
                  <FontAwesomeIcon icon={["fab", "google"]} size="lg" />
                </a>
                <a
                  href={author.linkedin}
                  targe="_blank"
                  rel="noopener noreferrer"
                  className="linkedin"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
                </a>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
    )}
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Newsletter
        </CardTitle>
        <Form className="text-center">
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Your email address."
            />
          </FormGroup>
          <button className="btn btn-outline-success text-uppercase">
            Subscribe
          </button>
        </Form>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">
          Advertisement
        </CardTitle>
        <img
          src="https://via.placeholder.com/320x200"
          alt="Advert"
          style={{ width: "100%" }}
        />
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Recent Posts
        </CardTitle>
        <StaticQuery
          query={sidebarQuery}
          render={data => (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card key={node.id}>
                  <Link to={node.fields.slug}>
                    <Img
                      className="card-image-top"
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                  </Link>
                  <CardBody>
                    <CardTitle>
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                      </Link>
                    </CardTitle>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        />
      </CardBody>
    </Card>
  </div>
)

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Sidebar
