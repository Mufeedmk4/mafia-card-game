import React, { useState } from 'react';
import PlayerList from './PlayerList';
import Discussion from './Discussion';

const GameBoard = ({ players, onElimination }) => {
  const [gamePhase, setGamePhase] = useState('night'); // or 'day'
  const [votingPlayerId, setVotingPlayerId] = useState(null);

  const handleVote = (votedPlayerId) => {
    setVotingPlayerId(votedPlayerId);
  };

  const handlePhaseChange = () => {
    setGamePhase(gamePhase === 'night' ? 'day' : 'night');
  };

  return (
    <div>
      <h1>Mafia Game</h1>
      <h2>Game Phase: {gamePhase}</h2>
      <PlayerList players={players} onVote={handleVote} gamePhase={gamePhase} />
      {gamePhase === 'day' && <Discussion players={players} onElimination={onElimination} />}
      <button onClick={handlePhaseChange}>Change Phase</button>
    </div>
  );
};

export default GameBoard;
