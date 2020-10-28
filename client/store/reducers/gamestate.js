import {
  START_GAME,
  EXIT_GAME,
  ENTER_SCORESCREEN
} from '../types'

const INITIAL_STATE = {
  gamestarted: false,
  scorescreen: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_GAME:
      return { 
        ...state,
        gameStarted: true
      }
    case EXIT_GAME:
      return {
        ...state,
        gameStarted: false,
        scorescreen: false
      }
    case ENTER_SCORESCREEN:
      return {
        ...state,
        scorescreen: true
      }
    default:
      return state
  }
}