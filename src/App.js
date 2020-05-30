import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {Sugar} from 'react-preloaders';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Sugar background="#1e2125" color="#0f4c75" time={50000} />
      <Home />
    </div>
  );
}

export default App;
