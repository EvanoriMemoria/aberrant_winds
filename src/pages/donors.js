import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import donators from "../util/donators"
import { Card, CardBody, CardTitle, Row } from "reactstrap"

const DonorPage = () => {
  console.log(donators[0])
  return (
    <Layout pageTitle="Thanks to all our awesome donors!">
      <SEO title="Thanks to all our awesome donors!" />
      <Row className="mb-2">
        <div className="col-md-8">
          <ul>
            {donators.map(donators => (
              <li key={donators} style={{ marginBottom: "10px" }}>
                <Card style={{ minHeight: "100%" }}>
                  <CardBody>
                    <CardTitle>Thank you {donators}!</CardTitle>
                  </CardBody>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </Row>
    </Layout>
  )
}

export default DonorPage
