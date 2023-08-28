import React from 'react';

const Discussion = ({ players, onElimination, isMafia }) => {
  const handleEliminate = (playerId) => {
    if (isMafia) {
      onElimination(playerId);
    }
  };

  return (
    <div>
      <h3>Discussion</h3>
      <ul>
        {players.map(player => (
          <li key={player.id}>
            <span>{player.name}</span>
            {player.alive && isMafia && (
              <button onClick={() => handleEliminate(player.id)}>Eliminate</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Discussion;
