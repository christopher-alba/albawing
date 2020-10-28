let keyPressStates = {
  up: false,
  down: false,
  left: false,
  right: false,
  q: false
}

export let upInterval 
export let downInterval
export let leftInterval
export let rightInterval
export let qInterval

export let primaryCount = 0;

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
        // only toggle if key hasnt been pressed already
      if(keyPressStates.left === false){
        keyPressStates.left = true
        // console.log("left")
        leftInterval = setInterval(() => {
          $(".playerShip").animate({ left: "-=10px" }, {duration: 10, queue: false})
        }, 30)
      }
      break;
    case "ArrowRight":
        // only toggle if key hasnt been pressed already
      if(keyPressStates.right === false){
        keyPressStates.right = true
        // console.log("right")
        rightInterval = setInterval(() => {
          $(".playerShip").animate({ left: "+=10px" }, {duration: 10, queue: false})
        }, 30)
      }
      
      break;
    case "q":
      if(keyPressStates.q === false){
        keyPressStates.q = true

        qInterval = setInterval(() => {
          // get playership and arena elements
          let arena = document.getElementsByClassName("mainContainer")[0]
          let playerShip = document.getElementsByClassName("playerShip")[0]
          // generate a new bullet 
          let bullet = document.createElement("div")
          // apply styles to the bullet
          bullet.classList.add("playerPrimary")
          bullet.classList.add("playerPrimary"+ primaryCount)
          bullet.style.top = playerShip.getBoundingClientRect().top + "px"
          bullet.style.left = playerShip.getBoundingClientRect().left + 73 + "px"
          
          // append the bullet to arena
          arena.appendChild(bullet)
          // animate the bullet
          $(".playerPrimary" + primaryCount).animate({top: "-200px"}, {duration: 500, queue: false, done: () => {
            arena.removeChild(bullet)
          }})
          primaryCount++
          // destroy the bullet
        }, 100)
      }
    default:
      console.log(event);
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
    case "q":
      keyPressStates.q = false
      clearInterval(qInterval)
      break;
    default:
      console.log(event);
      break;
  }
}