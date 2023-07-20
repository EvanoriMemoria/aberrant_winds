import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer"
import "../styles/index.scss"
import { Row, Col } from "reactstrap"
import Sidebar from "./Sidebar"
import banner from "../images/banner.png"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"

library.add(fab, faCheckSquare, faCoffee)

const Layout = ({ authorImageFluid, children, pageTitle, postAuthor, pageId }) => {
  //props.pageTitle
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="container" id="content">
          <div class={pageId === "index" ? "container2" : "container3"}>
            <h1 class="centered-title"> {pageTitle}</h1>
            <img class="banner" src={banner} alt="Aberrant Winds Banner"/>
          </div>
        <Row>
          <Col md="8">{children}</Col>
          <Col md="4">
            <Sidebar author={postAuthor} authorFluid={authorImageFluid} pageId={pageId} />
          </Col>
        </Row>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
