import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardBody, CardTitle } from "reactstrap"

const RulesPage = () => (
  <Layout pageTitle="Community Rules">
    <SEO title="Community Rules" />
    <Card>
      <CardBody>
        <CardTitle>
          <h2>Preface</h2>
        </CardTitle>
        <p>
          I appreciate that you've taken the time to come read the rules.
          They're not anything out of the ordinary but I do expect that all
          players follow them. Ignorance is not a valid excuse to not follow the
          rules. Basically they cover using common human courtesy, sure you're
          anonymous, but I have no misgivings banning people who are being
          disruptive or inappropriate let alone anything worse. In no vague
          terms this means:
        </p>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle>
          <h2>Rules</h2>
        </CardTitle>
        <ol>
          <li>No Racism, sexism, homophobia, prejudice, discrimination, etc.</li>
          <li>
            Use common sense and empathy to be kind to your fellow community
            members.
          </li>
          <li>Don't share personal information.</li>
          <li>Don't grief or break other people's things.</li>
        </ol>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle>
          <h2>Retaliation</h2>
        </CardTitle>
        <p>
          I do not support or endorse retaliation of any kind. If you retaliate
          against another player who you believe has wronged you, you will also
          be punished. Please use the report another player steps found below
          instead and take a break if you must.
        </p>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle>
          <h2>Report another Player</h2>
        </CardTitle>
        <p>
          If you have a grievance with another player please send me a private
          message through discord (fergenbergel#2539) and try your best not to
          escalate the situation. The message should include your minecraft
          username, their minecraft username, the grievance, and the time or
          estimated time it occured. Screenshots and an explanation are an
          effective way of sharing this information.
        </p>
      </CardBody>
    </Card>
  </Layout>
)

export default RulesPage
