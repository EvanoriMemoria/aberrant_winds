import React from 'react'
import { Link } from 'gatsby'
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'
import Img from 'gatsby-image'

const Post = ({ title, author, path, date, body, fluid }) => {
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
                <Link to={path} className="Link.btn.btn-outline-primary float-right">Read more</Link>
            </CardBody>
        </Card>
    )
}

export default Post