import React from 'react';

const LobbyScreen = ({ nickname, role, onStart }) => {
  return (
    <div>
      <h1>Welcome to the Mafia Game Lobby</h1>
      <p>Hello, {nickname}! Your assigned role is: {role}</p>
      <button onClick={onStart}>Start Game</button>
    </div>
  );
};

export default LobbyScreen;
