import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardBody, CardTitle } from "reactstrap"

const AboutPage = () => (
  <Layout pageTitle="About us">
    <SEO title="About" />
    <Card>
      <CardBody>
        <CardTitle>
          <h2>Values</h2>
        </CardTitle>
        <p>
          Aberrant Winds was created to be a fun and welcoming place for all
          individuals. I cannot accomplish this alone so I humbly ask for your
          assistance by being a positive influence to all in the community.
        </p>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle>
          <h2>Advertisements</h2>
        </CardTitle>
        <p>
          Advertisements to the right are solely to support creators I appreciate. I do not get any revenue from these links!
          Head to their websites/social media and check them out!
        </p>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle>
          <h2>Hardware</h2>
        </CardTitle>
        <h4>Server 1</h4>
        <p>
          <b>OS:</b> Debian <br />
          <b>CPU:</b> Ryzen 5 3600 <br />
          <b>Motherboard:</b> MSI MPG X570 Gaming Plus
          <br />
          <b>RAM:</b> 32GB DDR4 3200 MHz
          <br />
          <b>Storage:</b> Samsung 970 EVO SSD 500GB M22 NVMe{" "}
        </p>
        <h4>Server 2</h4>
        <p>
          <b>OS:</b> Ubuntu <br />
          <b>CPU:</b> Ryzen 7 1800X <br />
          <b>Motherboard:</b> X370 Taichi
          <br />
          <b>RAM:</b> 16GB DDR4 2134 MHz
          <br />
          <b>Storage:</b> BC501 Hynix NVMe 512GB SSD{" "}
        </p>
        <h4>Server 3</h4>
        <p>
          <b>OS:</b> Ubuntu Nextcloud for Raspberry Pi<br />
          <b>System:</b> Raspberry Pi 4b 8GB <br />{" "}
        </p>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle>
          <h2>Location</h2>
        </CardTitle>
        <p>
          All of the servers are hosted by fergenbergel in Montana. Connection
          to other countries and the East coast has been known to be a bit
          spotty at times, but the majority of the players are not local and
          have a good time.
        </p>
      </CardBody>
    </Card>
  </Layout>
)

export default AboutPage
