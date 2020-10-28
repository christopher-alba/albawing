import React, { Component } from 'react'
import { connect } from 'react-redux'
import { exitGame } from '../store/actions/gamestate'
class Endgame extends Component {
  render() {
    return (
      <div>The game has ended. Here is your score: 214124124</div>
    )
  }
}

const mapDispatchToProps = {
  exitGame
}
export default connect(undefined, mapDispatchToProps)(Endgame)