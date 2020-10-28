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
  if(playerShipPos.top >= window.innerHeight - 200) {
    clearInterval(downInterval)
  } 
  if(playerShipPos.left <= 100){
    clearInterval(leftInterval)
  } 
  if(playerShipPos.left >= window.innerWidth - 200 ){
    clearInterval(rightInterval)
  }
}