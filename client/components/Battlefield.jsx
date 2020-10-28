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
  checkEnemyCount, clearDestroyedShips, spawnEnemyShips
} from '../helpers/enemyShips'

import {
  checkEnemyHit 
} from '../helpers/hitDetection'

export let boundaryCheckInterval
export let checkHealthInterval 
export let checkEnemyCountInterval
export let checkEnemyHitInterval
export let checkDestroyedShipsInterval

class Battlefield extends Component {
 
  componentDidMount() {
    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("keyup", onKeyUp)
    boundaryCheckInterval = setInterval(boundaryCheck, 10)
    checkHealthInterval = setInterval(checkPlayerHealth, 100)
    checkEnemyCountInterval = setInterval(checkEnemyCount,100)
    checkEnemyHitInterval = setInterval(checkEnemyHit, 10)
    checkDestroyedShipsInterval = setInterval(clearDestroyedShips,10)
    spawnEnemyShips()
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", onKeyDown)
    document.removeEventListener("keyup", onKeyUp)
    clearInterval(boundaryCheckInterval)
    clearInterval(checkHealthInterval)
    clearInterval(checkEnemyCountInterval)
    clearInterval(checkEnemyHitInterval)
    clearInterval(checkDestroyedShipsInterval)
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