const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server
const {
  getScores,
  addScore
} = require("./db/fn/scores")

var { graphqlHTTP } = require('express-graphql');
var {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull
} = require('graphql');

const ScoresType = new GraphQLObjectType({
  name: 'score',
  description: 'This represents a score of a user',
  fields: () => ({
    id: {type: GraphQLNonNull(GraphQLInt)},
    name: {type: GraphQLNonNull(GraphQLString)},
    score: {type: GraphQLNonNull(GraphQLFloat)}
  })
})

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    scores: {
      type: GraphQLList(ScoresType),
      description: 'A list of scores',
      resolve: () => { 
        let scores = getScores()
        return scores
       }
    }
  })
})

// Construct a schema, using GraphQL schema language
const schema = new GraphQLSchema({
  query: RootQueryType
})



server.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));