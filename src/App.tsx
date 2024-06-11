import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";


import InviteFriendsPage from "./pages/InviteFriendsPage";

function App() {
  return (
    <div className="App">
			<Header />
      <div className="container">
				<InviteFriendsPage />
      </div>
    </div>
  );
}

export default App;
