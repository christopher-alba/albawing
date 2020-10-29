import {
  upInterval,
  downInterval,
  leftInterval,
  rightInterval
} from './playerShip'

export const boundaryCheck = () => {
  let playerShipPos = document.getElementsByClassName("playerShip")[0].getBoundingClientRect()
  if(playerShipPos.top <= 150){
    clearInterval(upInterval)
  } 
  if(playerShipPos.bottom >= window.innerHeight - 100) {
    clearInterval(downInterval)
  } 
  if(playerShipPos.left <= 100){
    clearInterval(leftInterval)
  } 
  if(playerShipPos.right >= window.innerWidth - 100 ){
    clearInterval(rightInterval)
  }
  let playerBullets = document.getElementsByClassName("playerPrimary")
  let arena = document.getElementsByClassName("mainContainer")[0]
  for(let i = 0; i < playerBullets.length; i++){
    let bullet = playerBullets[i].getBoundingClientRect()
    if(bullet.top < -100){
      arena.removeChild(playerBullets[i])
    }
  }
  let enemyBullets = document.getElementsByClassName("enemyBullet")
  for(let i = 0; i < enemyBullets.length; i++){
    let bullet = enemyBullets[i].getBoundingClientRect()
    if(bullet.bottom >= window.innerHeight){
      arena.removeChild(enemyBullets[i])
    }
  }
}