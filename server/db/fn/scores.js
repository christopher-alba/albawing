const connection = require('../connection')
const snakecaseKeys = require('snakecase-keys')

function getScores(db = connection) {
  return db('scores').select().catch(err => {
    console.error(err)
  })
}

function addScore(scoreData, db = connection) {
  return db('scores').insert(snakecaseKeys(scoreData)).catch(err => {
    console.error(err)
  })
}

module.exports = {
  getScores,
  addScore
}