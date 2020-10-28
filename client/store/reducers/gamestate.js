import {
  START_GAME
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
    default:
      return state
  }
}