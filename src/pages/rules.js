import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout pageTitle="Community Rules">
    <SEO title="Community Rules" />
    <p>
      I appreciate that you've taken the time to come read the rules. They're
      not anything out of the ordinary but I do expect that all players follow
      them. Basically they cover acting like a decent human being, sure you're
      anonymous, but I have no misgivings banning people who are being
      disruptive or inappropriate let alone anything worse. In no vague terms
      this means:
    </p>
    <ul>
      <li>
        <b>1.</b> No Racism, sexism, prejudice, or discrimination.
      </li>
      <li>
        <b>2.</b> Use common sense and empathy to be kind to your fellow
        community members.
      </li>
      <li>
        <b>3.</b> Don't share personal information, let's keep everyone safe.
      </li>
      <li>
        <b>4.</b> Don't grief, this falls under acting like a decent human
        being.
      </li>
    </ul>
  </Layout>
)

export default AboutPage
