import React from 'react';
import Player from '../Player/Player';

import './PlayerList.scss';

interface PlayerListProps {
  players: {
    name: string;
    wins: number;
    avatarUrl: string;
  }[];
}

const PlayerList: React.FC<PlayerListProps> = ({ players }) => {
  return (
    <div className="player-list">
      {players.map((player, index) => (
        <div key={index} className="player-list-item">
          <Player name={player.name} wins={player.wins} avatarUrl={player.avatarUrl} index={index} />
        </div>
      ))}
    </div>
  );
};

export default PlayerList;