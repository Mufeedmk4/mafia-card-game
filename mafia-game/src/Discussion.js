import React, { useState } from 'react';

const Discussion = ({ players, onElimination }) => {
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  const handleSelectPlayer = (playerId) => {
    setSelectedPlayerId(playerId);
  };

  const handleEliminate = () => {
    if (selectedPlayerId) {
      onElimination(selectedPlayerId);
      setSelectedPlayerId(null);
    }
  };

  return (
    <div>
      <h3>Discussion and Voting</h3>
      <p>Select a player to vote:</p>
      <ul>
        {players.map(player => (
          player.alive && (
            <li
              key={player.id}
              className={selectedPlayerId === player.id ? 'selected' : ''}
              onClick={() => handleSelectPlayer(player.id)}
            >
              {player.name}
            </li>
          )
        ))}
      </ul>
      <button onClick={handleEliminate}>Eliminate</button>
    </div>
  );
};

export default Discussion;
