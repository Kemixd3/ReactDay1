import { useState } from "react";
import "./App.css";
import PropsDemo from "./exercises/PropsDemo";

import ListDemo from "./exercises/ListDemo";
import EventDemo from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffect from "./exercises/UseEffect";
import FetchDemo from "./exercises/FetchDemo";
import LiftingState from "./exercises/LiftingState";
import ContextDemo from "./exercises/ContextDemo";

export default function App() {
  const [selectedView, setSelectedView] = useState("info");

  function handleSelected(selected: string) {
    setSelectedView(selected);
  }

  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView == "info" ? (
              <p>All exercises for React day-1</p>
            ) : null}

            {selectedView == "props1" ? (
              <PropsDemo title="PropsDemo"></PropsDemo>
            ) : null}
            {selectedView == "listDemo" ? (
              <ListDemo title="List Demo"></ListDemo>
            ) : null}
            {selectedView == "EventDemo" ? (
              <EventDemo title="EventDemo"></EventDemo>
            ) : null}
            {selectedView == "FormUncontrolled" ? (
              <FormUncontrolled title="FormUncontrolled"></FormUncontrolled>
            ) : null}
            {selectedView == "StateDemo1" ? (
              <StateDemo1 title="StateDemo1"></StateDemo1>
            ) : null}
            {selectedView == "StateDemo2" ? (
              <StateDemo2 title="StateDemo2"></StateDemo2>
            ) : null}
            {selectedView == "StateDemo3" ? (
              <StateDemo3 title="StateDemo3"></StateDemo3>
            ) : null}
            {selectedView == "UseEffect" ? (
              <UseEffect title="UseEffect"></UseEffect>
            ) : null}
            {selectedView == "FetchDemo" ? (
              <FetchDemo title="FetchDemo"></FetchDemo>
            ) : null}
            {selectedView == "LiftingState" ? (
              <LiftingState title="LiftingState"></LiftingState>
            ) : null}
            {selectedView == "ContextDemo" ? (
              <ContextDemo title="ContextDemo"></ContextDemo>
            ) : null}

            {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
          </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
};

const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected } = props; // Remove btnStyle if not needed
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      {/* Add a new button for each of the exercises you complete */}
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("listDemo")}>
        Props listdemo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("EventDemo")}>
        EventDemo
      </button>
      <button
        className="btn-w100"
        onClick={() => handleSelected("FormUncontrolled")}
      >
        FormUncontrolled
      </button>
      <button className="btn-w100" onClick={() => handleSelected("StateDemo1")}>
        StateDemo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("StateDemo2")}>
        StateDemo2
      </button>
      <button className="btn-w100" onClick={() => handleSelected("StateDemo3")}>
        StateDemo3
      </button>
      <button className="btn-w100" onClick={() => handleSelected("UseEffect")}>
        UseEffect
      </button>
      <button className="btn-w100" onClick={() => handleSelected("FetchDemo")}>
        FetchDemo
      </button>
      <button
        className="btn-w100"
        onClick={() => handleSelected("LiftingState")}
      >
        LiftingState
      </button>
      <button
        className="btn-w100"
        onClick={() => handleSelected("ContextDemo")}
      >
        ContextDemo
      </button>
    </>
  );
};
