import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { exitGame } from '../store/actions/gamestate'
import './endgame.css'
import Button from 'react-bootstrap/Button'
import { getScore, resetScore } from '../helpers/playerShip'
import { useMutation, gql } from '@apollo/client';


const Endgame = (props) => {
  const SCORE = gql`
  mutation AddScore($name: String!, $score: Float!){
  addScore(name:$name,score:$score) {
    id
    name
    score
  }
}
`;
  const [addScore, { data }] = useMutation(SCORE)
  const score = getScore()
  const [name, setName] = useState('name')

  const handleChange = (evt) => {
    setName(evt.target.value)
  }
  const handleClick = () => {
    if(name === 'name'){
      return 
    }
    addScore({
      variables: { name: name, score: score}
    })
    props.exitGame()
  }
  useEffect(() => {
    return () => {
      resetScore()
    }
  }, [])
  return (
    <div className="scorescreen" >
      <div>
        <p>The game has ended. Here is your score: {score}</p>
        <input onChange={handleChange} type="text" placeholder="Enter your name" />
        <Button onClick={handleClick} variant="dark">Save Score</Button>
      </div>

    </div>
  )

}

const mapDispatchToProps = {
  exitGame
}
export default connect(undefined, mapDispatchToProps)(Endgame)