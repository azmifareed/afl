import React from 'react';
import ReactDOM from 'react-dom';
import PlayerItem from './PlayerItem';

let props;

beforeEach(() => {
  props = {
    player:  {
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
    }
  };
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayerItem 
    key='1'
    player={props.player} />, div);
});



