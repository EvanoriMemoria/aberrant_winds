import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Card, CardBody, CardTitle } from "reactstrap"

const AboutPage = () => (
  <Layout pageTitle="About us">
    <Seo title="About" />
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
          <h2>Overview</h2>
        </CardTitle>
        <p>
          Aberrant Winds is and has been a community full of fantastic people
          who have bonded over our love of games. My goal is to add a little
          extra spice into the mix, with your help of course. The vision is to
          create a community and space where players can all band together and
          enjoy starting and playing through games together, as well as
          reminisce on old ones. Every several months we will vote to create a
          new server to be hosted on a game of your choice. The goal is to
          create a lively and fun community where people can relax and play
          games in a supportive environment with a health amount of player
          agency around the games you wish to play.
        </p>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle>
          <h2>Advertisements</h2>
        </CardTitle>
        <p>
          Advertisements are solely to support creators I appreciate. I do not
          get any revenue from these links! Head to their websites/social media
          and check them out!
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
