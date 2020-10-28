import { keyPressStates } from './playerShip'
export let qInterval
export let primaryCount = 0
export const firePrimary = () => {
  if (keyPressStates.q === false) {
    keyPressStates.q = true

    qInterval = setInterval(() => {
      // get playership and arena elements
      let arena = document.getElementsByClassName("mainContainer")[0]
      let playerShip = document.getElementsByClassName("playerShip")[0]
      // generate a new bullet 
      let bullet = document.createElement("div")
      // apply styles to the bullet
      bullet.classList.add("playerPrimary")
      bullet.classList.add("playerPrimary" + primaryCount)
      bullet.style.top = playerShip.getBoundingClientRect().top + "px"
      bullet.style.left = playerShip.getBoundingClientRect().left + 73 + "px"

      // append the bullet to arena
      arena.appendChild(bullet)
      // animate the bullet
      $(".playerPrimary" + primaryCount).animate({ top: "-200px" }, {
        duration: 500, queue: false, done: () => {
          arena.removeChild(bullet)
        }
      })
      primaryCount++
      // destroy the bullet
    }, 100)
  }
}