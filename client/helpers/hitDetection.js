import { enemyShipsArray } from './enemyShips'
import {reducePlayerHealth} from './playerShip'

export const checkEnemyHit = () => {
  let playerBullets = document.getElementsByClassName("playerPrimary")
  let arena = document.getElementsByClassName("mainContainer")[0]
  for (let i = 0; i < playerBullets.length; i++) {
    let bullet = playerBullets[i]

    if (bullet !== undefined) {
      let bulletBox = bullet.getBoundingClientRect()
      for (let j = 0; j < enemyShipsArray.length; j++) {
        let enemyShip = enemyShipsArray[j].reference

        if (enemyShip != null) {
          let enemyShipBox = enemyShip.getBoundingClientRect()
          // if the bullet has hit the enemy, reduce enemy HP
          if (bulletBox.top < enemyShipBox.top + enemyShipBox.height && bulletBox.top + bulletBox.height > enemyShipBox.top && bulletBox.left > enemyShipBox.left && bulletBox.right < enemyShipBox.right) {
            enemyShipsArray[j].health--
            // clear the bulletq
            try {
              arena.removeChild(bullet)
            } catch (err) {
            }

          }
        }

      }
    }

  }
}

export const checkPlayerHit = () => {
  let enemyBullets = document.getElementsByClassName("enemyBullet")
  let arena = document.getElementsByClassName("mainContainer")[0]
  for(let i = 0; i < enemyBullets.length; i++){
    let bullet = enemyBullets[i]

    if(bullet !== undefined){
      let bulletBox = bullet.getBoundingClientRect()
      let playerBox = document.getElementsByClassName("playerShip")[0].getBoundingClientRect()
      if((bulletBox.top + bulletBox.height > playerBox.top && bulletBox.top < playerBox.top + playerBox.height && bulletBox.left > playerBox.left + playerBox.width / 3 && bulletBox.right < playerBox.left + playerBox.width - playerBox.width / 3)){
        arena.removeChild(bullet)
        reducePlayerHealth(100)
      }
    }
  }
}