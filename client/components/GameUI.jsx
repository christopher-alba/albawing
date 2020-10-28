import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import {exitGame} from '../store/actions/gamestate'
class GameUI extends Component {
  handleClick = (evt) => {
    if(evt.target.name === "exit"){
      this.props.exitGame()
    }
  }
  render() {
    return (
      <>
        <div>
          <Button name="exit" variant="light" onClick={this.handleClick}>Exit Game</Button>
        </div>
      </>
    )
  }
}
const mapDispatchToProps = {
  exitGame
}
export default connect(undefined, mapDispatchToProps)(GameUI)