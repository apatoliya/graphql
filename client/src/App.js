/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import logo from './logo.png';
import Launches from './components/launches';
import launch from './components/launch';


const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});


function App() {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <ApolloProvider client={client}>
      <Router>
    <div className="container">
      <img src={logo} atl='SpaceX' style={{width:200, display: 'block', margin:'auto'}}/>
      <Route exact path="/" component={Launches} />
      <Route exact path="/launch/:flight_number" component={launch} />

    </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
