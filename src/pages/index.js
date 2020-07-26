import React from "react"

import { Jumbotron, Container } from "react-bootstrap"

import Layout from "../components/Layout"

const Index = () => {
  return (
    <div>
      <Layout>
      <Jumbotron fluid>
        <Container>
          <h1>Angel's Tech Blog</h1>
          <p>
            A beginner navigating her way in tech
          </p>
        </Container>
      </Jumbotron>
      </Layout>
      </div>  
  )
}

export default Index
