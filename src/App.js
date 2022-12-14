import React from 'react';
import Header from './Header'
import Tindercards from './Tindercards'
import SwipeButtons from './SwipeButtons';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link}
  from "react-router-dom";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
  <div className="App">
    <Router> 
      <Switch>
        <Route path="/chat/:person">
          <Header backButton="/chat"/>
          <ChatScreen/>
        </Route>
        <Route path="/chat">
          <Header backButton="/"/>
          <Chats/>
        </Route>
        <Route path="/">
          <Header/>
          <Tindercards/>
          <SwipeButtons/>
        </Route>
      </Switch>
    </Router>
</div>
  );
}

export default App;


// {/* Tinder cards */}
// {/*Button below Tinder crads */}

// {/*chats screen*/}

// {/* Individual chat screen*/}
