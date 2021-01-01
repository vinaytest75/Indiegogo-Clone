import React from "react";
import "./App.css";
import { ExploreProducts } from "./Components/ExploreProject/Project"
import { Routes } from "./Components/Routes";
import ProfilePage from "./Components/ExploreProject/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="App">
      {/* <Routes />
     <ExploreProducts /> */}
     <ProfilePage />
    </div>
  );
}

export default App;
