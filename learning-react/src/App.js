import './App.css';
import {useEffect, useState, useReducer} from "react";

function App() {

  const [checked, setChecked] = useReducer(checked => !checked, false);

// ===============================
// useEffect
// ===============================
  // const [emotion, setEmotion] = useState("happy");
  // const [secondary, setSecondary] = useState("tired");

  // useEffect(() => {
  //   console.log(`It's ${emotion} right now`);
  // }, [emotion, secondary]);

  return (
    <div className='App'>
      <input type="checkbox" value={checked} onChange={setChecked} />
      <label> {checked? "checked" : "not-checked"}</label> 

      {/* <h1>Current emotion is {emotion}</h1>
      <button onClick={() => {setEmotion("Sad")}}>Sad</button>
      <button onClick={() => {setEmotion("Excited")}}>Excited</button>
      <button onClick={() => {setEmotion("happy")}}>back</button>
      <h2> current secondary emotion is {secondary}.</h2>
      <button onClick={() => {setSecondary("Grateful")}}>Grateful</button>
      <button onClick={() => {setSecondary("tired")}}>back</button> */}

    </div>
  );
}

export default App;
