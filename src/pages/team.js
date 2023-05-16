import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import authors from "../util/authors"
import {
  Button,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Row,
} from "reactstrap"
import fergenImage from "../images/aberrant-winds.png"
import { slugify } from "../util/utilityFunctions"

const TeamPage = () => (
  <Layout pageTitle="Our Team">
    <Seo title="Our Team" />
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={fergenImage} style={{ maxWidth: "100%" }} alt="fergen profile" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: "100%" }}>
          <CardBody>
            <CardTitle>{authors[0].name}</CardTitle>
            <CardText>{authors[0].bio}</CardText>
            <Button
              className="btn btn-outline-light"
              color="$navbar-text"
              href={`/author/${slugify(authors[0].name)}`}
            >
              View Posts and Servers
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default TeamPage
