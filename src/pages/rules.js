import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardBody } from "reactstrap"

const RulesPage = () => (
  <Layout pageTitle="Community Rules">
    <SEO title="Community Rules" />
    <Card>
      <CardBody>
        <p>
          I appreciate that you've taken the time to come read the rules.
          They're not anything out of the ordinary but I do expect that all
          players follow them. Basically they cover using common human courtesy,
          sure you're anonymous, but I have no misgivings banning people who are
          being disruptive or inappropriate let alone anything worse. In no
          vague terms this means:
        </p>
        <ol>
          <li>No Racism, sexism, prejudice, or discrimination.</li>
          <li>
            Use common sense and empathy to be kind to your fellow community
            members.
          </li>
          <li>Don't share personal information, let's keep everyone safe.</li>
          <li>
            Don't grief or break other people's things this falls under common
            human courtesy.
          </li>
        </ol>
      </CardBody>
    </Card>
  </Layout>
)

export default RulesPage
