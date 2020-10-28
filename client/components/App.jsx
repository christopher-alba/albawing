import React from 'react'

import Home from './Home'
import Battlefield from './Battlefield'
import GameUI from './GameUI'

import { connect } from 'react-redux'
import Endgame from './Endgame'
const App = (props) => {
  return (
    <>
      {!props.gameStarted && <Home />}
      {props.scorescreen && <Endgame/>}
      {props.gameStarted && <Battlefield />}
      {props.gameStarted && <GameUI />}
    </>
  )
}

const mapStateToProps = state => ({
  gameStarted: state.gameState.gameStarted,
  scorescreen: state.gameState.scorescreen
})

export default connect(mapStateToProps)(App)
