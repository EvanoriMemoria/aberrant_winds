import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardBody } from "reactstrap"

const AboutPage = () => (
  <Layout pageTitle="About us">
    <SEO title="About" />
    <Card>
      <CardBody>
        <p>
          Aberrant Winds was created for a small community of modded minecraft
          players that came together around the Rebirth of the Night modpack.
        </p>
        <h2>Values</h2>
        Aberrant Winds was created to be a fun and welcoming place for all
        individuals.
        <h2>Hardware</h2>
        <p>
          <b>OS:</b> Debian <br />
          <b>CPU:</b> Ryzen 5 3600 <br />
          <b>Motherboard:</b> MSI MPG X570 Gaming Plus
          <br />
          <b>RAM:</b> 32GB DDR4 3200 MHz
          <br />
          <b>Storage:</b> Samsung 970 EVO SSD 500GB M22 NVMe{" "}
        </p>
        <h2>Location</h2>
        All of the servers are hosted by fergenbergel in Montana. Connection to
        other countries and the East coast has been known to be a bit spotty at
        times, but the majority of the players are not local and have a good time.
      </CardBody>
    </Card>
  </Layout>
)

export default AboutPage
