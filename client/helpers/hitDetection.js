import { damageEnemyBoss, enemyShipsArray, getBossHealth, reduceEnemyCount } from './enemyShips'
import {increaseScore, reducePlayerHealth} from './playerShip'

export const checkEnemyHit = () => {
  let playerBullets = document.getElementsByClassName("playerPrimary")
  let arena = document.getElementsByClassName("mainContainer")[0]
  for (let i = 0; i < playerBullets.length; i++) {
    let bullet = playerBullets[i]

    if (bullet !== undefined) {
      let bulletBox = bullet.getBoundingClientRect()

      // check if the bullet has hit a small enemyship
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
              bulletExplode(bulletBox)
            } catch (err) {
            }

          }
        }

      }

      // check if the bullet has hit the enemy boss
      let enemyBoss = document.getElementsByClassName("enemyBoss")[0]
      if(enemyBoss !== undefined ){
        let enemyBossBox = enemyBoss.getBoundingClientRect()
        if(bulletBox.top < enemyBossBox.top + enemyBossBox.height && bulletBox.left > enemyBossBox.left && bulletBox.right < enemyBossBox.right){
          bullet.remove()
          bulletExplode(bulletBox)
          damageEnemyBoss(1)
          console.log(getBossHealth());
        }
        if(getBossHealth() <= 0){
          enemyBoss.remove()
          increaseScore(50)
          reduceEnemyCount()
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
        bulletExplode(bulletBox)
        reducePlayerHealth(10)
      }
    }
  }
}

// call this function whenever a bullet has hit its target
const bulletExplode = (bulletBox) => {
  // create explosion
  let explosion = document.createElement("div")
  explosion.style.top = bulletBox.top + "px"
  explosion.style.left = bulletBox.left + "px"
  explosion.classList.add("bulletExplode")
  
  let arena = document.getElementsByClassName("mainContainer")[0]
  arena.appendChild(explosion)
  explosion.animate({opacity: 0}, {duration: 500, queue: false})
  setTimeout(() => explosion.remove(), 500)
}