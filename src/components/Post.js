import React from 'react'
import { Link } from 'gatsby'
import { Badge, Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'

const Post = ({ title, author, path, date, body, fluid, tags }) => {
    return(
        <Card>
            <Link to={path}>
                <Img className="card-image-top" fluid={fluid} />
            </Link>
            <CardBody>
                <CardTitle>
                    <Link to={path}>{title}</Link>
                </CardTitle>
                <CardSubtitle>
                    <span classname="text-info">{date}</span> by{' '}
                    <span classname="text-info">{author}</span>
                </CardSubtitle>
                <CardText>{body}</CardText>
                <ul className="post-tags">
                    {tags.map(tag => (
                        <li>
                            <Link to={'/tag/${slugify(tag)}'}>
                                <Badge color="primary" className="text-uppercase">{tag}</Badge>
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link to={path} className="btn btn-outline-primary float-right text-uppercase">Read more</Link>
            </CardBody>
        </Card>
    )
}

export default Post