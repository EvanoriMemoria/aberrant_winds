import React from "react"
import { Card, CardTitle, CardBody } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import bedtime from "../images/bedtime.jpeg"
import sunsetmountains from "../images/sunset-mountains.jpeg"
import wintermountains from "../images/winter-mountains.jpeg"
import aberrantwindslogo from "../images/kofi_button_blue.webp"
import leeriebard from "../images/leerie-bard-logo.jpg"

const Sidebar = () => (
  <div>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          <a
            href="https://discord.gg/Yq7n97f"
            target="_blank"
            rel="noopener noreferrer"
            className="discord"
          >
            <FontAwesomeIcon icon={["fab", "discord"]} size="4x" /> <br />
          </a>
        </CardTitle>
        <div className="text-center">
          <a
            href="https://discord.gg/Yq7n97f"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn text-uppercase join-discord">
              {" "}
              Join the Discord!{" "}
            </button>
          </a>
        </div>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <a
          href="https://ko-fi.com/aberrantwinds"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={aberrantwindslogo}
            alt="Aberrant Winds Logo"
            style={{ width: "100%" }}
          />
        </a>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center">
          <a
            href="https://twitch.tv/fergenbergel"
            target="_blank"
            rel="noopener noreferrer"
          >
            fergenbergel on Twitch
          </a>
        </CardTitle>
        <a
          href="https://twitch.tv/fergenbergel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={wintermountains}
            alt="fergenbergel's twitch"
            style={{ width: "100%" }}
          />
        </a>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center">
          <a
            href="https://twitch.tv/anthemyst13"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anthemyst on Twitch
          </a>
        </CardTitle>
        <a
          href="https://twitch.tv/anthemyst13"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={sunsetmountains}
            alt="Anthemyst's twitch"
            style={{ width: "100%" }}
          />
        </a>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center">
          <a
            href="https://www.leeriebard.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leerie Bard Stories and Tellings
          </a>
        </CardTitle>
        <a
          href="https://www.leeriebard.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={leeriebard}
            alt="Leerie Bard Logo"
            style={{ width: "100%" }}
          />
        </a>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
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
      </CardBody>
    </Card>
  </div>
)

export default Sidebar
