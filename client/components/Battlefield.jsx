import React, { Component } from 'react'
import './battlefield.css'
import {
  onKeyDown,
  onKeyUp
} from '../helpers/playerShip'
let keyPressStates = {
  up: false,
  down: false,
  left: false,
  right: false
}

let upInterval
let downInterval
let leftInterval
let rightInterval

class Battlefield extends Component {
 
  componentDidMount() {
    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("keyup", onKeyUp)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", onKeyDown)
    document.removeEventListener("keyup", onKeyUp)
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