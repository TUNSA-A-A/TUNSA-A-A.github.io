import React, {useEffect} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import styled from 'styled-components';
import Home from './Components/Home';
function App() {
  useEffect(() => {
    document.title = "TUNSA Astronomy & Astrophysics"
  }

  );

  return (
    <div className="App">
      < Home />
    </div>
  );
}

export default App;
