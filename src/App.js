import React from "react";
import './App.css';
import NineDays from "./Components/NineDays";
import DistrictWeather from "./Components/DistrictWeather";
import Sunrise from "./Components/Sunrise";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NineDays></NineDays>
      <DistrictWeather></DistrictWeather>
      <div style={{width:1500, backgroundColor: "white"}}><Sunrise></Sunrise></div>
      </header>
    </div>
  );
}

export default App;
