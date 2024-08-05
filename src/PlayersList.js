
import React from 'react';
import Player from './Player';
import players from './players';

const PlayersList = () => {
  return (
    <div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </div>
    </div>
  );
};

export default PlayersList;