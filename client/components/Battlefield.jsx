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

import {
  checkEnemyCount, spawnEnemyShips
} from '../helpers/enemyShips'

let boundaryCheckInterval
export let checkHealthInterval 
let checkEnemyCountInterval

class Battlefield extends Component {
 
  componentDidMount() {
    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("keyup", onKeyUp)
    boundaryCheckInterval = setInterval(boundaryCheck, 10)
    checkHealthInterval = setInterval(checkPlayerHealth, 100)
    checkEnemyCountInterval = setInterval(checkEnemyCount,100)
    spawnEnemyShips()
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", onKeyDown)
    document.removeEventListener("keyup", onKeyUp)
    clearInterval(boundaryCheckInterval)
    clearInterval(checkHealthInterval)
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