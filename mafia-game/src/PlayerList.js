import React from 'react';

const PlayerList = ({ players, onVote, gamePhase }) => {
  const handleVote = (playerId) => {
    onVote(playerId);
  };

  return (
    <div>
      <h3>Player List</h3>
      <ul>
        {players.map(player => (
          <li key={player.id}>
            <span>{player.name}</span>
            {gamePhase === 'day' && player.alive && (
              <button onClick={() => handleVote(player.id)}>Vote</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
