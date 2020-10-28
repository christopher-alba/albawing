import {
  START_GAME,
  EXIT_GAME,
  ENTER_SCORESCREEN
} from '../types'

export const startGame = data => dispatch => {
  try{
    dispatch({
      type: START_GAME,
      payload: data
    })
  } catch (err) {
    console.log("Error in startGame action:", err.message);
  }
}

export const exitGame = data => dispatch => {
  try {
    dispatch({
      type: EXIT_GAME,
      payload:data
    })
  } catch (err) {
    console.log("Error in exitGame action", err.message)
  }
}

export const enterScorescreen = data => dispatch => {
  try {
    dispatch ({
      type: ENTER_SCORESCREEN,
      payload: data
    })
  } catch (err) {
    console.log("Error in enterScorescreen action", err.message)
  }
}