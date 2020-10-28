import { enemyShipsArray } from './enemyShips'

export const checkEnemyHit = () => {
  let playerBullets = document.getElementsByClassName("playerPrimary")
  for (let i = 0; i < playerBullets.length; i++) {
    let bullet = playerBullets[i]
    let bulletBox = bullet.getBoundingClientRect()
    for (let j = 0; j < enemyShipsArray.length; j++) {
      let enemyShip = enemyShipsArray[j].reference

      if (enemyShip != null) {
        let enemyShipBox = enemyShip.getBoundingClientRect()
        // if the bullet has hit the enemy, reduce enemy HP
        if (bulletBox.top < enemyShipBox.top + enemyShipBox.height && bulletBox.top + bulletBox.height > enemyShipBox.top && bulletBox.left > enemyShipBox.left && bulletBox.right < enemyShipBox.right) {
          enemyShipsArray[j].health--
          console.log(enemyShipsArray[j].health);
        }
      }

    }
  }
}