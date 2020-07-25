import React from 'react';
import './App.scss';
import Routes from "./routes";
import Header from "./components/Header/Header";
import BottomBar from "./components/BottomBar/BottomBar";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes />
      <BottomBar></BottomBar>
    </div>
  );
}

export default App;
