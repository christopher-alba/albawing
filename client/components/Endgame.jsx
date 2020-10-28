import React, { Component } from 'react'
import { connect } from 'react-redux'
import { exitGame } from '../store/actions/gamestate'
import './endgame.css'
import Button from 'react-bootstrap/Button'
class Endgame extends Component {
  render() {
    return (
      <div className="scorescreen" >
        <div>
          <p>The game has ended. Here is your score: 214124124</p>
          <input type="text" placeholder="Enter your name" />
          <Button onClick={() => this.props.exitGame()} variant="dark">Save Score</Button>
        </div>

      </div>
    )
  }
}

const mapDispatchToProps = {
  exitGame
}
export default connect(undefined, mapDispatchToProps)(Endgame)