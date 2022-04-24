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
          <button className="btn text-uppercase join-discord">
            <a
              href="https://discord.gg/Yq7n97f"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Join the Discord!{" "}
            </a>
          </button>
        </Form>
      </CardBody>
    </Card>
  </div>
)

export default Footer
