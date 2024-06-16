import React from "react";
import IconWithText from "../IconWithText/IconWithText";

import Avatar from "../Avatar/Avatar";

import "./Header.scss";

import logoPeople from "../../helpers/icon/group.png";
import logoBell from "../../helpers/icon/bell.png";
import logoCoin from "../../helpers/icon/coin.png";
import userFoto from "../../helpers/icon/user.png";
import Icon from "../ui/Icon/Icon";

const Header: React.FC = () => {
	const friendsCount = "223";
	const coinsCount = "25.000"

  return (
    <header className="header">
      <div className="header-left">
        <Icon className="header-bell" src={logoBell} alt="logoBell" />
        <Avatar avatarUrl={userFoto} />
      </div>
      <div className="header-right">
        <IconWithText src={logoPeople} alt="logoFriends" text={friendsCount} />
        <IconWithText src={logoCoin} alt="logoCoin" text={coinsCount} />
      </div>
    </header>
  );
};

export default Header;
