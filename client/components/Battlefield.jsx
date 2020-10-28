import React, { Component } from 'react'
import './battlefield.css'

import {
  onKeyDown,
  onKeyUp,
  checkPlayerHealth
} from '../helpers/playerShip'

import {
  boundaryCheck
} from '../helpers/boundaries'

let boundaryCheckInterval
export let checkHealthInterval 

class Battlefield extends Component {
 
  componentDidMount() {
    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("keyup", onKeyUp)
    boundaryCheckInterval = setInterval(boundaryCheck, 10)
    checkHealthInterval = setInterval(checkPlayerHealth, 100)

  }
  componentWillUnmount() {
    document.removeEventListener("keydown", onKeyDown)
    document.removeEventListener("keyup", onKeyUp)
    clearInterval(boundaryCheckInterval)
    
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