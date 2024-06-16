import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import getAllPlayers from '../../helpers/api/players';
import { PlayerProps } from '../../helpers/types/PlayerProps'

import './PlayerList.scss';

import playersLocal from "../..//helpers/api/players.json"

const PlayerList: React.FC = () => {
  const [players, setPlayers] = useState<PlayerProps[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const playersData = await getAllPlayers();
			playersData.sort((playerA:PlayerProps, playerB:PlayerProps) => playerB.wins - playerA.wins)
      setPlayers(playersData);
    };

    // fetchPlayers();

		playersLocal.sort((playerA:PlayerProps, playerB:PlayerProps) => playerB.wins - playerA.wins)
		setPlayers(playersLocal);
  }, []);

  return (
    <ul className="player-list">
      {players.map((player, index) => (
        <li key={index} className="player-list-item">
          <Player name={player.name} wins={player.wins} avatarUrl={player.avatarUrl} index={index} />
        </li>
      ))}
    </ul>
  );
};

export default PlayerList;