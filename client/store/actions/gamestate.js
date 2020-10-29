import {
  START_GAME,
  EXIT_GAME,
  ENTER_SCORESCREEN
} from '../types'

import {
  onKeyDown,
  onKeyUp
} from '../../helpers/playerShip'

import {
  boundaryCheckInterval,
  checkHealthInterval,
  checkEnemyCountInterval,
  checkEnemyHitInterval,
  checkDestroyedShipsInterval,
  fireEnemyShotsInterval
} from "../../components/Battlefield"

import {
  clearEnemyCount
} from "../../helpers/enemyShips"

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
 
  document.removeEventListener("keydown", onKeyDown)
  document.removeEventListener("keyup", onKeyUp)
  clearInterval(boundaryCheckInterval)
  clearInterval(checkHealthInterval)
  clearInterval(checkEnemyCountInterval)
  clearInterval(checkEnemyHitInterval)
  clearInterval(checkDestroyedShipsInterval)
  clearInterval(fireEnemyShotsInterval)
  clearEnemyCount()

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

  document.removeEventListener("keydown", onKeyDown)
  document.removeEventListener("keyup", onKeyUp)
  clearInterval(boundaryCheckInterval)
  clearInterval(checkHealthInterval)
  clearInterval(checkEnemyCountInterval)
  clearInterval(checkEnemyHitInterval)
  clearInterval(checkDestroyedShipsInterval)
  clearInterval(fireEnemyShotsInterval)
  clearEnemyCount()
  try {
    dispatch({
      type: ENTER_SCORESCREEN,
      payload: data
    })
  } catch (err) {
    console.log("Error in enterScorescreen action", err.message)
  }
}