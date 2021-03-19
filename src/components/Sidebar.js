import React from "react"
import { Card, CardTitle, CardBody, CardText } from "reactstrap"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Helmet from "react-helmet"
import bedtime from "../images/bedtime.jpeg"
import puppy from "../images/puppy.jpg"

const Sidebar = ({ author, authorFluid }) => (
  <div>
    <Helmet>
      <script src="https://cdn.jsdelivr.net/gh/leonardosnt/mc-player-counter/dist/mc-player-counter.min.js"></script>
    </Helmet>
    {author && (
      <Card>
        <Img className="card-image-top" fluid={authorFluid} />
        <CardBody>
          <CardTitle className="text-center text-uppercase mb-3">
            {author.name}
          </CardTitle>
          <CardText>{author.bio}</CardText>
          <div className="author-social-links text-center">
            <ul>
              <li>
                <a
                  href={author.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="facebook"
                >
                  <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
                </a>
              </li>
              <li>
                <a
                  href={author.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="twitter"
                >
                  <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
                </a>
              </li>
              <li>
                <a
                  href={author.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram"
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
                </a>
              </li>
              <li>
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
    )}
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          <a
            href="https://discord.gg/8jBA5dafAG"
            target="_blank"
            rel="noopener noreferrer"
            className="discord"
          >
            <FontAwesomeIcon icon={["fab", "discord"]} size="4x" /> <br />
          </a>
        </CardTitle>
        <div className="text-center">
          <button className="btn text-uppercase join-discord">
            <a
              href="https://discord.gg/8jBA5dafAG"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Join the Discord!{" "}
            </a>
          </button>
        </div>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">
          Check Out These Cool Projects!
        </CardTitle>
        <CardTitle className="text-center">
          <a
            href="https://www.beansproutillustrations.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bean Sprout Illustrations
          </a>
        </CardTitle>
        <a
          href="https://www.beansproutillustrations.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={bedtime}
            alt="BeanSproutIllustrations"
            style={{ width: "100%" }}
          />
        </a>
        <CardTitle className="text-center">
          <br />
          <a
            href="https://www.instagram.com/alex.rust.art/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alex's Realism Art
          </a>
        </CardTitle>
        <a
          href="https://www.instagram.com/alex.rust.art/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={puppy} alt="Alex's Instagram" style={{ width: "100%" }} />
        </a>
      </CardBody>
    </Card>
    {/* Only shows the player count on the home page. */}
    {/*pageId === "index" && (
      <Card>
        <CardBody>
          <CardTitle className="text-center mb-3">
            Online Players will return when it works better
          </CardTitle>
        </CardBody>
      </Card>
    )*/}
  </div>
)

export default Sidebar
