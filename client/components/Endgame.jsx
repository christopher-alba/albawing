import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { exitGame } from '../store/actions/gamestate'
import './endgame.css'
import Button from 'react-bootstrap/Button'
import { getScore, resetScore } from '../helpers/playerShip'
import { useMutation, useQuery, gql } from '@apollo/client';


const Endgame = (props) => {
  const ADD_SCORE = gql`
  mutation AddScore($name: String!, $score: Float!){
  addScore(name:$name,score:$score) {
    id
    name
    score
  }
}
`;

const GET_NAMES = gql`
  query {
    scores {
      name
    }
  }
`;


  const [addScore, { data }] = useMutation(ADD_SCORE)
  const names = useQuery(GET_NAMES);
  const score = getScore()
  const [name, setName] = useState('name')

  const handleChange = (evt) => {
    setName(evt.target.value)
  }
  const handleClick = () => {
    console.log(names.data.scores);
    if(name === 'name'){
      return 
    }
    for(let i = 0; i < names.data.scores.length; i++){
      if(name === names.data.scores[i].name){
        return
      }
    }
    addScore({
      variables: { name: name, score: score}
    })
    location.reload()
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