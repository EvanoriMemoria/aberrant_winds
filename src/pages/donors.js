import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import donators from "../util/donators"
import { Card, CardBody, CardTitle } from "reactstrap"

const DonorPage = () => {
  return (
    <Layout pageTitle="Thanks to all our awesome donors!" pageId="donors">
      <Seo title="Thanks to all our awesome donors!" />
      <ul>
        {donators.map(donators => (
          <li key={donators} style={{ marginBottom: "10px" }}>
            <Card className="donor-card-list">
              <CardBody>
                <CardTitle>Thank you {donators}!</CardTitle>
              </CardBody>
            </Card>
          </li>
        ))}
      </ul>
      <Card>
        <CardBody className="donor-card-list">
          <CardTitle>Get your name added here by donating!</CardTitle>
        </CardBody>
      </Card>
    </Layout>
  )
}

export default DonorPage
