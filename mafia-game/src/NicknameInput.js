import React, { useState } from 'react';

const NicknameInput = ({ onJoin }) => {
  const [nickname, setNickname] = useState('');

  const handleJoin = () => {
    if (nickname.trim() !== '') {
      onJoin(nickname);
    }
  };

  return (
    <div>
      <h1>Welcome to Mafia Game</h1>
      <input
        type="text"
        placeholder="Enter your nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <button onClick={handleJoin}>Join Lobby</button>
    </div>
  );
};

export default NicknameInput;
