import React from 'react';

import Avatar from '../Avatar/Avatar';

import './Header.scss';

import logoPeople from '../../helpers/icon/group.png'
import logoBell from '../../helpers/icon/bell.png'
import logoCoin from '../../helpers/icon/coin.png'
import userFoto from '../../helpers/icon/user.png'

const Header: React.FC = () => {
	return (
			<header className="header">
				<div className="header-left">
					<img className="header-bell" src={logoBell} alt="logo" />
					<Avatar avatarUrl={userFoto}/>
				</div>
				<div className="header-right">
					<img className="logo-header" src={logoPeople} alt="logo" />
					<p className="header-friends-text">223</p>
					<img className="logo-header" src={logoCoin} alt="logo" />
					<p className="header-coin-text">25.500</p>
				</div>
				
				

			</header>
	);
};

export default Header;