import React from 'react';
//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import Home from './Mertflix/Home';
import Header from './Mertflix/components/Header';
import Movie from './Mertflix/Movie';
import NotFound from './Mertflix/NotFound';

//Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <Router>
    <Header />
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:movieId' element={<Movie />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    
    <GlobalStyle />
  </Router>
);

export default App;