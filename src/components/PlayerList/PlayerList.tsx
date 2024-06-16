import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import getAllPlayers from '../../helpers/api/players';
import { PlayerProps } from '../../helpers/types/PlayerProps'

import './PlayerList.scss';

const PlayerList: React.FC = () => {
  const [players, setPlayers] = useState<PlayerProps[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const playersData = await getAllPlayers();
			playersData.sort((playerA:PlayerProps, playerB:PlayerProps) => playerB.wins - playerA.wins)
      setPlayers(playersData);
    };

    fetchPlayers();
  }, []);

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