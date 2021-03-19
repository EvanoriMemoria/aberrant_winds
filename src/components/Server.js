import React from "react"
import { Link } from "gatsby"
import {
  Badge,
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap"
import Img from "gatsby-image"
import { slugify } from "../util/utilityFunctions"

const Server = ({ title, slug, body, status, fluid }) => {
  return (
    <Card className="server-list">
      <Link to={`/${slug}`}>
        <Img className="card-image-top" fluid={fluid} />
      </Link>
      <CardBody>
        <CardTitle>
          <Link to={`/${slug}`}>{title}</Link>
        </CardTitle>
        <CardText>{body}</CardText>
        <Badge className={status==="Active" ? "active-highlight" : "inactive-highlight"}>{status}</Badge>
        <Link
          to={`/${slug}`}
          className="btn btn-outline-light float-right text-uppercase"
        >
          More Info
        </Link>
        
      </CardBody>
    </Card>
  )
}

export default Server
