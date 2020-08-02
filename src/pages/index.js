import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/Layout"
import { Card } from "react-bootstrap"

const Index = () => {
  const data = useStaticQuery(graphql`
  query{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `)

  return (
    <div>
      <Layout>
      <Card style={{ width: '18rem' }}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <Card.Body>
            <Link to={`/blog/${edge.node.fields.slug}`}>
              <Card.Title>{edge.node.frontmatter.title}</Card.Title>
              <Card.Text>{edge.node.frontmatter.date}</Card.Text>
            </Link>
            </Card.Body>
          )
        })}
      </Card>

      </Layout>
      </div>  
  )
}

export default Index
