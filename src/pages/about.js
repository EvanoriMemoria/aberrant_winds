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
        individuals. I cannot accomplish this alone so I humbly ask for your assistance by being a positive influence to all in the community.
        On that note: if you have a grievance with another player please send me a private message through discord (fergenbergel#2539) and try your best not to escalate the situation.
        <h2>Ads</h2>
        You may have noticed there are ad-like images in the sidebar on the right. 
        These are my effort to support small business artists who are just starting out. 
        I do not get any revenue from these but believe they are worth checking out and are positive artistically inclined people. 
        I have gained permission from each of the authors to use the images and have links from this website.
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
