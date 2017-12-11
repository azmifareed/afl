import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import './App.css';
import ratingData from '../data/ratings.json';
import PlayerList from '../components/PlayerList/PlayerList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ratingData: ratingData.playerRatings
    }
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="AFL" />
          <h1 className="app-title">Player Rankings</h1>
        </header>
        <div className="app-container">
          <PlayerList players={this.state.ratingData}></PlayerList>
        </div>
      </div>
    );
  }
}

export default App;
