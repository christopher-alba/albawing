import {
  START_GAME
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