import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Badge, Button } from "reactstrap"
import { slugify } from "../util/utilityFunctions"

const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  return (
    <Layout pageTitle="All Tags">
      <Seo title="All tags" keywords={["tags", "topics"]} />
      <ul className="blanklist">
        {tags.map(tag => (
          <li key={tag} style={{ marginBottom: "10px" }}>
            <Button
              color="dark"
              className="badge-colors"
              href={`/tag/${slugify(tag)}`}
            >
              {tag} <Badge>{tagPostCounts[tag]}</Badge>
            </Button>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default tagsPage
