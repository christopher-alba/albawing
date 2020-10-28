import React, { Component } from 'react'
import Navbar from './Navbar'
import './home.css'
import Container from 'react-bootstrap/Container'
class Home extends Component {
  render() {
    return (
      <Container>
        <div className="homeHeader">
          <div>
            <h1>ALBA-WING</h1>
            <p>A web based 2d space shooter</p>
            <p>Designed and built by Christopher Sy Alba</p>
          </div>
        </div>
        <Navbar/>
      </Container>

    )
  }
}

export default Home