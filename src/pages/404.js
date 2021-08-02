import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTitle="Oops, something went wrong...">
    <Seo title="404: Not found" />
    <Link className="btn btn-primary text-uppercase" to={'/'}>
      Return Home
    </Link>
  </Layout>
)

export default NotFoundPage
