import React, { useState } from 'react';
import PlayerList from './PlayerList';
import Discussion from './Discussion';

const GameBoard = ({ players, onElimination }) => {
  const [gamePhase, setGamePhase] = useState('night'); // or 'day'
  const [isMafia, setIsMafia] = useState(false); // Assume initially not a mafia
  const [votes, setVotes] = useState({}); // Track votes for each player

  const handleVote = (votedPlayerId) => {
    if (gamePhase === 'day') {
      setVotes(prevVotes => ({
        ...prevVotes,
        [votedPlayerId]: (prevVotes[votedPlayerId] || 0) + 1,
      }));
    }
  };

  const handleDayElimination = () => {
    if (gamePhase === 'day') {
      const playerIds = Object.keys(votes);
      let maxVotes = 0;
      let playerToEliminate = null;

      playerIds.forEach(playerId => {
        if (votes[playerId] > maxVotes) {
          maxVotes = votes[playerId];
          playerToEliminate = playerId;
        }
      });

      if (playerToEliminate) {
        onElimination(playerToEliminate);
      }
    }
  };

  const handleMafiaElimination = (eliminatedPlayerId) => {
    if (isMafia) {
      onElimination(eliminatedPlayerId);
    }
  };

  const handlePhaseChange = () => {
    setGamePhase(gamePhase === 'night' ? 'day' : 'night');
    setIsMafia(!isMafia); // Toggle mafia status during phase change
  };

  return (
    <div>
      <h1>Mafia Game</h1>
      <h2>Game Phase: {gamePhase}</h2>
      <PlayerList players={players} onVote={handleVote} gamePhase={gamePhase} />
      {gamePhase === 'day' && (
        <Discussion
          players={players}
          onElimination={isMafia ? handleMafiaElimination : handleDayElimination}
        />
      )}
      <button onClick={handlePhaseChange}>Change Phase</button>
    </div>
  );
};

export default GameBoard;
