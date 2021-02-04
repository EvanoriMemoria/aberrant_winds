import React from 'react'
import { Link } from 'gatsby'
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'

const Post = ({ title, author, path, date, body}) => {
    return(
        <Card>
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