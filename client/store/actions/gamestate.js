import {
  START_GAME,
  EXIT_GAME,
  ENTER_SCORESCREEN
} from '../types'

import {
  downInterval,
  leftInterval,
  onKeyDown,
  onKeyUp,
  resetPlayerHealth,
  resetScore,
  rightInterval,
  upInterval
} from '../../helpers/playerShip'

import {
  boundaryCheckInterval,
  checkHealthInterval,
  checkEnemyCountInterval,
  checkEnemyHitInterval,
  checkDestroyedShipsInterval,
  fireEnemyShotsInterval,
  checkPlayerHitInterval
} from "../../components/Battlefield"

import {
  clearEnemyCount,resetShipsArray
} from "../../helpers/enemyShips"
import { qInterval } from '../../helpers/playerWeapons'

export const startGame = data => dispatch => {

  try {
    dispatch({
      type: START_GAME,
      payload: data
    })
  } catch (err) {
    console.log("Error in startGame action:", err.message);
  }
}

export const exitGame = data => dispatch => {

  endTheGame()
  resetScore()
  
  try {
    dispatch({
      type: EXIT_GAME,
      payload: data
    })
  } catch (err) {
    console.log("Error in exitGame action", err.message)
  }
}

export const enterScorescreen = data => dispatch => {

  endTheGame()

  try {
    dispatch({
      type: ENTER_SCORESCREEN,
      payload: data
    })
  } catch (err) {
    console.log("Error in enterScorescreen action", err.message)
  }
}

function endTheGame() {
  resetPlayerHealth()
  document.removeEventListener("keydown", onKeyDown)
  document.removeEventListener("keyup", onKeyUp)
  clearInterval(boundaryCheckInterval)
  clearInterval(checkHealthInterval)
  clearInterval(checkEnemyCountInterval)
  clearInterval(checkEnemyHitInterval)
  clearInterval(checkDestroyedShipsInterval)
  clearInterval(fireEnemyShotsInterval)
  clearInterval(checkPlayerHitInterval)
  clearInterval(upInterval)
  clearInterval(downInterval)
  clearInterval(leftInterval)
  clearInterval(rightInterval)
  clearInterval(qInterval)
  resetShipsArray()
  clearEnemyCount()
}