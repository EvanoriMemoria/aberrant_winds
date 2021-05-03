import React from "react"
import { Link } from "gatsby"
import authors from "../util/authors"
import {
  Badge,
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap"
import { slugify } from "../util/utilityFunctions"

const Post = ({ title, author, slug, date, body, tags }) => {
  return (
    <Card className="server-list">
      <CardBody>
        <span className="post-date">{date}</span>
        <CardTitle>
          <h2 className="newsHeader">
            <Link to={`/${slug}`}>{title}</Link>
          </h2>
        </CardTitle>
        <CardSubtitle>
          Posted by{" "}
          <Link
            to={`/author/${slugify(authors[0].name)}`}
            className="text-highlight"
          >
            {author}
          </Link>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <ul className="post-tags">
          {tags.map(tag => (
            <li key={tag}>
              <Link to={`/tag/${slugify(tag)}`}>
                <Badge color="primary" className="text-uppercase">
                  {tag}
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to={`/${slug}`}
          className="btn btn-outline-light float-right text-uppercase"
        >
          Read more
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
