import './App.css';
import {useRef} from "react";
// useRef is a hook that is going to reach out to some sort of UI
// element and get its value


function App() {
    const txtTitle = useRef();
    const hexColor = useRef();

    const submit = (e) => {
         e.preventDefault();
         const title = txtTitle.current.value;
         const color = hexColor.current.value;
         alert(`${title}, ${color}`)
         txtTitle.current.value = ""
         hexColor.current.value = ""
    };
    return (
        <form onSubmit={submit} >
          <input 
            ref={txtTitle}
            type = "text"
            placeholder = "color"
          />
          <input 
            ref={hexColor}
            type = "color"
          />
          <button> Add </button>
          {/* this forms is creating uncontrolled component */}
        </form>
    );
}

export default App;
