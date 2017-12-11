import React, { Component } from 'react';
import './PlayerList.css';
import PlayerItem from '../PlayerItem/PlayerItem';

class PlayerList extends Component {
  /**
   * Get team logo icon with team name
   * @param {string} teamName
   */
  

  renderPlayerItem(players) {
    if (players.length > 0) {
      return (
        players.map((player, index) =>
          <PlayerItem 
            key={index}
            player={player}/>
        )
      );
    }
    else {
      return (
        <div>No results found.</div>
      );
    }
  }

  render() {
    return (
      <section className="property-list">
        {this.renderPlayerItem(this.props.players)}
      </section>
    );
  }
}

export default PlayerList;
