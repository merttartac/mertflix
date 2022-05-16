import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import Home from './Mertflix/Home';
import Header from './Mertflix/components/Header';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
