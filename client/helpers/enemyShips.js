export let maxEnemyShips = 1;
export let enemyShipsArray = []
export let enemyCount = 0
let enemyBulletCount = 0;
let roundCounter = 0;
let level = 0;
import {
  increaseScore
} from './playerShip'
export const checkEnemyCount = () => {
  if (enemyCount === 0) {
    if (roundCounter !== 2) {
      roundCounter++
    } else {
      roundCounter = 0
    }
    if (roundCounter === 2) {
      maxEnemyShips += 2
      spawnEnemyShips()
      spawnEnemyBoss()
    } else {
      maxEnemyShips++
      spawnEnemyShips()

    }
  }
}

export const spawnEnemyShips = () => {

  enemyCount = 0

  let maxCount = maxEnemyShips
  if (roundCounter === 2) {
    maxCount = maxEnemyShips - 1
  }

  for (let i = 0; i < maxCount; i++) {
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

let enemyBossHealth = 0

export const spawnEnemyBoss = () => {
  enemyBossHealth = 50
  // assign values to enemyShip
  let enemyShipElement = document.createElement("img")
  enemyShipElement.classList.add("enemyBoss")
  enemyShipElement.src = "./images/testShip.png"
  enemyShipElement.style.position = "fixed"
  enemyShipElement.style.top = 100 + "px"
  enemyShipElement.style.left = window.innerWidth / 2.5 + "px"
  // append new ship to arena
  let arena = document.getElementsByClassName("mainContainer")[0]
  arena.appendChild(enemyShipElement)
  // increase enemyCount
  enemyCount++
}

export const damageEnemyBoss = (damage) => {
  enemyBossHealth -= damage
}
export const getBossHealth = () => {
  return enemyBossHealth
}

export const clearDestroyedShips = () => {
  for (let i = 0; i < enemyShipsArray.length; i++) {
    if (enemyShipsArray[i].reference != null) {
      if (enemyShipsArray[i].health <= 0) {
        let arena = document.getElementsByClassName("mainContainer")[0]
        arena.removeChild(enemyShipsArray[i].reference)
        enemyShipsArray[i].reference = null
        enemyCount--
        increaseScore(1)
      }
    }

  }
}

export const clearEnemyCount = () => {
  maxEnemyShips = 1;
}
export const reduceEnemyCount = () => {
  enemyCount -= 1
}
export const clearRoundCounter = () => {
  roundCounter = 0;
}

export const clearLevels = () => {
  level = 0;
}

export const fireEnemyShots = () => {
  let arena = document.getElementsByClassName("mainContainer")[0]

  // fire bullets for small enemyships
  for (let i = 0; i < enemyShipsArray.length; i++) {
    let enemyShip = enemyShipsArray[i].reference
    if (enemyShip !== null) {
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
      $(".enemyBullet" + enemyBulletCount).animate({ top: window.innerHeight + 100 + "px" }, { duration: 1000, queue: false })
      enemyBulletCount++

    }
  }

  // fire bullets for boss
  // get position of boss
  let enemyBoss = document.getElementsByClassName("enemyBoss")[0]
  // only spawn projectiles if boss exists
  if (enemyBoss !== undefined) {
    let enemyBossBox = enemyBoss.getBoundingClientRect()
    // create projectiles
    for (let i = 0; i < 5; i++) {
      let bossBullet = document.createElement("div")
      bossBullet.style.top = enemyBossBox.top + 200 + "px"
      bossBullet.style.left = enemyBossBox.left - 50 + (i + 1)*(enemyBossBox.width/5) + "px"
      bossBullet.classList.add("enemyBullet")
      bossBullet.classList.add("enemyBullet" + enemyBulletCount)
      arena.appendChild(bossBullet)
      // animate projectiles
      $(".enemyBullet" + enemyBulletCount).animate({ top: window.innerHeight + 100 + "px" }, { duration: 1000, queue: false })
      enemyBulletCount++
    }

  }

}

export const resetShipsArray = () => {
  enemyShipsArray = []
}