import React from 'react';

const RoleCard = ({ player }) => {
  return (
    <div className="role-card">
      <h4>{player.name}</h4>
      <p>Role: {player.role}</p>
    </div>
  );
};

export default RoleCard;
