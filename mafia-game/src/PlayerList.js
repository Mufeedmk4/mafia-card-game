import React from 'react';

const PlayerList = ({ players, onVote, gamePhase }) => {
  return (
    <div>
      <h3>Player List</h3>
      <ul>
        {players.map(player => (
          <li key={player.id}>
            <span>{player.name}</span>
            {gamePhase === 'night' && player.alive && (
              <button onClick={() => onVote(player.id)}>Vote</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
