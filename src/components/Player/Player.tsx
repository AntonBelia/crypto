import React from 'react';
import Avatar from '../Avatar/Avatar';

import './Player.scss';
import { PlayerProps } from '../../helpers/types/PlayerProps';

const Player: React.FC<PlayerProps> = ({ name, wins, avatarUrl, index }) => {
	const showTrophy = index < 3;

  return (
    <div className="player">
      <Avatar avatarUrl={avatarUrl} />
			{showTrophy && <div className="trophy"></div>}
      <div className="player-info">
        <h3>{name}</h3>
        <span>{wins} wins</span>
      </div>
    </div>
  );
};

export default Player;