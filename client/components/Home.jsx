import Navbar from './Navbar'
import React, { useState, useEffect } from 'react'
import './home.css'
import Container from 'react-bootstrap/Container'
import { useQuery, gql } from '@apollo/client';

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
  const [scores, setScores] = useState([])
  useEffect(() => {
    if (data !== undefined) {
      setScores(data.scores)
      console.log(scores);
    }

  })
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {error.message}</p>;
  console.log(data)
  return (
    <Container>
      <div className="homeHeader">
        <div>
          <h1>ALBA-WING</h1>
          <p>A web based 2d space shooter</p>
          <p>Designed and built by Christopher Sy Alba</p>
        </div>
      </div>
      <Navbar />
      {

        scores !== undefined && scores.map((scoreData) => <div>{scoreData.name}: {scoreData.score}</div>)
      }
    </Container>

  )

}

export default Home