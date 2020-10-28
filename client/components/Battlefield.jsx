import React, { Component } from 'react'
import './battlefield.css'

let keyPressStates = {
  up: false,
  down: false,
  left: false,
  right: false
}

let upInterval
let downInterval

class Battlefield extends Component {
  onKeyDown = (event) => {

    switch (event.key) {
      case "ArrowUp":
        // only toggle if key hasnt been pressed already
        if (keyPressStates.up === false) {
          keyPressStates.up = true
          console.log("up");
          upInterval = setInterval(() => {
            $(".playerShip").animate({ top: "-=5px" }, 10)
          }, 30)
        }
        break;

      case "ArrowDown":
        // only toggle if key hasnt been pressed already
        if (keyPressStates.down === false) {
          keyPressStates.down = true
          console.log("down");
          downInterval = setInterval(() => {
            $(".playerShip").animate({ top: "+=5px" }, 10)
          }, 30)
        }
        break;
      case "ArrowLeft":
        console.log("left");
        break;
      case "ArrowRight":
        console.log("right");
        break;
    }
  }
  onKeyUp = (event) => {
    switch (event.key) {
      case "ArrowUp":
        // only toggle if key hasnt been pressed already

        keyPressStates.up = false
        console.log("up");
        clearInterval(upInterval)
        break;

      case "ArrowDown":
        console.log("down");
        keyPressStates.down = false
        clearInterval(downInterval)
        break;
      case "ArrowLeft":
        console.log("left");
        break;
      case "ArrowRight":
        console.log("right");
        break;
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown)
    document.addEventListener("keyup", this.onKeyUp)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown)
    document.removeEventListener("keyup", this.onKeyUp)
  }

  render() {
    return (
      <div className="mainContainer">
        <img className="playerShip" src="./images/testShip.png" alt="" />
      </div>
    )
  }
}

export default Battlefield