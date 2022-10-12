import React from "react";
import AlbumCard from "./AlbumCard";
import SideMenu from "./SideMenu";
import MainContent from "./MainContent"
import Logo from "./Logo"
import TopMenu from "./TopMenu";

function App() {
  return (
    <div className="app-container">
      <TopMenu />
      <SideMenu />
      <MainContent />


    </div>
  );
}

export default App;
