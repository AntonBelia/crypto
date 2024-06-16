import React from 'react';

import PlayerList from "../components/PlayerList/PlayerList";

const InviteFriendsPage = () => {
  return (
    <div className="invite-friends-page">
      <div className="container">
        <div className="card">
          <div className="sub-card"></div>
          <div className="header-card">
            <h1>LEADING PLAYERS IN NUMBER OF WINS</h1>
          </div>
          <div className="card-content">
						<PlayerList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteFriendsPage;
