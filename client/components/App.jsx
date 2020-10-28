import React from 'react'

import Home from './Home'
import Battlefield from  './Battlefield'
import GameUI from './GameUI'

import { connect } from 'react-redux'
const App = (props) => {
  return (
    <>
      {props.gameStarted && <Home />}
      {!props.gameStarted && <Battlefield />}
      {!props.gameStarted && <GameUI />}
    </>
  )
}

const mapStateToProps = state => ({
  gameStarted: state.gameState.gameStarted
})

export default connect(mapStateToProps)(App)
