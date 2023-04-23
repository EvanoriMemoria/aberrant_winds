import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Card,
  CardTitle,
  CardBody,
  Form,
} from "reactstrap"

const Footer = () => (
  <div className="site-footer">
    <Card>
      <CardBody>
        <CardTitle>
        <a
            href="https://discord.gg/Yq7n97f"
            target="_blank"
            rel="noopener noreferrer"
            className="discord"
          >
            <FontAwesomeIcon icon={["fab", "discord"]} size="2x" /> <br/>
          </a>
        </CardTitle>
        <Form className="text-center">
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
        </Form>
      </CardBody>
    </Card>
  </div>
)

export default Footer
