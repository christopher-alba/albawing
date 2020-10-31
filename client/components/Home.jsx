import Navbar from './Navbar'
import React, { useState, useEffect } from 'react'
import './home.css'
import Container from 'react-bootstrap/Container'
import { useQuery, gql } from '@apollo/client';
import Button from 'react-bootstrap/Button'
const SCORES = gql`
  query {
    scores {
      id
      name
      score
    }
  }
`;

const Home = () => {

  const { loading, error, data } = useQuery(SCORES);
  let sortedScores
  if (data !== undefined) {
    sortedScores = data.scores.slice().sort((a, b) => b.score - a.score)
  }
  const forceUpdate = () => location.reload()

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {error.message}</p>;
  console.log(data)
  return (
    <Container>
      <div className="homeHeader">
        <div>
          <img src="./images/testShip.png" alt=""/>
          <h1>ALBA-WING</h1>
          <p>A web based 2d space shooter</p>
          <p>Designed and built by Christopher Sy Alba</p>
        </div>
      </div>
      <Navbar />
      <div className="controls">
        <div>
          <h2>Controls</h2>
          <p>Arrow keys to move.</p>
          <p>Press Q to shoot.</p>
        </div>

      </div>
      <div className="leaderboard">
        <div>
          <h2>Leaderboard</h2>
          <Button onClick={forceUpdate}>Update</Button>
          <hr />
          <div className="scores">
            {
              sortedScores.map((scoreData, index) => <div>{index + 1}. {scoreData.name}: {scoreData.score}</div>)
            }
          </div>

        </div>
      </div>


    </Container>

  )

}

export default Home