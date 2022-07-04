import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App, About, Contact} from './App';
import {BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      {/* to go to about > http://localhost:3000/about */}
      <Route path="/contact" element={<Contact />} />

    </Routes>    
  </BrowserRouter>
);

