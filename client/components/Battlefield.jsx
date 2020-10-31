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
  checkEnemyCount, clearDestroyedShips, spawnEnemyShips, fireEnemyShots
} from '../helpers/enemyShips'

import {
  checkEnemyHit, checkPlayerHit 
} from '../helpers/hitDetection'

export let boundaryCheckInterval
export let checkHealthInterval 
export let checkEnemyCountInterval
export let checkEnemyHitInterval
export let checkDestroyedShipsInterval
export let fireEnemyShotsInterval
export let checkPlayerHitInterval

class Battlefield extends Component {
 
  componentDidMount() {
    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("keyup", onKeyUp)
    boundaryCheckInterval = setInterval(boundaryCheck, 10)
    checkHealthInterval = setInterval(checkPlayerHealth, 100)
    checkEnemyCountInterval = setInterval(checkEnemyCount,100)
    checkEnemyHitInterval = setInterval(checkEnemyHit, 10)
    checkDestroyedShipsInterval = setInterval(clearDestroyedShips,10)
    fireEnemyShotsInterval = setInterval(fireEnemyShots, 2000)
    checkPlayerHitInterval = setInterval(checkPlayerHit, 10)
    spawnEnemyShips()
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