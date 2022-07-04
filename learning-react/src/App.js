import './App.css';
import {useState} from "react";
// whenever we see a state value being used with a form,
// we think this as a controlled components

function App() {
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000")

    const submit = (e) => {
         e.preventDefault();

         alert(`${title}, ${color}`);
         setTitle("");
         setColor("");
    };
    return (
        <form onSubmit={submit} >
          <input 
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            // taget.value capture what is add to this field
            type = "text"
            placeholder = "color"
          />
          <input 
            value={color}
            onChange={(event) => setColor(event.target.value)}
            type = "color"
          />
          <button> Add </button>
          {/* this forms is creating uncontrolled component */}
        </form>
    );
}

export default App;
