import React, { Component } from 'react'
import './navbar.css'
import { connect } from 'react-redux'
import { startGame } from '../store/actions/gamestate'

class Navbar extends Component {
  handleClick = () => {
    this.props.startGame()
  }
  render() {
    return (
      <div className="navbarCustom">
        <div className="navbarBrand">
          AW
        </div>
        <div className="navbarLinksLeft">
          <div className="link">
            Home
        </div>
          <div className="link">
            Leaderboard
        </div>
        </div>
        <div className="navbarStartGame" onClick={this.handleClick}>
          START GAME
        </div>
        <div className="navbarLinksRight">
          <div className="link">
            LOGIN
        </div>
          <div className="link">
            SIGNUP
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  startGame
}

export default connect(undefined, mapDispatchToProps)(Navbar)