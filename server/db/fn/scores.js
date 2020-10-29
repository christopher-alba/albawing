const connection = require('../connection')
const snakecaseKeys = require('snakecase-keys')

function getScores (db = connection) {
  return db('scores').select()
}

function addScore (scoreData, db = connection) {
  return db('scores').insert(snakecaseKeys(scoreData))
}

module.exports = {
  getScores,
  addScore
}