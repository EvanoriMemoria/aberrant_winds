import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import authors from "../util/authors"
import {
  Button,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Row,
} from "reactstrap"
import JohnImage from "../images/john.jpg"
import { slugify } from "../util/utilityFunctions"

const TeamPage = () => (
  <Layout pageTitle="Our Team">
    <SEO title="Our Team" />
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={JohnImage} style={{ maxWidth: "100%" }} alt="fergen profile" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: "100%" }}>
          <CardBody>
            <CardTitle>{authors[2].name}</CardTitle>
            <CardText>{authors[2].bio}</CardText>
            <Button
              className="text-uppercase"
              color="primary"
              href={`/author/${slugify(authors[2].name)}`}
            >
              View Hosted Servers
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default TeamPage
