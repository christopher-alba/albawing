export let maxEnemyShips = 1;
export let enemyShipsArray = []
export let enemyCount = 0

export const checkEnemyCount = () => {
  if (enemyCount === 0) {
    maxEnemyShips++
    spawnEnemyShips()
  }
}

export const spawnEnemyShips = () => {
  enemyCount = 0
  for (let i = 0; i < maxEnemyShips; i++) {
    // create new ship object
    let enemyShip = {}
    // assign values to enemyShip
    enemyShip.health = 5
    let enemyShipElement = document.createElement("img")
    enemyShipElement.classList.add("enemyShip")
    enemyShipElement.src = "./images/testShip.png"
    enemyShip.reference = enemyShipElement
    enemyShipElement.style.position = "fixed"
    enemyShipElement.style.top = Math.random() * 50 + 50 + "px"
    enemyShipElement.style.left = Math.random() * (window.innerWidth - 300) + 50 + "px"
    // append new ship to array
    enemyShipsArray.push(enemyShip)
    // append new ship to arena
    let arena = document.getElementsByClassName("mainContainer")[0]
    arena.appendChild(enemyShipElement)
    // increase enemyCount
    enemyCount++
  }
}

export const clearDestroyedShips = () => {
  for (let i = 0; i < enemyShipsArray.length; i++) {
    if (enemyShipsArray[i].reference != null) {
      if (enemyShipsArray[i].health <= 0) {
        let arena = document.getElementsByClassName("mainContainer")[0]
        arena.removeChild(enemyShipsArray[i].reference)
        enemyShipsArray[i].reference = null
        enemyCount--
      }
    }

  }
}