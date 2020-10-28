import React from 'react'
import Home from './Home'
import { connect } from 'react-redux'
const App = (props) => {
  return (
    <>
      {!props.gameStarted && <Home />}
    </>
  )
}

const mapStateToProps = state => ({
  gameStarted: state.gameState.gameStarted
})

export default connect(mapStateToProps)(App)
