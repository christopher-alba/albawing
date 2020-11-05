// call this function whenever a bullet has hit its target
export const bulletExplode = (bulletBox) => {
  // create explosion
  let explosion = document.createElement("div")
  explosion.style.top = bulletBox.top + "px"
  explosion.style.left = bulletBox.left + "px"
  explosion.classList.add("bulletExplode")

  let arena = document.getElementsByClassName("mainContainer")[0]
  arena.appendChild(explosion)
  explosion.animate({ opacity: 0 }, { duration: 500, queue: false })
  setTimeout(() => explosion.remove(), 500)
}

export const enemyShipExplode = (shipBox) => {
  // create explosion
  let explosion = document.createElement("div")
  explosion.style.top = shipBox.top + "px"
  explosion.style.left = shipBox.left + "px"
  explosion.classList.add("shipExplode")

  let arena = document.getElementsByClassName("mainContainer")[0]
  arena.appendChild(explosion)
  explosion.animate({ opacity: 0 }, { duration: 1000, queue: false })
  setTimeout(() => explosion.remove(), 1000)
}

export const enemyBossExplode = (bossBox) => {
  // create explosion
  let explosion = document.createElement("div")
  explosion.style.top = bossBox.top + "px"
  explosion.style.left = bossBox.left + "px"
  explosion.classList.add("bossExplode")

  let arena = document.getElementsByClassName("mainContainer")[0]
  arena.appendChild(explosion)
  explosion.animate({ opacity: 0 }, { duration: 1000, queue: false })
  setTimeout(() => explosion.remove(), 1000)
}