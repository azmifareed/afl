import React from 'react';
import ReactDOM from 'react-dom';
import PlayerList from './PlayerList';

let props;

beforeEach(() => {
  props = {
    players: [{
      "position": "MIDFIELDER",
      "player": {
        "playerName": {
          "givenName": "Patrick",
          "surname": "Dangerfield"
        }
      },
      "team": {
        "teamName": "Geelong Cats"
      },
      "detailedRatings": [
        {
          "ranking": 1,
          "ratingType": "OVERALL"
        }
      ]
    }]
  };
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayerList players={props.players} />, div);
});
