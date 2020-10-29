export let maxEnemyShips = 1;
export let enemyShipsArray = []
export let enemyCount = 0
let enemyBulletCount = 0;

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

export const clearEnemyCount = () => {
  maxEnemyShips = 1;
}

export const fireEnemyShots = () => {
  let arena = document.getElementsByClassName("mainContainer")[0]
  for(let i = 0; i < enemyShipsArray.length; i++){
    let enemyShip = enemyShipsArray[i].reference
    if(enemyShip !== null){
      // create bullet
      let bullet = document.createElement("div")
      // apply styles to bullet
      bullet.classList.add("enemyBullet")
      bullet.classList.add("enemyBullet" + enemyBulletCount)
      bullet.style.top = enemyShip.getBoundingClientRect().top + 50 + "px"
      bullet.style.left = enemyShip.getBoundingClientRect().left + 73 + "px"
      // append bullet to arena
      arena.appendChild(bullet)
      // animate bullet
      $(".enemyBullet" + enemyBulletCount).animate({top: window.innerHeight + 100 + "px"},{duration:1000, queue: false})
      enemyBulletCount++

    }
  }
}