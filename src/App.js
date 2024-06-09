import React  from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";
import DarkMode from "./Components/DarkMode";

function App() {
  return (
    
      <div className="container">
        <CurrentLocation />
        <DarkMode/>
      </div>
     
    
  );
}

export default App;
