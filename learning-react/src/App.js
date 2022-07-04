import './App.css';
// import {useState, useEffect} from "react";

const tahoe_peaks = [
  { name: "Freel", elevation: 1087}, 
  { name: "Monumental", elevation: 3227}, 
  { name: "Pyramid", elevation: 9987}, 
  { name: "Tallac", elevation: 3227} 
];

function List ({data, renderItem, renderEmpty}) {
    return !data.length ? (
      renderEmpty
    ) : (
      <ul>
          {data.map((item) => (
              <li key= {item.name}>
                  {renderItem(item)}
              </li>
          ))}
      </ul>
    );
}

function App() {

      return (
        <List 
          data= {tahoe_peaks}
          renderEmpty={<p> This list is empty</p>}
          renderItem={(item) => (
            <>
              {item.name} - {item.elevation} ft.
            </>
        )}
        />
      );
}

export default App;
