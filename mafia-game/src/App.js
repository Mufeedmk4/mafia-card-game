import React, { useState } from 'react';
import NicknameInput from './NicknameInput';
import LobbyScreen from './LobbyScreen';
import GameBoard from './GameBoard';

function App() {
  const [nickname, setNickname] = useState('');
  const [role, setRole] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [players, setPlayers] = useState([]);

  const handleJoin = (newNickname) => {
    setNickname(newNickname);
    
    // Simulated role assignment (replace with your actual logic)
    const assignedRole = Math.random() < 0.5 ? 'Townsperson' : 'Mafia';
    setRole(assignedRole);

    // Update the players array with the new player
    setPlayers([...players, { name: newNickname, role: assignedRole }]);
  };

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleElimination = (eliminatedPlayerId) => {
    // Update the players array to mark the player as eliminated
    const updatedPlayers = players.map(player => {
      if (player.id === eliminatedPlayerId) {
        return { ...player, alive: false };
      }
      return player;
    });
    setPlayers(updatedPlayers);
  };

  if (!nickname) {
    return <NicknameInput onJoin={handleJoin} />;
  } else if (!gameStarted) {
    return <LobbyScreen nickname={nickname} role={role} onStart={handleStartGame} />;
  } else {
    return <GameBoard players={players} onElimination={handleElimination} />;
  }
}

export default App;
