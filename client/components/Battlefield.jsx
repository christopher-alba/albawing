import React, { Component } from 'react'
import './battlefield.css'

class Battlefield extends Component {
  onKeyDown = (event) => {
    console.log(event);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown)
  }
  render() {
    return (
      <div className="mainContainer">
        <img className="playerShip" src="./images/testShip.png" alt="" />
      </div>
    )
  }
}

export default Battlefield