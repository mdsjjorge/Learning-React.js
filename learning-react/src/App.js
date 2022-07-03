import './App.css';
import {useState} from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");
  // emotion é nossa State variável
  // setEmotion é a função que usaremos para atualizar o State
  return (
    <div className='App'>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => {setEmotion("Sad")}}>Sad</button>
      <button onClick={() => {setEmotion("Excited")}}>Excited</button>
      <button onClick={() => {setEmotion("happy")}}>back</button>
    </div>
  );
}

export default App;
