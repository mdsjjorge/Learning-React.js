import './App.css';
import {useState} from "react";
// it is important to think about repeatable behavior to create a custom hook
// custom hook is a function

function useInput (initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    {value, onChange: e => setValue(e.target.value)},
    () => setValue(initialValue)
  ]
}

function App() {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = (e) => {
         e.preventDefault();
         alert(`${titleProps.value}, ${colorProps.value}`);
         resetTitle();
         resetColor();
    };
    return (
        <form onSubmit={submit} >
          <input 
            {...titleProps}
            // ... sintax to spread all of the properties
            type = "text"
            placeholder = "color"
          />
          <input 
            {...colorProps}
            type = "color"
          />
          <button> Add </button>
          {/* this forms is creating uncontrolled component */}
        </form>
    );
}

export default App;
