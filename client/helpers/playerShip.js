let keyPressStates = {
  up: false,
  down: false,
  left: false,
  right: false
}

export let upInterval 
export let downInterval
export let leftInterval
export let rightInterval

export const onKeyDown = (event) => {

  switch (event.key) {
    case "ArrowUp":
      // only toggle if key hasnt been pressed already
      if (keyPressStates.up === false) {
        keyPressStates.up = true
        // console.log("up");
        upInterval = setInterval(() => {
          $(".playerShip").animate({ top: "-=10px" }, {duration: 10, queue: false})
        }, 30)
      }
      break;

    case "ArrowDown":
      // only toggle if key hasnt been pressed already
      if (keyPressStates.down === false) {
        keyPressStates.down = true
        // console.log("down");
        downInterval = setInterval(() => {
          $(".playerShip").animate({ top: "+=10px" }, {duration: 10, queue: false})
        }, 30)
      }
      break;
    case "ArrowLeft":
      if(keyPressStates.left === false){
        keyPressStates.left = true
        // console.log("left")
        leftInterval = setInterval(() => {
          $(".playerShip").animate({ left: "-=10px" }, {duration: 10, queue: false})
        }, 30)
      }
      break;
    case "ArrowRight":
      if(keyPressStates.right === false){
        keyPressStates.right = true
        // console.log("right")
        rightInterval = setInterval(() => {
          $(".playerShip").animate({ left: "+=10px" }, {duration: 10, queue: false})
        }, 30)
      }
  
      break;
  }
}
export const onKeyUp = (event) => {
  switch (event.key) {
    case "ArrowUp":
      // only toggle if key hasnt been pressed already

      keyPressStates.up = false
      // console.log("up");
      clearInterval(upInterval)
      break;

    case "ArrowDown":
      // console.log("down");
      keyPressStates.down = false
      clearInterval(downInterval)
      break;
    case "ArrowLeft":
      // console.log("left");
      keyPressStates.left = false
      clearInterval(leftInterval)
      break;
    case "ArrowRight":
      // console.log("right");
      keyPressStates.right = false
      clearInterval(rightInterval)
      break;
  }
}