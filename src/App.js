import React, { useState, useEffect } from "react";
import "./App.css";
import { ColorRing } from "react-loader-spinner";

const TrafficSignal = ({ color }) => {
  return <div className={`traffic-light ${color}`} />;
};

const App = () => {
  const [red, setRed] = useState("");
  const [yellow, setYellow] = useState("");
  const [green, setGreen] = useState("");
  const [show, setShow] = useState(false);

  // let interval;

  useEffect(() => {
    timeStart();
  }, []);

  const timeStart = () => {
    setTimeout(() => {
      setRed("red");
    }, 3000);
  };

  if (red === "red") {
    setTimeout(() => {
      setYellow("yellow");
    }, 3000);
  }

  if (yellow === "yellow") {
    setTimeout(() => {
      setGreen("green");
      setShow(true);
    }, 3000);
  }

  return (
    <div className="App">
      <h1>Traffic Signal App</h1>
      <div className="traffic-signals">
        {red == "red" ? (
          <TrafficSignal color={`${red === "red" ? "red" : "grey"}`} />
        ) : (
          <ColorRing visible={true} height="80" width="80" />
        )}

        <TrafficSignal color={`${yellow === "yellow" ? "yellow" : "grey"}`} />

        <TrafficSignal color={`${green === "green" ? "green" : "grey"}`} />
      </div>
    </div>
  );
};

export default App;
