import React, { Component } from 'react';
import './PlayerItem.css';

class PlayerItem extends Component {
  getTeamLogo(teamName) {
    switch (teamName) {
      case 'Adelaide Crows':
        return 'logo-ade';
      case 'Brisbane Lions':
        return 'logo-bri';
      case 'Western Bulldogs':
        return 'logo-bul';
      case 'Carlton':
        return 'logo-car'; 
      case 'Collingwood':
        return 'logo-col'; 
      case 'Essendon':
        return 'logo-ess';
      case 'Fremantle':
        return 'logo-fre';
      case 'Geelong Cats':
        return 'logo-gee';
      case 'Gold Coast':
        return 'logo-gcs';
      case 'Greater Western Sydney':
        return 'logo-gws';
      case 'Hawthorn Hawks':
        return 'logo-haw';
      case 'North Melbourne':
        return 'logo-nor';
      case 'Melbourne Demons':
        return 'logo-mel';
      case 'Port Adelaide':
        return 'logo-por';
      case 'Richmond':
        return 'logo-ric';
      case 'St. Kilda Saints':
        return 'logo-stk';
      case 'Sydney Swans':
        return 'logo-syd';
      case 'West Coast Eagles':
        return 'logo-wce';
      default:
        return '';
    }
  }

  render() {
    return (
      <div className="player">
        <span className="player-ranking">{this.props.player.detailedRatings[0].ranking}</span>
        <div className="player-name">{this.props.player.player.playerName.givenName} {this.props.player.player.playerName.surname}</div>
        <div className="player-team">
          <span className={`team-logo ${this.getTeamLogo(this.props.player.team.teamName)}`}></span>
          <span className="team-name">{this.props.player.team.teamName}</span>
        </div>
        <div className="player-position">{this.props.player.position}</div>
        <div className="clearfix"></div>
      </div>
    );
  }
}

export default PlayerItem;
