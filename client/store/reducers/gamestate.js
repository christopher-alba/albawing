import {
  START_GAME,
  EXIT_GAME
} from '../types'

const INITIAL_STATE = {
  gamestarted: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        gameStarted: true
      }
    case EXIT_GAME:
      return {
        gameStarted: false
      }
    default:
      return state
  }
}