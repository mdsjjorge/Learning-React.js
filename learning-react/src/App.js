// import logo from './logo.svg';
import './App.css';

// =========== destructuring =============
    // const [a,b,c] = [
    //   "tokio",
    //   "Fortal",
    //   "Stm"
    // ];
    // console.log(b);
// =======================================

function App({Library}) {
  return (
    <div className='App'>
      <h1>Hello world! with {Library}</h1>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
