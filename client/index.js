import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './store/reducers/index'

import App from './components/App'
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: './graphql',
  cache: new InMemoryCache()
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const envr =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunk)
    : composeEnhancers(applyMiddleware(thunk))
export const store = createStore(reducers, envr)


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
    ,
    document.getElementById('app')
  )
})
