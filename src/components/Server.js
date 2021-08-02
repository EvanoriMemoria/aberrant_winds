import React from "react"
import { Link } from "gatsby"
import {
  Badge,
  Card,
  CardTitle,
  CardText,
  CardBody,
} from "reactstrap"
import { GatsbyImage } from "gatsby-plugin-image";

const Server = ({ title, slug, body, status, fluid }) => {
  return (
    <Card className="server-list">
      <Link to={`/${slug}`}>
        <GatsbyImage image={fluid} className="card-image-top" />
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
  );
}

export default Server
