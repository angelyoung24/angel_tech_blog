import React from "react"

import { Jumbotron, Container } from "react-bootstrap"

const Hero = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Angel's Tech Blog</h1>
          <p>A beginner navigating her way in tech</p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Hero
