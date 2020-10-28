import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { exitGame, enterScorescreen } from '../store/actions/gamestate'
import './gameui.css'
class GameUI extends Component {
  handleClick = (evt) => {
    if (evt.target.name === "exit") {
      this.props.exitGame()
    } else if (evt.target.name === "scorescreen"){
      this.props.enterScorescreen()
    }
  }
  render() {
    return (
      <>
        <div className="guiMainContainer">
          <Button name="exit" variant="light" onClick={this.handleClick}>Exit to Home</Button>
          <Button name="scorescreen" variant = "light" onClick = {this.handleClick}>Exit and Enter Scorescreen</Button>
        </div>
      </>
    )
  }
}
const mapDispatchToProps = {
  exitGame,
  enterScorescreen
}
export default connect(undefined, mapDispatchToProps)(GameUI)