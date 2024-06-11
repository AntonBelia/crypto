import React from 'react';
import Avatar from '../Avatar/Avatar';

import './Player.scss';

interface PlayerProps {
  name: string;
  wins: number;
  avatarUrl: string;
	index: number;
}

const Player: React.FC<PlayerProps> = ({ name, wins, avatarUrl, index }) => {
  return (
    <div className="player">
      <Avatar avatarUrl={avatarUrl} />
			{index === 0 && (<div className='first'></div>)}
			{index === 1 && (<div className='second'></div>)}
			{index === 2 && (<div className='third'></div>)}
      <div className="player-info">
        <h3>{name}</h3>
        <p>{wins} wins</p>
      </div>
    </div>
  );
};

export default Player;